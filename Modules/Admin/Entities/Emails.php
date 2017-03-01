<?php

namespace Modules\Admin\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Emails extends Model
{
    protected $fillable = [
        'id',
        'info_id',
        'seq',
        'email',
        'desc'
    ];
    
    protected $dates = ['deleted_at'];
    
    protected $table = "emails";
}
