<?php

namespace Modules\Admin\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TeamsHasHealth extends Model
{
    protected $fillable = [
        'id',
        'hs_id',
        'team_id'
    ];
    
    protected $dates = ['deleted_at'];
    
    protected $table = "teams_has_health";
}
