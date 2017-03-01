<?php

namespace Modules\Admin\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Social extends Model
{
    protected $fillable = [
        'id',
        'info_id',
        'seq',
        'name',
        'title',
        'icon',
        'link'
    ];
    
    protected $dates = ['deleted_at'];
    
    protected $table = "social";
}
