<?php

namespace Modules\Admin\Http\Controllers\pages;

use DB;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;

use Modules\Admin\Entities\Segments;
use Modules\Admin\Entities\Pages;
use Modules\Admin\Entities\ContentPages;
use Modules\Admin\Entities\SegmentsHasInfo;
use Modules\Admin\Entities\Info;
use Modules\Admin\Entities\Contacts;
use Modules\Admin\Entities\ContactTypes;
use Modules\Admin\Entities\Address;
use Modules\Admin\Entities\Emails;
use Modules\Admin\Entities\BusinessHours;
use Modules\Admin\Entities\Social;
use Modules\Admin\Entities\MobileOperators;

// Datatables
use Yajra\Datatables\Datatables;

class ContatosController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return Response
     */
    public function index( Request $request )
    {
        $segment = Segments::find( $request->segment );
        if( $segment ){
            $sobre = Pages::where('seg_id', $segment->id )
                        ->where('name', 'contato');
            return Datatables::of( $sobre->get() )->make(true);
        }
    }

    /**
     * Show the form for creating a new resource.
     * @return Response
     */
    public function create()
    {
        return view('admin::create');
    }

    /**
     * Store a newly created resource in storage.
     * @param  Request $request
     * @return Response
     */
    public function store(Request $request)
    {
    }

    /**
     * Show the specified resource.
     * @return Response
     */
    public function show($id)
    {
        $page       =   Pages::select('id', 'seg_id', 'title', 'subtitle')->find($id);
        $content    =   ContentPages::select('id', 'title', 'subtitle', 'content')
                            ->where('page_id', $page->id )
                            ->first();
        
        $info       =   collect( SegmentsHasInfo::where('seg_id', '=', $page->seg_id )->first() );
        if( $info->has('id') ){
            // GET CONTACTS
            $contacts = collect();
            $lsContacts = Contacts::where('info_id', '=', $info->get('info_id'))->get();
            foreach ( $lsContacts as $contact) {
                $collectRow = collect( $contact );
                $type = ContactTypes::select('id', 'op_id', 'name', 'icon')
                            ->where('contact_id', '=', $contact->id )
                            ->first();
                
                $collectType = collect( $type );
                if( isset( $type->op_id ) ){
                    $operators = MobileOperators::find( $type->op_id );
                    $collectType->put('operators', $operators->name );
                }
                $collectRow->put( 'type', $collectType->filter()->all() );
                $contacts->push( $collectRow->all() );
            }
            $info->put('contacts', $contacts->all() );
            // GET ADDRESS
            $info->put('address', Address::where('info_id', '=', $info->get('info_id'))->get() );
            // GET EMAILS
            $info->put('emails', Emails::where('info_id', '=', $info->get('info_id'))->get() );
            //  GET BUSINESS HOURES
            $info->put('hours', BusinessHours::where('info_id', '=', $info->get('info_id'))->get() );
            // GET SOCIAL
            $info->put('social', $social = Social::where('info_id', '=', $info->get('info_id'))->get() );
        }
        // RETURN COLLECT
        $collect = collect( $page );
        $collect->put('content', $content );
        $collect->put('info', $info->all() );
        return  $collect->all();
    }

    /**
     * Show the form for editing the specified resource.
     * @return Response
     */
    public function edit()
    {
        return view('admin::edit');
    }

    /**
     * Update the specified resource in storage.
     * @param  Request $request
     * @return Response
     */
    public function update($id, Request $request)
    {
        try {
            DB::beginTransaction();
                // SOBRE
                $contato = Pages::find($id);
                $contato->fill($request->all());
                $contato->save();
                // CONTENT CREATE/UPDATE
                $contentId =  self::opContent( $contato->id, $request->content );
                // INFOR CREATE / UPDATE
                if( $contentId ){
                    $collectContent = collect( $request->content );
                    if( count( $request->info ) > 0 ){
                        $hasCollect = collect( SegmentsHasInfo::where('seg_id', '=', $contato->seg_id )->first() );  
                        if( $hasCollect->has( 'id' ) ){
                            $info = Info::find( $hasCollect->get('info_id') );
                        }else{
                            // INFO
                            $info = new Info();
                            $info->name = 'name_' . Carbon::now()->toDateString();
                            $info->save();
                            // HAS
                            $has = new SegmentsHasInfo;
                            $has->seg_id = $contato->seg_id;
                            $has->info_id = $info->id;
                            $has->save();
                        }
                        
                        $colectInfo = collect( $request->info );
                        if( $colectInfo->has('contacts') ){
                            self::opContatcs( $info->id, $request->info['contacts'] );
                        }
                        if( $colectInfo->has('address') ){
                            self::opAddress( $info->id, $request->info['address'] );
                        }
                        if( $colectInfo->has('emails') ){
                            self::opEmails( $info->id, $request->info['emails'] );
                        }
                        if( $colectInfo->has('hours') ){
                            self::opHours( $info->id, $request->info['hours'] );
                        }
                        if( $colectInfo->has('social') ){
                            self::opSocial( $info->id, $request->info['social'] );
                        }
                    }
                }
            DB::commit();
            return response()->json('Ok', 201);
        } catch (Exception $e) {
            DB::rollBack();
            return response()->abort(500);
        }
    }

    /**
     * Remove the specified resource from storage.
     * @return Response
     */
    public function destroy()
    {
    }
    
    
    
    // STATIC FUNCTIONS
    public static function opContent($id, $content )
    {
        if( count($content) > 0 ){
            $cp = ContentPages::where('page_id', $id )->first();
        }else{
            $cp = new ContentPages;
            $cp->page_id = $id;
        }
        //$cp->fill( $content );
        $cp->title = 'Contato';
        $cp->save();
        // RETURN ID
        return $cp->id;
    }
    public function opContatcs($id, $contactsR )
    {
        // DETECT DELETE
        $delId =array();
        $contacts = Contacts::where('info_id', $id )->get();
        foreach( $contacts as $row ){
            foreach( $contactsR as $rw )
                {
                    if( isset($rw['id']) && (int) $row->id == (int) $rw['id'] ){
                        // ADD PARA NÃO DELETAR 
                        array_push( $delId, (int) $rw['id'] );
                        continue;
                    }
                }
        }
        // DELETE CONTATO
        $delContacts = Contacts::where( 'info_id', $id )->whereNotIn('id', $delId )->get();//->delete();
        foreach ($delContacts as $valDel) {
            ContactTypes::where( 'contact_id', $valDel->id )->delete();
            Contacts::where( 'id', $valDel->id )->delete();
        }
        
        // INSERT AND UPDATE CONTACT
        $i = 0;
        foreach ( $contactsR as $contact ){
            if( !empty( $contact['id'] ) ){
                    $rowContact =   Contacts::where('id', $contact['id'] )->first();
                    $rowContact->info_id    = $id;
                    $rowContact->seq        = $i;
                    $rowContact->code       = ( isset($contact['code']) ? $contact['code'] : null );
                    $rowContact->number_id  = ( isset($contact['number_id']) ? $contact['number_id'] : null );
                    $rowContact->desc       = ( isset($contact['desc']) ? $contact['desc'] : null );
                    $rowContact->save();
                
                if( !empty( $contact['type']['name'] ) ){
                    $type = ContactTypes::find( $contact['type']['id'] );
                    $type->contact_id = $rowContact->id;
                    $type->name = ( isset($contact['type']['name']) ? $contact['type']['name'] : null );
                    $type->icon = ( isset($contact['type']['icon']) ? $contact['type']['icon'] : null );
                    $type->op_id = ( isset($contact['type']['op_id']['id']) ? $contact['type']['op_id']['id'] : null );
                    $type->save();
                }           
            }else{
                $rowContact =   new Contacts;
                $rowContact->info_id    = $id;
                $rowContact->seq        = $i;
                $rowContact->code       = ( isset($contact['code']) ? $contact['code'] : null );
                $rowContact->number_id  = ( isset($contact['number_id']) ? $contact['number_id'] : null );
                $rowContact->desc       = ( isset($contact['desc']) ? $contact['desc'] : null );
                $rowContact->save();
                if( !empty( $contact['type']['name'] ) ){
                    $type = new ContactTypes;
                    $type->contact_id = $rowContact->id;
                    $type->name = ( isset($contact['type']['name']) ? $contact['type']['name'] : null );
                    $type->icon = ( isset($contact['type']['icon']) ? $contact['type']['icon'] : null );
                    $type->op_id = ( isset($contact['type']['op_id']['id']) ? $contact['type']['op_id']['id'] : null );
                    $type->save();
                }
            }
            $i ++;
        }
    }
    public function opAddress($id, $addresR )
    {
        // DETECT DELETE
        $delId =array();
        $addres = Address::where('info_id', $id )->get();
        foreach( $addres as $row ){
            foreach( $addresR as $rw )
                {
                    if( isset($rw['id']) && (int) $row->id == (int) $rw['id'] ){
                        // ADD PARA NÃO DELETAR 
                        array_push( $delId, (int) $rw['id'] );
                        continue;
                    }
                }
        }
        // DELETE ADDRESS
        Address::where( 'info_id', $id )->whereNotIn('id', $delId )->delete();
        
        // INSERT AND UPDATE ADDRESS
        $i = 0;
        foreach ( $addresR as $addr ){
            if( !empty( $addr['id'] ) ){
                $rowDdress =   Address::where('id', $addr['id'] )
                                ->update([
                                        'info_id'       => $id,
                                        'seq'           => $i,
                                        'country'       => 'Brasil',//( isset($addr['country']) ? $addr['country'] : 'null' ),
                                        'state'         => ( isset($addr['state']) ? $addr['state'] : null ),
                                        'city'          => ( isset($addr['city']) ? $addr['city'] : null ),
                                        'neighborhood'  => ( isset($addr['neighborhood']) ? $addr['neighborhood'] : null ),
                                        'street'        => ( isset($addr['street']) ? $addr['street'] : null ),
                                        'zip_code'      => ( isset($addr['zip_code']) ? $addr['zip_code'] : null ),
                                        'number'        => ( isset($addr['number']) ? $addr['number'] : null ),
                                        'complement'    => ( isset($addr['complement']) ? $addr['complement'] : null ),
                                        'long'          => ( isset($addr['long']) ? $addr['long'] : null ),
                                        'lat'           => ( isset($addr['lat']) ? $addr['lat'] : null ),
                                        'icon'          => ( isset($addr['icon']) ? $addr['icon'] : null ),
                                        
                                ]);          
            }else{
                $rowDdress =   new Address;
                $rowDdress->info_id       = $id;
                $rowDdress->seq           = $i;
                $rowDdress->country       = 'Brasil';
                $rowDdress->state         = ( isset($addr['state']) ? $addr['state'] : null );
                $rowDdress->city          = ( isset($addr['city']) ? $addr['city'] : null );
                $rowDdress->neighborhood  = ( isset($addr['neighborhood']) ? $addr['neighborhood'] : null );
                $rowDdress->street        = ( isset($addr['street']) ? $addr['street'] : null );
                $rowDdress->zip_code      = ( isset($addr['zip_code']) ? $addr['zip_code'] : null );
                $rowDdress->number        = ( isset($addr['number']) ? $addr['number'] : null );
                $rowDdress->complement    = ( isset($addr['complement']) ? $addr['complement'] : null );
                $rowDdress->long          = ( isset($addr['long']) ? $addr['long'] : null );
                $rowDdress->lat           = ( isset($addr['lat']) ? $addr['lat'] : null );
                $rowDdress->icon          = ( isset($addr['icon']) ? $addr['icon'] : null );
                $rowDdress->save();
            }
            $i ++;
        }
    }
    public function opEmails($id, $emailsR )
    {
        // DETECT DELETE
        $delId =array();
        $emails = Emails::where('info_id', $id )->get();
        foreach( $emails as $row ){
            foreach( $emailsR as $rw )
                {
                    if( isset($rw['id']) && (int) $row->id == (int) $rw['id'] ){
                        // ADD PARA NÃO DELETAR 
                        array_push( $delId, (int) $rw['id'] );
                        continue;
                    }
                }
        }
        // DELETE EMAILS
        Emails::where( 'info_id', $id )->whereNotIn('id', $delId )->delete();
        
        // INSERT AND UPDATE EMAILS
        $i = 0;
        foreach ( $emailsR as $email ){
            if( !empty( $email['id'] ) ){
                $rowEmails =   Emails::where('id', $email['id'] )
                                ->update([
                                        'info_id'       => $id,
                                        'seq'           => $i,
                                        'email'       => ( isset($email['email']) ? $email['email'] : null ),
                                        'desc'         => ( isset($email['desc']) ? $email['desc'] : null )                                        
                                ]);          
            }else{
                $rowEmails =   new Emails;
                $rowEmails->info_id       = $id;
                $rowEmails->seq           = $i;
                $rowEmails->email         = ( isset($email['email']) ? $email['email'] : null );
                $rowEmails->desc          = ( isset($email['desc']) ? $email['desc'] : null );
                $rowEmails->save();
            }
            $i ++;
        }
    }
    public function opHours($id, $hoursR )
    {
        // DETECT DELETE
        $delId =array();
        $hours = BusinessHours::where('info_id', $id )->get();
        foreach( $hours as $row ){
            foreach( $hoursR as $rw )
                {
                    if( isset($rw['id']) && (int) $row->id == (int) $rw['id'] ){
                        // ADD PARA NÃO DELETAR 
                        array_push( $delId, (int) $rw['id'] );
                        continue;
                    }
                }
        }
        // DELETE HOURS
        BusinessHours::where( 'info_id', $id )->whereNotIn('id', $delId )->delete();
        
        // INSERT AND UPDATE HOURS
        $i = 0;
        foreach ( $hoursR as $hour ){
            if( !empty( $hour['id'] ) ){
                $rowHours =   BusinessHours::where('id', $hour['id'] )
                                ->update([
                                        'info_id'       => $id,
                                        'seq'           => $i,
                                        'desc'          => ( isset($hour['desc']) ? $hour['desc'] : null ),
                                        'icon'          => ( isset($hour['icon']) ? $hour['icon'] : null )                                        
                                ]);          
            }else{
                $rowHours =   new BusinessHours;
                $rowHours->info_id       = $id;
                $rowHours->seq           = $i;
                $rowHours->desc          = ( isset($hour['desc']) ? $hour['desc'] : null );
                $rowHours->icon          = ( isset($hour['icon']) ? $hour['icon'] : null );
                $rowHours->save();
            }
            $i ++;
        }
    }
    public function opSocial($id, $socialR )
    {
        // DETECT DELETE
        $delId =array();
        $social = Social::where('info_id', $id )->get();
        foreach( $social as $row ){
            foreach( $socialR as $rw )
                {
                    if( isset($rw['id']) && (int) $row->id == (int) $rw['id'] ){
                        // ADD PARA NÃO DELETAR 
                        array_push( $delId, (int) $rw['id'] );
                        continue;
                    }
                }
        }
        // DELETE HOURS
        Social::where( 'info_id', $id )->whereNotIn('id', $delId )->delete();
        
        // INSERT AND UPDATE HOURS
        $i = 0;
        foreach ( $socialR as $soci ){
            if( !empty( $soci['id'] ) ){
                $rowSocial =   Social::where('id', $soci['id'] )
                                ->update([
                                        'info_id'       => $id,
                                        'seq'           => $i,
                                        'name'          => ( isset($soci['name']) ? $soci['name'] : null ),
                                        'title'         => ( isset($soci['title']) ? $soci['title'] : null ),
                                        'icon'          => ( isset($soci['icon']) ? $soci['icon'] : null ),
                                        'link'          => ( isset($soci['link']) ? $soci['link'] : null ),
                                ]);          
            }else{
                $rowSocial =   new Social;
                $rowSocial->info_id       = $id;
                $rowSocial->seq           = $i;
                $rowSocial->name          = ( isset($soci['name']) ? $soci['name'] : null );
                $rowSocial->title         = ( isset($soci['title']) ? $soci['title'] : null );
                $rowSocial->icon          = ( isset($soci['icon']) ? $soci['icon'] : null );
                $rowSocial->link          = ( isset($soci['link']) ? $soci['link'] : null );
                $rowSocial->save();
            }
            $i ++;
        }
    }
}
