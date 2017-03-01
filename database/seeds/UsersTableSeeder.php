<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'nickname'  => 'ti_mangue',
            'name'      => 'Administrador Mangue Tecnologia',
            'email'     => 'ti@manguetecnologia.com.br',
            'password'  => bcrypt('mangue@2017'),
        ]);
        
        DB::table('users')->insert([
            'nickname'  => 'cli_acqua',
            'name'      => 'Grupo Acqua',
            'email'     => 'acqua.mague@gmail.com',
            'password'  => bcrypt('mangue@2017'),
        ]);
       
    }
}
