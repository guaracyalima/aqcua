<?php

/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Route::group([ 'domain' => env('ADMIN_URI', 'admin.sys.mangue'), 'namespace' => 'Modules\Admin\Http\Controllers' ], function(){
    Route::get('/', function () {
        return view('admin');
    });
});

Route::group([ 'domain' => env('ADMIN_URI', 'admin.sys.mangue'), 'namespace' => 'Modules\Admin\Http\Controllers', 'middleware' => ['jwt.auth', 'role:manager|admin|root'] ], function(){
    
    // REST FULL ROUTER
    Route::resource('sobre',        'Pages\SobreController');
    Route::resource('publicidade',  'Pages\PublicidadesController');
    Route::resource('servicos',     'Pages\ServicosController');
    Route::resource('contatos',     'Pages\ContatosController');
    Route::resource('noticias',     'Pages\BlogsController');
    Route::resource('galerias',     'Pages\GaleriaController');
    Route::resource('slider',       'Pages\SliderController');
    Route::resource('banners',      'Pages\BannersController');
    
    Route::resource('saude/especialidades', 'Health\EspecialidadesController');
    Route::resource('saude/servicos', 'Health\ServicosController');
    Route::resource('saude/categorias', 'Health\CategoriasController');
    Route::resource('saude/profissionais', 'Health\ProfissionaisController');
    
    Route::resource('loja/categorias', 'Store\CategoriasController');
    Route::resource('loja/produtos', 'Store\ProdutosController');
    
    Route::resource('emails', 'MailsController');
    
    
    // HELPER ROUTER
    Route::resource('pages', 'PagesController');
    Route::get('content/pages/ref/{id}',  'ContentPagesController@getContents');
    Route::get('box/contents/ref/{id}',  'BoxContentsController@getBoxs');
    Route::get('informacoes/ref/{id}', 'InfoController@getInfo');
    Route::get('informacoes/icon', 'InfoController@getIcons');
    Route::get('operadora', 'MobileOperatorsController@listOperators');
    Route::get('saude/especialidades/listar/{todos}', 'Health\EspecialidadesController@getList');
    Route::get('saude/categorias/listar/{todos}', 'Health\CategoriasController@getList');
    Route::get('loja/categorias/listar/{todos}', 'Store\CategoriasController@getList');
    Route::get('noticias/request/{pagina}', 'Pages\BlogsController@getPage');
    Route::get('galerias/request/{pagina}', 'Pages\GaleriaController@getPage');
    Route::get('slider/request/{pagina}', 'Pages\SliderController@getPage');
    Route::get('banners/request/{pagina}', 'Pages\BannersController@getPage');
    
});