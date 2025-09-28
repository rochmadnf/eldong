<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $super = \App\Models\User::create([
            'username' => 'eldong_1208',
            'password' => 'password123',
            'remember_token' => str()->random(10),
        ]);
    }
}
