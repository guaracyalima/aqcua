<?php

namespace Modules\Admin\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class HealthSpecialties extends Model
{
    protected $fillable = [
        'id',
        'seg_id',
        'name',
        'desc'
    ];
    
    protected $dates = ['deleted_at'];
    
    protected $table = "health_specialties";
}
