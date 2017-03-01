<?php

namespace Modules\Admin\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ProductDetails extends Model
{
    protected $fillable = [
        'id',
        'prod_id',
        'title',
        'desc',
        'icon'
    ];
    
    protected $dates = ['deleted_at'];
    
    protected $table = "product_details";
}