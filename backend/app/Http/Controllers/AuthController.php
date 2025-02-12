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
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
        
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

    public function getUser(Request $request){
        $userId = $request->query('id');

        if (!$userId) {
            return response()->json(['error' => 'ID de usuario no proporcionado'], 400);
        }

        $user = User::where('id', $userId)->select('id','name','email','country')->first();

        if (!$user) {
            return response()->json(['error' => 'Usuario no encontrado'], 404);
        }

        return response()->json($user);
    }

    public function updateUser(Request $request){

        
        $user = User::where('id',$request->id)->first();
        
        $user->name = $request->name;
        $user->password = Hash::make($request->password);
        $user->email = $request->email;
        $user->country = $request->country;

        $user->save();
        
        return response()->json(['message' => 'Usuario actualizado correctamente'], 201);
    }

    public function deleteUser(Request $request){

        $userId = $request->id;

        return response()->json(['message' => 'Usuario eliminado correctamente'], 201);
    }
}
