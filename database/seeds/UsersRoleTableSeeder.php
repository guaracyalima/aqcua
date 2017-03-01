<?php

use App\User;
use App\Role;
use Illuminate\Database\Seeder;

class UsersRoleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // role find
        $admin = Role::where('name', '=', 'admin')->first();
        $manager = Role::where('name', '=', 'manager')->first();
        
        // user find
        $userAdmin1 = User::where('email', '=', 'ti@manguetecnologia.com.br')->first();
        // role attach alias
        $userAdmin1->roles()->attach($userAdmin1->id);
        
        // user find
        $userManager = User::where('email', '=', 'acqua.mague@gmail.com')->first();
        // role attach alias
        $userManager->attachRole($manager);
        
    }
}
