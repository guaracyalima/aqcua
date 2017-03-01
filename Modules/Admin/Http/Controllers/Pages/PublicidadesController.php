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

// Datatables
use Yajra\Datatables\Datatables;
// Helper IMg
use App\Helpers\CropImagens;


class PublicidadesController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return Response
     */
    public function index( Request $request )
    {
        $segment = Segments::find( $request->segment );
        if( $segment ){
            $pub =  Pages::select(
                        DB::raw(
                                "pages.id, cp.title, cp.subtitle, cp.img, cp.id as content_id"
                        )
                    )
                    ->leftJoin('content_pages as cp', 'pages.id', '=', 'cp.page_id')
                    ->where('seg_id', $segment->id )
                    ->where('name', 'publicidade');
            return Datatables::of( $pub->get() )->make(true);
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
        return $request->all();
//        // DIR
//        $path = 'constratos/'.$request->uf.'/'.$request->cnpj;
//        Storage::disk('local')->makeDirectory($path);
//        // FILE
//        $file = $request->file('contrato');
//        $extension = $file->getClientOriginalExtension();
//        $filePath = $path.'/'.$request->cnpj.'.'.$extension;
//        Storage::disk('local')->put( $filePath,  File::get($file));
    }

    /**
     * Show the specified resource.
     * @return Response
     */
    public function show( $id )
    {
        $page = collect( Pages::find($id) );
        $page->put('content', ContentPages::where('page_id', $id )->first() );
        return $page->all();
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
                $pub = Pages::find($id);
                // CONTENT SOBRE
                if( $request->has('content') )
                {
                    $collectContent =  collect( $request->content );
                    if( $collectContent->has('id') ){
                        $content = ContentPages::find( $collectContent->get('id') );
                    }else{
                        $content = new ContentPages;
                    }
                    $content->page_id = $pub->id;
                    $content->fill( $collectContent->all() );
                    // Collect img
                    $collectImg = collect( $collectContent->get('img') );
                    if( $collectImg->has('src') ){
                        $content->img = $this->baseImg64( $collectImg->get('src'), $collectImg->get('selection') );
                    }
                    $content->save();
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
    
    
    public function baseImg64( $img, $cord )
    {
//        try {
//            $path = 'publicidade';
//            Storage::disk('upload')->makeDirectory($path);
//            // CONVERT BASE
//            $imgBase = convertBaseImg( $img );
//            $extension = getBaseExtension($imgBase);
//            // Name File
//            $filePath = $path .'/'. Carbon::now()->format('Ydmhis') . '.' . $extension;
//
//            // CORD 
//            $x  = $cord[0];
//            $y  = $cord[1];
//            $x2 = $cord[2];
//            $y2 = $cord[3];
//            $w  = $cord[4];
//            $h  = $cord[5];
//
//            $width = 200;
//            $height = 200;
//            // DIR
//            $dir = public_path('img').'/'.$path;
//
//            $imgCrop = new CropImagens();
//            $imgCrop->imagem_maior($dir, $x, $y, $w, $h, $width, $height, $imgBase, $filePath, $extension);
//
//            chmod(  public_path('img').'/'.$path, 0777);
//            return 'img/'. $filePath;
//            
//        } catch (Exception $ex) {
//            return response( $ex, 500);
//            die;
//        }

        $path = 'publicidade';
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
    
   
}
