<?php

namespace Modules\Admin\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Segments extends Model
{
    protected $fillable = [
        'id',
        'name'
    ];
    
    protected $dates = ['deleted_at'];
    
    protected $table = "segments";
    
}
