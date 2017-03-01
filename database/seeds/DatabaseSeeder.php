<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UsersTableSeeder::class);
        $this->call(RolesTableSeeder::class);
        $this->call(UsersRoleTableSeeder::class);
        $this->call(StartTableSeeder::class);
        $this->call(MobileOperatorsTableSeeder::class);
        $this->call(IconsTableSeeder::class);
        $this->call(IconAcquaTableSeeder::class);
        $this->call(IconFitnessTableSeeder::class);
        $this->call(IconMedTableSeeder::class);
        $this->call(IconShopTableSeeder::class);
    }
}
