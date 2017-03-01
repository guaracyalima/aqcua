<?php

namespace Modules\Admin\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Modules\Admin\Entities\Products;
use Modules\Admin\Entities\ProductDetails;

class ProductCategories extends Model
{
    protected $fillable = [
        'id',
        'seg_id',
        'title',
        'desc',
        'icon'
    ];
    
    protected $dates = ['deleted_at'];
    
    protected $table = "product_categories";
    
    public static function getBySeg($id)
    {
        $cat =  ProductCategories::select('id', 'title', 'desc', 'icon')
                    ->where('seg_id', '=', $id)
                    ->get();
        $collect = collect();
        foreach ($cat as $val) {
            $pro = Products::select('id', 'title','img')->where('cat_id', '=', $val->id )->get();
            $prodCollect = collect();
            foreach ($pro as $v) {
                $dt = ProductDetails::select('title', 'desc', 'icon')->where('prod_id', '=', $v->id )->first();
                $prCollect = collect( $v );
                $prCollect->put('details', $dt );
                $prCollect->put('template', 'tpls/site/acquashop/products/products-popover.html');
                $prCollect->put('tooltip', false);
                $prodCollect->push( $prCollect->all() );
            }
            $collectCat = collect( $val );
            $collectCat->put('products', $prodCollect->filter()->all() );
            $collect->push($collectCat->filter()->all() );
        }
        return $collect->filter()->all();
    }
}
