<?php

namespace Modules\Admin\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class SegmentsHasInfo extends Model
{
    protected $fillable = [
        'id',
        'seg_id',
        'info_id'
    ];
    
    protected $dates = ['deleted_at'];
    
    protected $table = "segments_has_info";
}
