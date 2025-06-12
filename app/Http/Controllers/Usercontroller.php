<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use App\Models\User;

class Usercontroller extends Controller
{
    public function index()
    {
        // This method can be used to return a view or data for the user index
        return view('users.index');
    }
    public function show($id)
    {
        // This method can be used to show a specific user by ID
        $user = User::findOrFail($id);
        return view('users.show', compact('user'));
    }
    public function create()
    {
        // This method can be used to return a view for creating a new user
        return view('users.create');
    }
    public function store(Request $request)
    {
        
        try {
            $validated = $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|string|email|max:255|unique:users',
                'password' => 'required|string|min:4',
            ]);
    
            \Log::info('Validated data:', $validated);
    
            $validated['password'] = Hash::make($validated['password']);

            $utilisateur = User::create($validated);

            $token = $utilisateur->createToken($request->name);
    
            return [
                'user'=> $utilisateur,
                'token' => $token->plainTextToken
            ];
        } catch (\Illuminate\Validation\ValidationException $e) {
            \Log::error('Erreur de validation:', $e->errors());
            return response()->json(['errors' => $e->errors()], 422);
        }
    }
}
