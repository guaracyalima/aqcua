<?php

namespace App\Http\Controllers;

use DB;
use Illuminate\Http\Request;

use Modules\Admin\Entities\Pages;
use Modules\Admin\Entities\ContentPages;
use Modules\Admin\Entities\Carousel;
use Modules\Admin\Entities\Gallery;
use Modules\Admin\Entities\Blog;

class FitController extends Controller
{
    public function index( Request $request )
    {
        // (AcquaFitness)
        // ID = 2
        $id = 2;
        
        $fitCollect = collect();
        //
        // SLIDER
        //
        $fitCollect->put('slider', Carousel::getCarouselSegments($id) );
        //
        // ABOUT
        //
        $aboutCollect = collect( Pages::getPageAboutBySegments($id) );
        $contentAndBox  = ContentPages::getContentAndBox( $aboutCollect->get('id') );
        $aboutCollect->put('content', $contentAndBox );
        $fitCollect->put('sobre', $aboutCollect->all() );
        //
        //  SERVICOS
        //
        $fitCollect->put('servicos', Pages::getPageServicesBySegments($id) );
        //
        //  PUBLICIDADE
        //
        $fitCollect->put('publicicdade', Pages::getPagePublicityBySegments($id) );
        //
        // GALERIA
        //
        $fitCollect->put('galerias', Gallery::getBySeg($id) );
        //
        // BLOG
        //
        $fitCollect->put('blog', Blog::getBySeg($id) );
        //
        //  CONTATO
        //
        $fitCollect->put('contato', Pages::getPageContactsBySegments($id) );
        
        return $fitCollect->all();
    }
}
