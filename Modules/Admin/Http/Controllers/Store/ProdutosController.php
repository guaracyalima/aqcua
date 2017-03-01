<?php

namespace Modules\Admin\Http\Controllers\Store;

use DB;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use Modules\Admin\Http\Requests\ShopProductsRequest;

use Modules\Admin\Entities\Segments;
use Modules\Admin\Entities\Products;
use Modules\Admin\Entities\ProductDetails;

// Datatables
use Yajra\Datatables\Datatables;

class ProdutosController extends Controller
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
            
            $prod = Products::select(
                        DB::raw("
                                products.id, products.cat_id, products.title, 
                                products.img, ct.title as categoria
                            ")
                    )
                    ->join('product_categories as ct', function( $join) use($id){
                            $join->on('products.cat_id', '=', 'ct.id')
                                    ->where('ct.seg_id', '=', $id );
                    });
            return Datatables::of( $prod->get() )->make(true);
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
    public function store(ShopProductsRequest $request)
    {
        try {
            DB::beginTransaction();
                
                // STORE
                $prod = new Products;
                $prod->fill( $request->all() );
                // CHECK IMG
                if( $request->has('img')){
                    $img = self::baseImg64( $request->img );
                    if( $img ){
                        $prod->img = self::baseImg64( $request->img );
                    }
                }
                $prod->save();
                // STORE DETAILS
                if( $request->has('details') )
                {
                    $details = new ProductDetails;
                    $details->prod_id = $prod->id;
                    $details->fill( $request->details );
                    $details->save();
                }
                
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
        $products = collect( Products::find($id) );
        $products->put('details', ProductDetails::where('prod_id', '=', $id )->first() );
        return $products->all();
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
    public function update($id, ShopProductsRequest $request)
    {
        try {
            DB::beginTransaction();
                // UPDATE
                $prod = Products::find($id);
                $prod->fill( $request-> all() );
                // CHECK IMG
                if( $request->has('img')){
                    $img = self::baseImg64( $request->img );
                    if( $img ){
                        $prod->img = self::baseImg64( $request->img );
                    }
                }
                $prod->save();
                // STORE DETAILS
                if( $request->has('details') )
                {
                    if( empty( $request->details['id'] ) ){
                        $details = ProductDetails::find( $request->details['id'] );
                    }else{
                        $details = new ProductDetails;
                    }
                    $details->prod_id = $prod->id;
                    $details->fill( $request->details );
                    $details->save();
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
    public function destroy($id)
    {
        try {
            DB::beginTransaction();
                ProductDetails::where('prod_id', $id )->delete();
                Products::where('id', $id)->delete();
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

            $path = 'acquashop/shop';
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
