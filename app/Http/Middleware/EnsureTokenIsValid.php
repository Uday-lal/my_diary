<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureTokenIsValid
{
    public function handle(Request $request, Closure $next): Response
    {
        $token = $request->cookie("token");
        $route = $request->path();
        if (!isset($token) && $route !== "login" && $route !== "register") {
            return redirect("/login");
        }
        return $next($request);
    }
}
