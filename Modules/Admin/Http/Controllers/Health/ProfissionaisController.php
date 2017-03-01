<?php

namespace Modules\Admin\Http\Controllers\Health;

use DB;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

use Modules\Admin\Http\Requests\ProfissionaisSaudeRequest;

use Modules\Admin\Entities\Teams;
use Modules\Admin\Entities\TeamsHasHealth;

// Datatables
use Yajra\Datatables\Datatables;

class ProfissionaisController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return Response
     */
    public function index()
    {
        return Datatables::of( Teams::all() )->make(true);
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
    public function store(ProfissionaisSaudeRequest $request)
    {
        try {
            DB::beginTransaction();
                
                // STORE
                $team = new Teams;
                $team->fill( $request-> all() );
                // CHECK IMG
                if( $request->has('img')){
                    $img = self::baseImg64( $request->img );
                    if( $img ){
                        $team->img = self::baseImg64( $request->img );
                    }
                }
                $team->save();
                // STORE
                $has = new TeamsHasHealth;
                $has->team_id   = $team->id;
                $has->hs_id     = $request->hs_id;
                $has->save();
                
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
        $team = Teams::find($id);
        $has = TeamsHasHealth::select('hs_id')->where('team_id', $team->id )->first();
        $collect = collect($team);
        $collect->put('hs_id', $has->hs_id );
        return $collect->all();
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
    public function update($id, ProfissionaisSaudeRequest $request)
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
                $team = Teams::find($id);
                $team->fill( $request-> all() );
                $team->save();
                // UPDATE
                $has = TeamsHasHealth::find( $team->id );
                $has->hs_id = $request->hs['id'];
                $has->save();
                
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
                TeamsHasHealth::where('team_id', $id )->delete();
                Teams::where('id', $id)->delete();
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

            $path = 'acquamed/saude/team';
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
