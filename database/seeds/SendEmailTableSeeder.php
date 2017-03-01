<?php

use Illuminate\Database\Seeder;

class SendEmailTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // GRUPO ACQUA
        DB::table('send_mail')->insert([
            'seg_id'        => 1,
            'category'      => 'SITE',
            'email'         => 'acquamed@hotmail.com',
            'title'         => 'Grupo Acqua',
            'desc'          => 'Formulário de Contato. ',
        ]);
        // ACQUAFITNESS
        DB::table('send_mail')->insert([
            'seg_id'        => 2,
            'category'      => 'SITE',
            'email'         => 'acqua_fitness@hotmail.com',
            'title'         => 'AcquaFitness',
            'desc'          => 'Formulário de Contato.',
        ]);
        // ACQUAMED
        DB::table('send_mail')->insert([
            'seg_id'        => 3,
            'category'      => 'SITE',
            'email'         => 'acquamed@hotmail.com',
            'title'         => 'AcquaMed',
            'desc'          => 'Formulário de Contato.',
        ]);
        // ACQUASHOP
        DB::table('send_mail')->insert([
            'seg_id'        => 4,
            'category'      => 'SITE',
            'email'         => 'root.arthur@gmail.com',//acquashop@bol.com.br
            'title'         => 'AcquaShop',
            'desc'          => 'Formulário de Contato.',
        ]);
        // ACQUARIUS
        DB::table('send_mail')->insert([
            'seg_id'        => 5,
            'category'      => 'SITE',
            'email'         => 'acquamed@hotmail.com',
            'title'         => 'Acquarius',
            'desc'          => 'Formulário de Contato.',
        ]);
        
        
        // ACQUASHOP ORÇAMENTO
        DB::table('send_mail')->insert([
            'seg_id'        => 4,
            'category'      => 'SHOP',
            'email'         => 'root.arthur@gmail.com',//acquashop@bol.com.br
            'title'         => 'AcquaShop',
            'desc'          => 'Formulário de Orçamento.',
        ]);
        
    }
}
