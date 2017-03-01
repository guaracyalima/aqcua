<?php

namespace Modules\Admin\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ContactTypes extends Model
{
    protected $fillable = [
        'id',
        'contact_id',
        'op_id',
        'name',
        'icon'
    ];
    
    protected $dates = ['deleted_at'];
    
    protected $table = "contact_types";
}
