<?php

use Carbon\Carbon;
use Illuminate\Database\Seeder;

class MobileOperatorsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('mobile_operators')->insert([
            [
                'name' => 'Tim',
                'created_at' => Carbon::now()->toDateTimeString(), 
                'updated_at'    => Carbon::now()->toDateTimeString() 
            ],
            [
                'name' => 'Claro',
                'created_at' => Carbon::now()->toDateTimeString(), 
                'updated_at'    => Carbon::now()->toDateTimeString() 
            ],
            [
                'name' => 'Vivo',
                'created_at' => Carbon::now()->toDateTimeString(), 
                'updated_at'    => Carbon::now()->toDateTimeString()
            ],
            [
                'name' => 'Oi',
                'created_at' => Carbon::now()->toDateTimeString(), 
                'updated_at'    => Carbon::now()->toDateTimeString() 
            ],
            [
                'name' => 'Nextel',
                'created_at' => Carbon::now()->toDateTimeString(), 
                'updated_at'    => Carbon::now()->toDateTimeString() 
            ],
            [
                'name' => 'Sercomtel',
                'created_at' => Carbon::now()->toDateTimeString(), 
                'updated_at'    => Carbon::now()->toDateTimeString() 
            ],
            [
                'name' => 'Algar Telecom',
                'created_at' => Carbon::now()->toDateTimeString(), 
                'updated_at'    => Carbon::now()->toDateTimeString() 
            ],
            [
                'name' => 'Porto Seguro Conecta',
                'created_at' => Carbon::now()->toDateTimeString(), 
                'updated_at'    => Carbon::now()->toDateTimeString() 
            ],
            [
                'name' => 'Outros',
                'created_at' => Carbon::now()->toDateTimeString(), 
                'updated_at'    => Carbon::now()->toDateTimeString() 
            ]
        ]);
    }
}
