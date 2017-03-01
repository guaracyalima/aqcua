<?php

namespace Modules\Admin\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class BoxContents extends Model
{
    protected $fillable = [
        'id',
        'cp_id',
        'seq',
        'title',
        'sutitle',
        'content',
        'img',
        'icon',
        'link'
    ];
    
    protected $dates = ['deleted_at'];
    
    protected $table = "box_contents";
}
