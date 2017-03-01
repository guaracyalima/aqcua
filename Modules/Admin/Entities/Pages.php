<?php

namespace Modules\Admin\Entities;

use DB;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

use Modules\Admin\Entities\ContentPages;
use Modules\Admin\Entities\Info;

class Pages extends Model
{
    protected $fillable = [
        'id',
        'seg_id',
        'name',
        'title',
        'subtitle'
    ];
    
    protected $dates = ['deleted_at'];
    
    public $timestamps = false;
    
    protected $table = "pages";
    
    
    public static function getPageAboutBySegments( $id )
    {
        return  Pages::select( 'id', 'name', 'title', 'subtitle')
                    ->where('seg_id', $id )
                    ->where('name', 'sobre')
                    ->first();
    }
    
    public static function getPagePublicityBySegments( $id )
    {
        $page   =       Pages::select('pages.*')
                            ->join('content_pages as cp', 'pages.id', '=', 'cp.page_id')
                            ->where('seg_id', $id )
                            ->where('name', 'publicidade')
                            ->first();
        if( count($page) > 0 ){
            $collectContent = collect(ContentPages::where('page_id', '=', $page->id )->first() );
            $collectContent->forget('created_at');
            $collectContent->forget('updated_at');
            $collectContent->forget('deleted_at');

            $collectPage = collect( $page );
            $collectPage->put('content', $collectContent->filter()->all() );
            $collectPage->forget('id');
            $collectPage->forget('seg_id');
            $collectPage->forget('name');
            $collectPage->forget('created_at');
            $collectPage->forget('updated_at');
            $collectPage->forget('deleted_at');
            return $collectPage->filter()->all();
        }
        
    }
    public static function getPageServicesBySegments( $id )
    {
        $page   =       Pages::select('pages.*')
                            ->where('seg_id', '=', $id )
                            ->where('name', '=', 'servicos')
                            ->first();
        $collectPage = collect( $page );
        $collectPage->put('content', ContentPages::getContentAndBox( $page->id ) );
        $collectPage->forget('created_at');
        $collectPage->forget('updated_at');
        $collectPage->forget('deleted_at');
        return $collectPage->filter()->all();
    }
    
    public static function getPageContactsBySegments( $id )
    {
        $page   =       Pages::where('seg_id', $id )
                            ->where('name', 'contato')
                            ->first();
        
        $content    =   ContentPages::select('id', 'title', 'subtitle', 'content')
                            ->where('page_id', $page->id )
                            ->first();
        
        $info       =   Info::getInfoContatcts( $id );
        
        $collectPage = collect( $page );
        $collectPage->put('content', $content );
        $collectPage->put('info', $info );
        $collectPage->forget('id');
        $collectPage->forget('seg_id');
        $collectPage->forget('name');
        $collectPage->forget('created_at');
        $collectPage->forget('updated_at');
        $collectPage->forget('deleted_at');
        return $collectPage->filter()->all();
    }
    
    public static function getPageProfessionals($id)
    {
        return  Pages::select('pages.*')
                        ->leftJoin('content_pages as cp', 'pages.id', '=', 'cp.page_id')
                        ->where('seg_id', $id )
                        ->where('name', 'equipe')
                        ->first();
    }
    
}
