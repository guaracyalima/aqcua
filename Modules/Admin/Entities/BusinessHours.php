<?php

namespace Modules\Admin\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class BusinessHours extends Model
{
    protected $fillable = [
        'id',
        'info_id',
        'seq',
        'desc',
        'icon'
    ];
    
    protected $dates = ['deleted_at'];
    
    protected $table = "business_hours";
}
