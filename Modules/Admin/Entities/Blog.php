<?php

namespace Modules\Admin\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Blog extends Model
{
    protected $fillable = [
        'id',
        'page_id',
        'title',
        'subtitle',
        'content',
        'author',
        'img',
        'post_day',
        'post_year',
        'link',
        'video'
    ];
    
    protected $dates = ['deleted_at'];
    
    protected $table = "blog";
    
    public static function getBySeg($id)
    {
        return  Blog::select(
                    'blog.id',
                    'blog.title',
                    'blog.author',
                    'blog.img',
                    'blog.link',
                    'blog.video',
                    'blog.post_day',
                    'blog.post_year'
                )
                ->join('pages as p', 'blog.page_id', 'p.id')
                ->join('segments as s', function($join) use($id){
                    $join->on('p.seg_id', '=', 's.id')
                            ->where('s.id', '=', $id);
                })
                ->orderBy('blog.updated_at', 'desc')
                ->get();
                
    }
}
