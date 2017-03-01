<?php

namespace Modules\Admin\Http\Controllers\Health;

use DB;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Modules\Admin\Http\Requests\EspecialidadesRequest;

use Modules\Admin\Entities\Segments;
use Modules\Admin\Entities\HealthSpecialties;

// Datatables
use Yajra\Datatables\Datatables;

class EspecialidadesController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return Response
     */
    public function index( Request $request )
    {
        $segment = Segments::find( $request->segment );
        if( $segment ){
            $spec = HealthSpecialties::where('seg_id', $segment->id );
            return Datatables::of( $spec->get() )->make(true);
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
    public function store(EspecialidadesRequest $request)
    {
        try {
            DB::beginTransaction();
                $spec = new HealthSpecialties;
                $spec->fill( $request-> all() );
                $spec->save();
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
        return  HealthSpecialties::find( $id );
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
    public function update($id, EspecialidadesRequest $request)
    {
        try {
            DB::beginTransaction();
                $spec = HealthSpecialties::find($id);
                $spec->fill( $request-> all() );
                $spec->save();
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
                HealthSpecialties::where('id', $id)->delete();
            DB::commit();
            return response()->json('Ok', 201);
        } catch (Exception $e) {
            DB::rollBack();
            return response()->abort(500);
        }
    }
    
    public function getList()
    {
        return HealthSpecialties::all('name', 'id');
    }
    
    
}
