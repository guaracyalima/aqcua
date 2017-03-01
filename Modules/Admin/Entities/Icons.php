<?php

namespace Modules\Admin\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Icons extends Model
{
     protected $fillable = [
        'id',
        'icon',
        'prefix',
        'sufix',
        'categories'
    ];
    
    protected $dates = ['deleted_at'];
    
    protected $table = "icons";
}
