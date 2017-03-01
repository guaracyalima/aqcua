<?php

namespace Modules\Admin\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Address extends Model
{
    protected $fillable = [
        'id',
        'info_id',
        'seq',
        'country',
        'state',
        'city',
        'neighborhood',
        'street',
        'zip_code',
        'number',
        'complement',
        'long',
        'lat',
        'icon'
    ];
    
    protected $dates = ['deleted_at'];
    
    protected $table = "address";
}
