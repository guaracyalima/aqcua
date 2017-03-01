<?php

namespace App;

use DB;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class SendMail extends Model
{
    protected $fillable = [
        'id',
        'seg_id',
        'category',
        'email', 
        'title',
        'desc'     
    ];
    
    protected $dates = ['deleted_at'];
    
    public $timestamps  = false;
    
    protected $table = "send_mail";
    
    
    public static function getAllSegments()
    {
        return SendMail::select(
                    DB::raw("
                            send_mail.id, send_mail.seg_id,  send_mail.category,
                            send_mail.email,  send_mail.title,
                            s.name as segment,
                            (CASE
                                WHEN category = 'SITE'
                                    THEN 'FORMULÁRIO DE CONTATO'
                                ELSE
                                    'FORMULÁRIO DE ORÇAMENTO'
                            END) as type
                            ")
                )
                ->join('segments as s', 'send_mail.seg_id', '=', 's.id')
                ->get();
    }
}
