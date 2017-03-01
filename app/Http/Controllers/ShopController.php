<?php

namespace App\Http\Controllers;

use DB;
use Illuminate\Http\Request;

use Modules\Admin\Entities\Pages;
use Modules\Admin\Entities\ContentPages;
use Modules\Admin\Entities\Carousel;
use Modules\Admin\Entities\Gallery;
use Modules\Admin\Entities\ProductCategories;
use Modules\Admin\Entities\Blog;

class ShopController extends Controller
{
    public function index( Request $request )
    {
        // (AcquaShop)
        // ID = 4
        $id = 4;
        
        $shopCollect = collect();
        //
        // SLIDER
        //
        $shopCollect->put('slider', Carousel::getCarouselSegments($id) );
        //
        // ABOUT
        //
        $aboutCollect = collect( Pages::getPageAboutBySegments($id) );
        $contentAndBox  = ContentPages::getContentAndBox( $aboutCollect->get('id') );
        $aboutCollect->put('content', $contentAndBox );
        $shopCollect->put('sobre', $aboutCollect->all() );
        //
        //  SERVICOS
        //
        $shopCollect->put('servicos', Pages::getPageServicesBySegments($id) );
        //
        //  PUBLICIDADE
        //
        $shopCollect->put('publicicdade', Pages::getPagePublicityBySegments($id) );
        //
        // PRODUTOS
        //
        $shopCollect->put('produtos', ProductCategories::getBySeg($id) );
        //
        // GALERIA
        //
        $shopCollect->put('galerias', Gallery::getBySeg($id) );
        //
        // BLOG
        //
        $shopCollect->put('blog', Blog::getBySeg($id) );
        //
        //  CONTATO
        //
        $shopCollect->put('contato', Pages::getPageContactsBySegments($id) );
        
        return $shopCollect->all();
    }
}
