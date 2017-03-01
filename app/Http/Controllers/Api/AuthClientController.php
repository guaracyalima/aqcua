<?php

namespace App\Http\Controllers\Api;

use Auth;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

use App\Traits\CaptchaTrait;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response as Status;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class AuthClientController extends Controller
{
    
    use CaptchaTrait;
    
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
}
