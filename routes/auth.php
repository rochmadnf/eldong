<?php

use Illuminate\Support\Facades\Route;

// for user
Route::controller(\App\Http\Controllers\Auth\AuthenticatedSessionController::class)->group(function () {
    foreach (['login', 'dapur'] as $prefix) {
        Route::middleware('guest')
            ->prefix("/{$prefix}")
            ->group(function () use ($prefix) {
                Route::get('/', 'index')->name($prefix);
                Route::post('/', 'login');
            });
    }
});

// dashboard
Route::middleware('auth')->group(function () {
    Route::prefix('reports')->group(function () {
        Route::get('/submission', function () {
            return "hello";
        })->name('report.new');
    });
});
