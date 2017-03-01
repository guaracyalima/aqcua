<?php

use App\Role;
use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = new Role();
        $admin->name         = 'root';
        $admin->display_name = 'User Root';
        $admin->description  = 'User is allowed to manage and edit other all';
        $admin->save();
        
        $admin = new Role();
        $admin->name         = 'admin';
        $admin->display_name = 'User Administrator';
        $admin->description  = 'User is allowed to manage and edit almost everything';
        $admin->save();
        
        $owner = new Role();
        $owner->name         = 'manager';
        $owner->display_name = 'User Manager';
        $owner->description  = 'User is the manager of a given project';
        $owner->save();
    }
}
