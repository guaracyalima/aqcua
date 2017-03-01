<?php

namespace Modules\Admin\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class BoxHeaders extends Model
{
    protected $fillable = [
        'id',
        'hi_id',
        'seq',
        'orientation',
        'desc',
        'icon',
        'link'
    ];
    
    protected $dates = ['deleted_at'];
    
    protected $table = "box_headers";
}
