<?php

use Illuminate\Http\Request;
use Carbon\Carbon;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
/*
 * Signs in a user using JWT
 */
 Route::group(['middleware' => 'cors'] , function(){

    
    //Route::post('/auth/user', 'Api\AuthClientController@authenticate');//->middleware('cors');
    Route::post('/auth/user', 'Api\AuthClientNotCaptchaController@authenticate');
    /**
    * Logout in JWT
    */
    Route::post('/logout', 'Api\AuthClientNotCaptchaController@logout');
    /**
    * Fetches a restricted resource from the same domain used for user authentication
    */
    Route::get('/auth-token', function () {
        
        $token = JWTAuth::getToken();
        $user = JWTAuth::toUser($token);

        return Response::json([
            'data' => [
                'email' => $user->email,
                'nickname' => $user->nickname
                //'registered_at' => $user->all() //->toDateTimeString()
            ]
        ]);
    })->middleware('jwt.auth');

    /**
    * Fetches a restricted resource from API using CORS
    */
    Route::get('/auth', function () {
        try {
            JWTAuth::parseToken()->toUser();
        } catch (Exception $e) {
            return Response::json(['error' => $e->getMessage()], Symfony\Component\HttpFoundation\Response::HTTP_UNAUTHORIZED);
        }

        return ['data' => 'This has come from a dedicated API subdomain with restricted access.'];
    });
 });


Route::group(['middleware' => ['jwt.auth', 'role:manager|admin|root']], function()
{
    Route::get('dashboard', 'DashboardController@index');

});


/**
 * API Comunication website
 */

Route::get('grupo.json', 'GrupoController@index');
Route::get('med.json', 'MedController@index');
Route::get('shop.json', 'ShopController@index');
Route::get('fit.json', 'FitController@index');
Route::get('acquarius.json', 'AcqController@index');
Route::post('formulario/contato', 'SendMailController@sendContact');


Route::get('med/servicos.json', 'MedServicosController@index');
Route::get('blog/{id}/noticia.json', 'BlogController@news');
Route::get('equipe/{id}/detalhes.json', 'TeamController@about');


