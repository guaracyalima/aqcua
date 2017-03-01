<?php

namespace Modules\Admin\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Gallery extends Model
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
    
    protected $table = "gallery";
    
    public static function getBySeg($id)
    {
        return Gallery::select(
                        'gallery.title', 
                        'gallery.subtitle', 
                        'gallery.content', 
                        'gallery.link', 
                        'gallery.img'
                    )
                    ->join('pages as pg', 'gallery.page_id', '=', 'pg.id')
                    ->join('segments as s', function($join) use($id){
                        $join->on('pg.seg_id', '=', 's.id')
                                ->where('s.id', '=', $id ); 
                        
                    })
                    ->get();
    }
}
