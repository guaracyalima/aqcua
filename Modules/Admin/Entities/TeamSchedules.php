<?php

namespace Modules\Admin\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TeamSchedules extends Model
{
    protected $fillable = [
        'id',
        'hs_id',
        'week',
        'schedule'
    ];
    
    protected $dates = ['deleted_at'];
    
    protected $table = "team_schedules";
}
