<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use ReallySimpleJWT\Token;

class EnsureTokenIsValid
{
    public function handle(Request $request, Closure $next): Response
    {
        $token = $request->cookie("token");
        $route = $request->path();
        if (isset($token)) {
            $isTokenValid = $this->validateToken($token);
            if (!$isTokenValid && $route !== "login" && $route !== "register") {
                return redirect("/login");
            }
        } else {
            if ($route !== "login" && $route !== "register") {
                return redirect("/login");
            }
        }
        return $next($request);
    }

    private function validateToken($token)
    {
        $appSecret = env("APP_SECRET");
        $isTokenValid = Token::validate($token, $appSecret);
        return $isTokenValid;
    }
}
