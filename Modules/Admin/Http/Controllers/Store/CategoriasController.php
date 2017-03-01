<?php

namespace Modules\Admin\Http\Controllers\Store;

use DB;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use Modules\Admin\Http\Requests\ShopCategoriesRequest;

use Modules\Admin\Entities\Segments;
use Modules\Admin\Entities\ProductCategories;

// Datatables
use Yajra\Datatables\Datatables;

class CategoriasController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return Response
     */
    public function index( Request $request )
    {
        $segment = Segments::find( $request->segment );
        if( $segment ){
            return Datatables::of( ProductCategories::where('seg_id', '=', $segment->id )->get() )->make(true);
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
    public function store(ShopCategoriesRequest $request)
    {
        try {
            DB::beginTransaction();
                
                // STORE
                $cart = new ProductCategories;
                $cart->fill( $request-> all() );
                $cart->save();
                
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
        return ProductCategories::find($id);
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
    public function update($id, ShopCategoriesRequest $request)
    {
        try {
            DB::beginTransaction();
                
                // STORE
                $cart = ProductCategories::find( $id );
                $cart->fill( $request-> all() );
                $cart->save();
                
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
            
                ProductCategories::where( 'id', '=', $id )->delete();
                
            DB::commit();
            return response()->json('Ok', 201);
        } catch (Exception $e) {
            DB::rollBack();
            return response()->abort(500);
        }
    }
    
    public function getList()
    {
        return ProductCategories::all('title', 'id');
    }
}
