<?php

namespace App\Http\Controllers;

use DB;
use Illuminate\Http\Request;

use Modules\Admin\Entities\Pages;
use Modules\Admin\Entities\ContentPages;
use Modules\Admin\Entities\Carousel;
use Modules\Admin\Entities\Gallery;
use Modules\Admin\Entities\Blog;
use Modules\Admin\Entities\TeamGroups;

class MedController extends Controller
{
    public function index( Request $request )
    {
        // (AcquaMed)
        // ID = 3
        $id = 3;
        $medCollect = collect();
        //
        // SLIDER
        //
        $medCollect->put('slider', Carousel::getCarouselSegments($id) );
        //
        // ABOUT
        //
        $aboutCollect = collect( Pages::getPageAboutBySegments($id) );
        $contentAndBox  = ContentPages::getContentAndBox( $aboutCollect->get('id') );
        $aboutCollect->put('content', $contentAndBox );
        $medCollect->put('sobre', $aboutCollect->all() );
        //
        //  SERVICOS
        //
        $medCollect->put('servicos', Pages::getPageServicesBySegments($id) );
        //
        //  PROFISSIONAIS
        //
        $collectProf = collect( Pages::getPageProfessionals($id) );
        $collectProf->put('tab', TeamGroups::getTeamGroup() );
        $medCollect->put('profissionais', $collectProf->all() );
        //
        // GALERIA
        //
        $medCollect->put('galerias', Gallery::getBySeg($id) );
        //
        // BLOG
        //
        $medCollect->put('blog', Blog::getBySeg($id) );
        //
        //  CONTATO
        //
        $medCollect->put('contato', Pages::getPageContactsBySegments($id) );
        
        return $medCollect->all();
    }
}
