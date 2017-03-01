<?php

namespace Modules\Admin\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Products extends Model
{
    protected $fillable = [
        'id',
        'cat_id',
        'title',
        'img'
    ];
    
    protected $dates = ['deleted_at'];
    
    protected $table = "products";
}