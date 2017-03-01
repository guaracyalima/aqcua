<?php

namespace Modules\Admin\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Contacts extends Model
{
    protected $fillable = [
        'id',
        'info_id',
        'seq',
        'code',
        'number_id',
        'desc'
    ];
    
    protected $dates = ['deleted_at'];
    
    protected $table = "contacts";
}
