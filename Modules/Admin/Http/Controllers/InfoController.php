<?php

namespace Modules\Admin\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;

use Modules\Admin\Entities\Info;
use Modules\Admin\Entities\Icons;

class InfoController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return Response
     */
    public function index()
    {
        return view('admin::index');
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
    public function show()
    {
        return view('admin::show');
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
    public function update(Request $request)
    {
    }

    /**
     * Remove the specified resource from storage.
     * @return Response
     */
    public function destroy()
    {
    }
    
    /**
     * Find content by id page.
     * @return Response
     */
    public function getInfo($id){
        $info =  Info::select('info.*')
                    ->join('segments_has_info as shi', 'info.id', '=', 'shi.info_id')
                    ->join('segments as s', 'shi.seg_id', '=', 's.id')
                    ->join('pages as p', function($join) use($id){
                        $join->on('p.seg_id', '=', 's.id')
                            ->where('p.id', '=', $id );
                    })
                    ->get();
        return response()->json($info, 200);
    }
    
    public function getIcons(){
        return Icons::all('id', 'icon');
    }
}
