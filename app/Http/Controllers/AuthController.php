<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use ReallySimpleJWT\Token;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        try {
            $request->validate([
                "userName" => "required",
                "email" => "required|email|unique:users,email",
                "password" => "required"
            ]);

            $userName = $request->userName;
            $email = $request->email;
            $password = $request->password;
            $user = new User();
            $user->name = $userName;
            $user->email = $email;
            $user->password = $password;
            $user->save();
            return response()->json([
                "success" => true,
                "message" => "User successfully created"
            ]);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json([
                "success" => false,
                "message" => $e->getMessage()
            ], $status = 400);
        }
    }


    public function login(Request $request)
    {
        $request->validate([
            "email" => "required|email",
            "password" => "required"
        ]);
        $email = $request->email;
        $password = $request->password;
        $user = User::where("email", $email)->first();
        if ($user) {
            if (Hash::check($password, $user->password)) {
                $appSecret = (string) env("APP_SECRET");
                $expireAt = time() + 3600;
                $issuer = env("APP_URL");
                $token = Token::create($user->id, $appSecret, $expireAt, $issuer, "HS256");
                return response()->json([
                    "success" => true,
                    "token" => $token,
                    "message" => "User login successfull"
                ]);
            }
        } else {
            return response()->json([
                "success" => false,
                "message" => "User not found"
            ], $status = 404);
        }
        return response()->json([
            "success" => false,
            "message" => "User login failed"
        ], $status = 401);
    }
}
