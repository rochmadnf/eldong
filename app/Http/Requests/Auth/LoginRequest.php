<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class LoginRequest extends FormRequest
{

    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'username' => ['bail', 'required', 'string', 'min:5'],
            'password' => ['bail', 'required', 'string', 'min:8'],
        ];
    }

    public function authenticate()
    {

        if (! Auth::attempt($this->only('username', 'password'), $this->boolean('remember'))) {

            throw ValidationException::withMessages([
                'not_found' => trans('auth.failed'),
            ]);
        }
    }
}
