<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoriaController;
use App\Http\Controllers\ProdutoController;

/*Route::get('/user', function (Request $request) {
    return $request->user();
});*/
Route::apiResource('produto', ProdutoController::class);
Route::apiResource('categoria', CategoriaController::class);
