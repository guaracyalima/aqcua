<?php

namespace Modules\Admin\Http\Controllers\Pages;

use DB;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

use Modules\Admin\Entities\Segments;
use Modules\Admin\Entities\Pages;
use Modules\Admin\Entities\Banners;

// Datatables
use Yajra\Datatables\Datatables;

class BannersController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return Response
     */
    public function index( Request $request)
    {
        $segment = Segments::find( $request->segment );
        $id = $segment->id;
        if( $segment ){
            $banners = Banners::select('banners.*')
                        ->join('pages as p', function($join) use( $id ){
                            $join->on('banners.page_id', '=', 'p.id')
                                    ->where('p.seg_id', '=', $id );
                        });
            return Datatables::of( $banners->get() )->make(true);
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
        try {
            DB::beginTransaction();
                
                // STORE
                $banners = new Banners;
                $banners->fill( $request-> all() );
                // CHECK IMG
                if( $request->has('img')){
                    $img = self::baseImg64( $request->img );
                    if( $img ){
                        $banners->img = self::baseImg64( $request->img );
                    }
                }
                $banners->save();
                
            DB::commit();
            return response()->json('Ok', 201);
        } catch (Exception $e) {
            DB::rollBack();
            return response()->abort(500);
        }
    }

    /**
     * Show the specified resource.
     * @return Response
     */
    public function show($id)
    {
        return Banners::find($id);
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
                
                // STORE
                $banners = Banners::find($id);
                $banners->fill( $request-> all() );
                // CHECK IMG
                if( $request->has('img')){
                    $img = self::baseImg64( $request->img );
                    if( $img ){
                        $banners->img = self::baseImg64( $request->img );
                    }
                }
                $banners->save();
                
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
    public function destroy($id)
    {
        try {
            DB::beginTransaction();
                Banners::where('id', $id)->delete();
            DB::commit();
            return response()->json('Ok', 201);
        } catch (Exception $e) {
            DB::rollBack();
            return response()->abort(500);
        }
    }
    
    public function getPage( Request $request ){
        $segment = Segments::find( $request->segment );
        return Pages::where('seg_id', '=', $segment->id )
                ->where('name', 'home')
                ->first();
    }
    
    // HELPER IMG STATIC
    public static function baseImg64( $img64 ){
        
        $collect = collect( $img64 );
        
        if( $collect->has('src') ){
            $img    = $collect->get('src');
            $cord   = $collect->get('selection');

            $path = 'banners';
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