<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use ReallySimpleJWT\Token;

class ValidateTokenForApi
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $token = $request->cookie("token");
        $route = $request->path();
        if (isset($token)) {
            $isTokenValid = $this->validateToken($token);
            if (!$isTokenValid && $route !== "api/user/login" && $route !== "api/user/register") {
                return response()->json([
                    "message" => "Invalid token",
                ], $status = 401);
            }
        } else {
            if ($route !== "api/user/login" && $route !== "api/user/register") {
                return response()->json([
                    "message" => "Invalid token",
                ], $status = 401);
            }
        }
        return $next($request);
    }

    public function validateToken($token)
    {
        $appSecret = env("APP_SECRET");
        $isTokenValid = Token::validate($token, $appSecret);
        return $isTokenValid;
    }
}
