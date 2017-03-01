<?php

namespace Modules\Admin\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class MobileOperators extends Model
{
    protected $fillable = [
        'id',
        'name'
    ];
    
    protected $dates = ['deleted_at'];
    
    public $timestamps = false;
    
    protected $table = "mobile_operators";
}
