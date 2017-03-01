<?php

namespace Modules\Admin\Http\Controllers\pages;

use DB;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;

use Modules\Admin\Entities\Segments;
use Modules\Admin\Entities\Pages;
use Modules\Admin\Entities\ContentPages;
use Modules\Admin\Entities\BoxContents;

// Datatables
use Yajra\Datatables\Datatables;

class ServicosController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return Response
     */
    public function index( Request $request )
    {
        $segment = Segments::find( $request->segment );
        if( $segment ){
            $servicos = Pages::where('seg_id', $segment->id )
                        ->where('name', 'servicos');
            return Datatables::of( $servicos->get() )->make(true);
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
//        $page = collect( Pages::find($id) );
//        $page->put('content', ContentPages::where('page_id', $id )->first() );
//        return $page->all();

        $page       =   Pages::select('id', 'seg_id', 'title', 'subtitle')->find($id);
        $content    =   collect( ContentPages::select('id', 'title', 'subtitle', 'content', 'img', 'link')
                                    ->where('page_id', $page->id )
                                    ->first() );
        // GET BOX CONTENT
        if( $content->has('id') ){
            $content->put('box', BoxContents::where('cp_id', '=', $content->get('id') )->get() ); 
        }
        // RETURN COLLECT
        $collect = collect( $page );
        $collect->put('content', $content->all() );
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
                $servicos = Pages::find($id);
                $servicos->fill($request->all());
                $servicos->save();
                // CONTENT SERVICOS
                if( $request->has('content') )
                {
                    $collectContent =  collect( $request->content );
                    if( $collectContent->has('id') ){
                        $content = ContentPages::where('page_id', '=', $servicos->id )->first();
                    }else{
                        $content = new ContentPages;
                        $content->page_id = $servicos->id;
                    }
                    $content->fill( $collectContent->all() );
                    $content->save();

                    // UPDATE BOX CONTENT
                    
                    if( $collectContent->has('box') AND count( $collectContent->get('box') ) > 0 ){
                        self::checkCDU( $content->id, $collectContent->get('box'));
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
    
    
    public static function checkCDU($id,  $boxR )
    {
            
        // FIND DELETE BOX
        $delId =array();
        $box = BoxContents::where('cp_id', $id )->get();
        foreach( $box as $row )
        {
            foreach( $boxR as $rw )
            {
                if( isset($rw['id']) && (int) $row->id == (int) $rw['id'] ){
                    // ADD PARA NÃO DELETAR 
                    array_push( $delId, (int) $rw['id'] );
                    continue;
                }
            }
        }
        // DELETE CONTATO
        BoxContents::where( 'cp_id', $id )->whereNotIn('id', $delId )->delete();
        // CREATE AND UPDATE BOX
        foreach( $boxR as $key => $row  )
        {
            if( !empty( $row['id'] ) )
            {
                $boxC = BoxContents::find( $row['id'] );
            }else{
                $boxC = new BoxContents();
            }    
            $boxC->cp_id    = $id;
            $boxC->title    = $row['title'];
            $boxC->subtitle = ( isset($row['id']) ? $row['id'] : null );
            $boxC->content  = ( isset($row['content']) ? $row['content'] : null );
            $boxC->seq      = ( isset($row['seq']) ? $row['seq'] : null );
            $boxC->img      = ( isset($row['img']) ? $row['img'] : null );
            $boxC->icon     = ( isset($row['icon']) ? $row['icon'] : null );
            $boxC->link     = ( isset($row['link']) ? $row['link'] : null );
            $boxC->save();
        }
        
    }
}
