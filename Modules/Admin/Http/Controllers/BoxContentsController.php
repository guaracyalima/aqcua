<?php

namespace Modules\Admin\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;

use Modules\Admin\Entities\BoxContents;

class BoxContentsController extends Controller
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
    public function getBoxs($id,  Request $request ){

        if( $request->has('id_seg') ){
            $id_seg = $request->id_seg;
            return BoxContents::select('box_contents.*')
                    ->join('content_pages as cp', 'box_contents.cp_id', '=', 'cp.id')
                    ->join('pages as p', function($join) use($id_seg){
                        $join->on('cp.page_id', '=', 'p.id')
                                ->where('p.seg_id', '=', $id_seg);
                    })
                    ->where('p.id', '=', $id )
                    ->get();
        }else{
            return BoxContents::select('box_contents.*')
                    ->join('content_pages as cp', 'box_contents.cp_id', '=', 'cp.id')
                    ->join('pages as p', function($join) use($id){
                        $join->on('cp.page_id', '=', 'p.id')
                                ->where('p.id', '=', $id );
                    })
                    ->get();
        }
    }
}
