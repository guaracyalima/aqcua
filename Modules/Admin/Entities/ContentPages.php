<?php

namespace Modules\Admin\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

use Modules\Admin\Entities\BoxContents;

class ContentPages extends Model
{
    protected $fillable = [
        'id',
        'page_id',
        'title',
        'subtitle',
        'content',
        'img',
        'link'
    ];
    
    protected $dates = ['deleted_at'];
    
    //protected $timestamps  = false;
    
    protected $table = "content_pages";
    
    
    public static function getContentAndBox($id)
    {
        if( $id ){
            $cpg = ContentPages::where('page_id', '=', $id)->get();
            $collectCpg = collect();
            foreach ($cpg as $val) {
                $box = BoxContents::where('cp_id', '=', $val->id)->get();
                $boxCollect = collect();
                foreach ($box as $k => $v) {
                    $bl = collect( $v);
                    $bl->forget('created_at');
                    $bl->forget('updated_at');
                    $bl->forget('deleted_at');
                    $boxCollect->push( $bl->filter()->all() );
                }
                $cl = collect($val);
                $cl->put('box', $boxCollect->all());
                $cl->forget('page_id');
                $cl->forget('id');
                $cl->forget('created_at');
                $cl->forget('updated_at');
                $cl->forget('deleted_at');
                $collectCpg->push( $cl->filter()->all() );
            }
            return $collectCpg->all();
        }
        return null;
    }
}
