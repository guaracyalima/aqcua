<?php

namespace Modules\Admin\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Banners extends Model
{
    protected $fillable = [
        'id',
        'page_id',
        'title',
        'subtitle',
        'content',
        'img',
        'link',
        'seq'
    ];
    
    protected $dates = ['deleted_at'];
    
    protected $table = "banners";
    
    public static function getBannesSegments( $id )
    {
        return  Banners::select(
                                    'banners.img', 
                                    'banners.title', 'banners.subtitle', 
                                    'banners.content', 'banners.link', 
                                    'banners.seq'
                                )
                ->join('pages as pg', 'banners.page_id', '=', 'pg.id')
                ->join('segments as se', function ($join) use($id){
                    $join->on('se.id', '=', 'seg_id')
                           ->where('se.id', '=', $id );
                })
                ->limit(4)
                ->get();
    }
}
