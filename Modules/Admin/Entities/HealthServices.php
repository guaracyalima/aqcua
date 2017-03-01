<?php

namespace Modules\Admin\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Modules\Admin\Entities\TeamsHasHealth;
use Modules\Admin\Entities\Teams;

class HealthServices extends Model
{
    protected $fillable = [
        'id',
        'hs_id',
        'name',
        'img',
        'desc'
    ];
    
    protected $dates = ['deleted_at'];
    
    protected $table = "health_services";
    
}
