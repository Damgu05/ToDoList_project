<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
 use App\Http\Controllers\UserController;
 use App\Http\Controllers\AuthController;
 use App\Http\Controllers\TaskController;
// use App\Events\UserLoggedIn;

 Route::apiResource('task',TaskController::class);
 Route::post('/login', [AuthController::class, 'login']);
 Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');

Route::apiResource('utilisateur',UserController::class);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    $user = $request->user();
    broadcast(new UserLoggedIn($user));    
  return $user;
});
Route::middleware('auth:sanctum')->put('task/{id}/valider', [TaskController::class, 'updateStatus']);
