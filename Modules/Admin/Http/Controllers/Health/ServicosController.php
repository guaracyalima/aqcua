<?php

namespace Modules\Admin\Http\Controllers\Health;

use DB;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Modules\Admin\Http\Requests\ServicoRequest;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

use Modules\Admin\Entities\Segments;
use Modules\Admin\Entities\HealthServices;

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
        $id = $segment->id;
        if( $segment ){
            $serv = HealthServices::select('health_services.*')
                        ->join('health_specialties as hs', function($join) use( $id ){
                            $join->on('health_services.hs_id', '=', 'hs.id')
                                    ->where('hs.seg_id', '=', $id );
                        });
            return Datatables::of( $serv->get() )->make(true);
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
    public function store(ServicoRequest $request)
    {
        try {
            DB::beginTransaction();
                
                // CHECK IMG
                if( $request->has('img')){
                    $img = self::baseImg64( $request->img );
                    if( $img ){
                        $request->replace(['img' => self::baseImg64( $request->img ) ]);
                    }
                }
                // STORE
                $serv = new HealthServices;
                $serv->fill( $request-> all() );
                $serv->save();
                
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
        return HealthServices::find($id);
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
    public function update($id, ServicoRequest $request)
    {
        try {
            DB::beginTransaction();
                // CHECK IMG
                if( $request->has('img')){
                    $img = self::baseImg64( $request->img );
                    if( $img ){
                        $request->replace(['img' => self::baseImg64( $request->img ) ]);
                    }
                }
                // UPDATE
                $serv = HealthServices::find($id);
                $serv->fill( $request-> all() );
                $serv->save();
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
                HealthServices::where('id', $id)->delete();
            DB::commit();
            return response()->json('Ok', 201);
        } catch (Exception $e) {
            DB::rollBack();
            return response()->abort(500);
        }
    }
    
    
    // HELPER IMG STATIC
    public static function baseImg64( $img64 ){
        
        $collect = collect( $img64 );
        
        if( $collect->has('src') ){
            $img    = $collect->get('src');
            $cord   = $collect->get('selection');

            $path = 'acquamed/saude/servicos';
            Storage::disk('upload')->makeDirectory($path);
            // CONVERT BASE
            $imgBase = convertBaseImg( $img );
            $extension = getBaseExtension($imgBase);
            // FILE
            $filePath = $path .'/'. Carbon::now()->format('Ydmhis') . '.' . $extension;
            Storage::disk('upload')->put( $filePath, $imgBase);
            chmod(  public_path('img').'/'.$path, 0777);
            return 'img/'. $filePath;
        }
        return false;
    }
}
