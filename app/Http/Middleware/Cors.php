<?php

namespace App\Http\Middleware;

use Closure;

class Cors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
         return $next($request)
            //->header('Access-Control-Allow-Origin', $_SERVER['HTTP_ORIGIN'])
            ->header('Access-Control-Allow-Origin', '*')
            ->header('Access-Control-Allow-Credentials', 'true')
            //->header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
            ->header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT')
            ->header('Access-Control-Allow-Headers', 'Content-Type, Accept, Authorization, token, Authorization')//X-XSRF-TOKEN, X-Requested-With, client-security-token')
            //->header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, token')//X-XSRF-TOKEN, X-Requested-With, client-security-token')
            ->header('Access-Control-Max-Age', '28800');
    }
}
