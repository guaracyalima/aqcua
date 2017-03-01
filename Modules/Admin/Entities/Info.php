<?php

namespace Modules\Admin\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

use Modules\Admin\Entities\SegmentsHasInfo;
use Modules\Admin\Entities\ContactTypes;
use Modules\Admin\Entities\MobileOperators;
use Modules\Admin\Entities\Address;
use Modules\Admin\Entities\Emails;
use Modules\Admin\Entities\BusinessHours;
use Modules\Admin\Entities\Social;

class Info extends Model
{
    protected $fillable = [
        'id',
        'name'
    ];
    
    protected $dates = ['deleted_at'];
    
    protected $table = "info";
    
    
    public static  function getInfoContatcts($id)
    {
        $info  =  collect( SegmentsHasInfo::where('seg_id', '=', $id )->first() );
        if( $info->has('id') ){
            // GET CONTACTS
            $contacts = collect();
            $lsContacts = Contacts::where('info_id', '=', $info->get('info_id'))->get();
            foreach ( $lsContacts as $contact) {
                $collectRow = collect( $contact );
//                $collectRow->put( 'type', collect( 
//                                                    ContactTypes::select('op_id', 'name', 'icon') 
//                                                        ->where('contact_id', '=', $contact->id )->get() 
//                                                  )
//                                );
                $type = ContactTypes::select('op_id', 'name', 'icon')
                            ->where('contact_id', '=', $contact->id )
                            ->first();
                $collectType = collect( $type );
                if( isset( $operators->name ) ){
                    $operators = MobileOperators::find( $type->op_id);
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
            $info->put('business_hours', BusinessHours::where('info_id', '=', $info->get('info_id'))->get() );
            // GET SOCIAL
            $info->put('social', $social = Social::where('info_id', '=', $info->get('info_id'))->get() );
        }
        $info->forget('seg_id');
        $info->forget('id');
        $info->forget('info_id');
        $info->forget('created_at');
        $info->forget('updated_at');
        $info->forget('deleted_at');
        return $info->filter()->all();
    }
    
}
