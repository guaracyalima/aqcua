<?php
namespace App\Http\Controllers\Api;

use Auth;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response as Status;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class AuthClientNotCaptchaController extends Controller
{
    public function authenticate(Request $request)
    {
        if (Auth::attempt(['nickname' => $request->login, 'password' => $request->password]))
        {
            $request->merge(['nickname' => $request->login ]);
            $credentials = $request->only('nickname', 'password');
            
        } elseif (Auth::attempt(['email' => $request->login, 'password' => $request->password])) {

            $request->merge(['email' => $request->login ]);
            $credentials = $request->only('email', 'password');
        } else {
            $credentials = false;
        }
        
        try {
            if( !$credentials ){
                return response()->json(false, Status::HTTP_UNAUTHORIZED);// 401
            }
            // verify the credentials and create a token for the user
            elseif( !$token = JWTAuth::attempt($credentials)) {
                return response()->json(false, Status::HTTP_UNAUTHORIZED); // 401
            }
        } catch (JWTException $e) {
            // something went wrong
            return response()->json(false, Status::HTTP_SERVICE_UNAVAILABLE);// 503
        }
        // all good so return the token
        return response()->json(compact('token'));
    }
    
    public function logout(Request $request )
    {
        try{
            JWTAuth::invalidate(JWTAuth::getToken());
            //capturar o id do usuario para gravar log
            $auth = Auth::user();
            // SET LOG
            return response()->json(false, Status::HTTP_ACCEPTED);// 202

        } catch(Exception $e){
            return response()->json( false, Status::HTTP_EXPECTATION_FAILED);// 417
        }
    }
}
