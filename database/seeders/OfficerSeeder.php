<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OfficerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $super = \App\Models\Auth\Officer::create([
            'name' => 'Admin E-Lapor',
            'username' => 'adel_1208',
            'ein' => null,
            'phone_number' => '081234567890',
            'password' => bcrypt('password123'),
        ]);

        $super->forceFill(['remember_token' => str()->random(16)])->update();

        // assign role here

    }
}
