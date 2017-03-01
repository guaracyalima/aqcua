<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Zizaco\Entrust\Traits\EntrustUserTrait;
use Illuminate\Database\Eloquent\Model;

class User extends Authenticatable
{
    use EntrustUserTrait, Notifiable; // add this trait to your user model
    
    protected $fillable = [
        'name', 'nickname', 'email', 'password',
    ];
    
    protected $hidden = [
        'password', 'remember_token',
    ];
    
}
/*
namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    protected $fillable = [
        'name', 'email', 'password',
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];
}
*/
