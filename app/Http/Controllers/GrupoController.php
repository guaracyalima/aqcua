<?php

namespace App\Http\Controllers;

use DB;
use Illuminate\Http\Request;

use Modules\Admin\Entities\Pages;
use Modules\Admin\Entities\ContentPages;
use Modules\Admin\Entities\Banners;

class GrupoController extends Controller
{
    public function index( Request $request )
    {
        
        //return DB::table('segments')->get();
        // (Grupo Acqua)
        // ID = 1  
        $id = 1;
        $groupCollect = collect();
        //
        // SEGMENTS
        //
        $groupCollect->put('segmentos', Banners::getBannesSegments($id) );
        //
        // ABOUT
        //
        $aboutCollect = collect( Pages::getPageAboutBySegments($id) );
        $contentAndBox  = ContentPages::getContentAndBox( $aboutCollect->get('id') );
        $aboutCollect->put('content', $contentAndBox );
        $groupCollect->put('sobre', $aboutCollect->all() );
        //
        //  PUBLICIDADE
        //
        $groupCollect->put('publicicdade', Pages::getPagePublicityBySegments($id) );
        //
        //  SERVICOS
        //
        $groupCollect->put('servicos', Pages::getPageServicesBySegments($id) );
        //
        //  CONTATO
        //
        $groupCollect->put('contato', Pages::getPageContactsBySegments($id) );
        
        return $groupCollect->all();
    }
}
