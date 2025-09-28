<?php

namespace App\Models\Auth;

use Illuminate\Foundation\Auth\User as Authenticatable;

class Officer extends Authenticatable
{

    protected $fillable = ['name', 'username', 'ein', 'phone_number', 'password'];

    protected $hidden = ['password', 'remember_token'];

    protected function casts(): array
    {
        return [
            'password' => 'hashed',
        ];
    }
}
