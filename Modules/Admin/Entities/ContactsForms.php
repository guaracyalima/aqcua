<?php

namespace Modules\Admin\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ContactsForms extends Model
{
    protected $fillable = [
        'id',
        'seg_id',
        'email',
        'msg_success',
        'msg_error'
    ];
    
    protected $dates = ['deleted_at'];
    
    protected $table = "contact_forms";
}
