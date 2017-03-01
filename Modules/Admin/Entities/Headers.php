<?php

namespace Modules\Admin\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Headers extends Model
{
    protected $fillable = [
        'id',
        'seg_id'
    ];
    
    protected $dates = ['deleted_at'];
    
    protected $table = "headers";
}
