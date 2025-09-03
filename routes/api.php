<?php

use Illuminate\Support\Facades\Route;

Route::get('test-api', function () {
    return response()->json([
        'error' => true,
        'message' => 'failed to initialize the api'
    ], 200);
});
