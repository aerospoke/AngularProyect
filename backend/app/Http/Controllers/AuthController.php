<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;


class AuthController extends Controller
{
    public function register(Request $request) {
        
        if (!$request->name || !$request->email || !$request->password) {
            return response()->json(['error' => 'Todos los campos son obligatorios'], 400);
        }
        
        if(User::where('name', '=', $request->name)->exists()){
            return response()->json(['message' => 'Ya existe un usuario con este nombre'], 400);
        }
        
        if(User::where('email','=',$request->email)->exists()){
            return response()->json(['message' => 'Ya existe un usuario con este correo'], 400);
        }


        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

        return response()->json(['message' => 'Usuario registrado correctamente'], 201);
    }

    public function login(Request $request){
        
        $request->validate([
            'username' => 'required|email',
            'password' => 'required',
        ]);

        if (Auth::attempt(['email' => $request->username, 'password' => $request->password])) {
        
            $user = Auth::user();
            $token = $user->createToken('auth_token')->plainTextToken;

            return response()->json([
                'message' => 'Login exitoso',
                'user' => $user,
                'token' => $token
            ]);
        }

        return response()->json(['message' => 'Credenciales incorrectas'], 401);
    }
}
