<?php

namespace Modules\Admin\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Carousel extends Model
{
    protected $fillable = [
        'page_id',
        'title',
        'subtitle',
        'content',
        'link',
        'img'
    ];
    
    protected $dates = ['deleted_at'];
    
    protected $table = "carousel";
    
    public static function getCarouselSegments($id)
    {
        return  Carousel::select(
                                    'carousel.title', 
                                    'carousel.subtitle', 'carousel.content', 
                                    'carousel.link', 'carousel.img'
                                )
                ->join('pages as pg', 'carousel.page_id', '=', 'pg.id')
                ->join('segments as se', function ($join) use($id){
                    $join->on('se.id', '=', 'seg_id')
                           ->where('se.id', '=', $id );
                })
                ->get();
    }
}
