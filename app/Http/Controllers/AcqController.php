<?php

namespace App\Http\Controllers;

use DB;
use Illuminate\Http\Request;

use Modules\Admin\Entities\Pages;
use Modules\Admin\Entities\ContentPages;
use Modules\Admin\Entities\Carousel;
use Modules\Admin\Entities\Gallery;
use Modules\Admin\Entities\Blog;

class AcqController extends Controller
{
    public function index( Request $request )
    {
        // (Acquarius)
        // ID = 6
        $id = 5;
        
        $acqCollect = collect();
        //
        // SLIDER
        //
        $acqCollect->put('slider', Carousel::getCarouselSegments($id) );
        //
        // ABOUT
        //
        $aboutCollect = collect( Pages::getPageAboutBySegments($id) );
        $contentAndBox  = ContentPages::getContentAndBox( $aboutCollect->get('id') );
        $aboutCollect->put('content', $contentAndBox );
        $acqCollect->put('sobre', $aboutCollect->all() );
        //
        //  SERVICOS
        //
        $acqCollect->put('servicos', Pages::getPageServicesBySegments($id) );
        //
        //  PUBLICIDADE
        //
        $acqCollect->put('publicicdade', Pages::getPagePublicityBySegments($id) );
        //
        // GALERIA
        //
        $acqCollect->put('galerias', Gallery::getBySeg($id) );
        //
        // BLOG
        //
        $acqCollect->put('blog', Blog::getBySeg($id) );
        //
        //  CONTATO
        //
        $acqCollect->put('contato', Pages::getPageContactsBySegments($id) );
        
        return $acqCollect->all();
    }
}
