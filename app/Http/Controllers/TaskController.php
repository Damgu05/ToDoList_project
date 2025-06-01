<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\task;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Routing\Controller;

class TaskController extends Controller
{
   public function __construct()
    {
        $this->middleware('auth:sanctum')->except(['index', 'show']);
    }
    public function index() {
        $task = Task::all();
        return response()->json($task);
    }
    public function show($id) {
        $task = Task::find($id);
        if (!$task) {
            return response()->json(['message' => 'Utilisateur non trouvé'], 404);
        }

        return response()->json($task);
    }
 public function store(Request $request)
    {
        
     try {
        //dd.$validated = $request->all();
            $validated = $request->validate([
                'title' => 'required|string|max:255',
                'description' => 'required|string|min:8',
                'status' => 'nullable|string|in:en_attente,valide,annule'
            ]);
              if (!isset($validated['status'])) {
            $validated['status'] = 'en_attente';
        }
            \Log::info('Validated data:', $validated);
            $user = Auth::user();
            
            $task = $user->tasks()->create($validated);
             return response()->json($task, 201);
        
        } catch (\Illuminate\Validation\ValidationException $e) {

            \Log::error('Erreur de validation:', $e->errors());
            
            return response()->json(['errors' => $e->errors()], 422);
        }
    }

}
