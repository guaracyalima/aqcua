<?php

namespace Modules\Admin\Http\Controllers\pages;

use DB;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

use Modules\Admin\Entities\Segments;
use Modules\Admin\Entities\Pages;
use Modules\Admin\Entities\ContentPages;
use Modules\Admin\Entities\BoxContents;

// Datatables
use Yajra\Datatables\Datatables;

class SobreController extends Controller
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
                        ->where('name', 'sobre');
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
        $content    =   collect( ContentPages::select('id', 'title', 'subtitle', 'content', 'img')
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
                $sobre = Pages::find($id);
                $sobre->fill($request->all());
                $sobre->save();
                // CONTENT SOBRE
                if( $request->has('content') )
                {
                    
                    $collectCoontent =  collect( $request->content );
                    if( $collectCoontent->has('id') ){
                        $content = ContentPages::find( $collectCoontent->get('id') );
                    }else{
                        $content = new ContentPages;
                    }
                    $content->page_id = $sobre->id;
                    $content->fill( $collectCoontent->all() );
                    if( $collectCoontent->has('img')){
                        $img = self::baseImg64( $collectCoontent->get('img') );
                        if( $img ){
                            $content->img = self::baseImg64( $collectCoontent->get('img') );
                        }
                    }
                    $content->save();
                    if( $collectCoontent->has('box') )
                    {
                        $boxs = $collectCoontent->get('box');
                        self::opBox( $content->id, $boxs );
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
    
    
    // STATIC FUNCTION
    public function opBox($id, $boxR){
        // DETECT DELETE
        $delId =array();
        $boxs = BoxContents::where('cp_id', $id )->get();
        foreach( $boxs as $row ){
            foreach( $boxR as $rw )
                {
                    if( isset($rw['id']) && (int) $row->id == (int) $rw['id'] ){
                        // ADD PARA NÃO DELETAR 
                        array_push( $delId, (int) $rw['id'] );
                        continue;
                    }
                }
        }
        // DELETE BOXS
        BoxContents::where( 'cp_id', $id )->whereNotIn('id', $delId )->delete();
        
        // INSERT AND UPDATE BOX
        $i = 0;
        foreach ( $boxR as $box ){
            if( !empty( $box['id'] ) ){
                $rowBox = BoxContents::find( $box['id'] );
            }else{
                $rowBox =   new BoxContents;
            }
            unset( $box['id'] );
            $rowBox->cp_id = $id;
            $rowBox->fill( $box );
            $rowBox->save();
        }
    }
    
    // HELPER IMG STATIC
    public static function baseImg64( $img64 ){
        
        $collect = collect( $img64 );
        
        if( $collect->has('src') ){
            $img    = $collect->get('src');
            $cord   = $collect->get('selection');

            $path = 'shop/sobre';
            Storage::disk('upload')->makeDirectory($path);
            // CONVERT BASE
            $imgBase = convertBaseImg( $img );
            $extension = getBaseExtension($imgBase);
            // FILE
            $filePath = $path .'/'. Carbon::now()->format('Ydmhis') . '.' . $extension;
            Storage::disk('upload')->put( $filePath, $imgBase);
            //chmod(  public_path('img').'/'.$path, 0777);
            return 'img/'. $filePath;
        }
        return false;
    }
}
