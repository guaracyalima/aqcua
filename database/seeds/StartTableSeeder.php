<?php

use Carbon\Carbon;
use Illuminate\Database\Seeder;

class StartTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {   
        // CREATE SEGMENTS
        $grupoAqua  =   DB::table('segments')->insertGetId([
                            'name'  => 'Grupo Acqua',
                            'created_at'    => Carbon::now()->toDateTimeString(),
                            'updated_at'    => Carbon::now()->toDateTimeString()
                        ]);
        $aquaFit    =   DB::table('segments')->insertGetId([
                            'name'  => 'AcquaFitness',
                            'created_at'    => Carbon::now()->toDateTimeString(),
                            'updated_at'    => Carbon::now()->toDateTimeString()
                        ]);
        $aquaMed    =   DB::table('segments')->insertGetId([
                            'name'  => 'AcquaMed',
                            'created_at'    => Carbon::now()->toDateTimeString(),
                            'updated_at'    => Carbon::now()->toDateTimeString()
                        ]);
        $aquaShop   =   DB::table('segments')->insertGetId([
                            'name'  => 'AcquaShop',
                            'created_at'    => Carbon::now()->toDateTimeString(),
                            'updated_at'    => Carbon::now()->toDateTimeString()
                        ]);
        $aquarius   =   DB::table('segments')->insertGetId([
                            'name'  => 'Acquarius',
                            'created_at'    => Carbon::now()->toDateTimeString(),
                            'updated_at'    => Carbon::now()->toDateTimeString()
                        ]);
        
        // PAGES GRUPO
        DB::table('pages')->insert([
                [
                    'seg_id'        => $grupoAqua,
                    'name'          => 'home',
                    'title'         => null,
                    'subtitle'      => null,
                    'created_at'    => Carbon::now()->toDateTimeString(),
                    'updated_at'    => Carbon::now()->toDateTimeString()
                ],
                [
                    'seg_id'        => $grupoAqua,
                    'name'          => 'sobre',
                    'title'         => 'Nós cuidamos de você',
                    'subtitle'      => 'Desde 1989',
                    'created_at'    => Carbon::now()->toDateTimeString(),
                    'updated_at'    => Carbon::now()->toDateTimeString()
                ],
                [
                    'seg_id'        => $grupoAqua,
                    'name'          => 'publicidade',
                    'title'         => null,
                    'subtitle'      => null,
                    'created_at'    => Carbon::now()->toDateTimeString(),
                    'updated_at'    => Carbon::now()->toDateTimeString()
                ],
                [
                    'seg_id'        => $grupoAqua,
                    'name'          => 'servicos',
                    'title'         => 'Serviços',
                    'subtitle'      => 'Alinhados às suas necessidades',
                    'created_at'    => Carbon::now()->toDateTimeString(),
                    'updated_at'    => Carbon::now()->toDateTimeString()
                ],
                [
                    'seg_id'        => $grupoAqua,
                    'name'          => 'contato',
                    'title'         => 'Contato',
                    'subtitle'      => 'entre em contato conosco.',
                    'created_at'    => Carbon::now()->toDateTimeString(),
                    'updated_at'    => Carbon::now()->toDateTimeString()
                ]
        ]);
        
        // PAGES ACQUAFITNESS
        DB::table('pages')->insert([
                [
                    'seg_id'        => $aquaFit,
                    'name'          => 'home',
                    'title'         => null,
                    'subtitle'      => null,
                    'created_at'    => Carbon::now()->toDateTimeString(),
                    'updated_at'    => Carbon::now()->toDateTimeString()
                ],
                [
                    'seg_id'        => $aquaFit,
                    'name'          => 'sobre',
                    'title'         => 'Viva <span>AcquaFitness</span>',
                    'subtitle'      => 'Equipe e estrutura para uma vida com mais saúde e disposição',
                    'created_at'    => Carbon::now()->toDateTimeString(),
                    'updated_at'    => Carbon::now()->toDateTimeString()
                ],
                [
                    'seg_id'        => $aquaFit,
                    'name'          => 'servicos',
                    'title'         => 'Atividades',
                    'subtitle'      => null,
                    'created_at'    => Carbon::now()->toDateTimeString(),
                    'updated_at'    => Carbon::now()->toDateTimeString()
                ],
                [
                    'seg_id'        => $aquaFit,
                    'name'          => 'publicidade',
                    'title'         => null,
                    'subtitle'      => null,
                    'created_at'    => Carbon::now()->toDateTimeString(),
                    'updated_at'    => Carbon::now()->toDateTimeString()
                ],
                [
                    'seg_id'        => $aquaFit,
                    'name'          => 'blog',
                    'title'         => 'Notícias <span>&</span> Novidades',
                    'subtitle'      => null,
                    'created_at'    => Carbon::now()->toDateTimeString(),
                    'updated_at'    => Carbon::now()->toDateTimeString()
                ],
                [
                    'seg_id'        => $aquaFit,
                    'name'          => 'galeria',
                    'title'         => 'Notícias <span>&</span> Novidades',
                    'subtitle'      => null,
                    'created_at'    => Carbon::now()->toDateTimeString(),
                    'updated_at'    => Carbon::now()->toDateTimeString()
                ],
                [
                    'seg_id'        => $aquaFit,
                    'name'          => 'contato',
                    'title'         => 'Contato',
                    'subtitle'      => null,
                    'created_at'    => Carbon::now()->toDateTimeString(),
                    'updated_at'    => Carbon::now()->toDateTimeString()
                ]
        ]);
        
        // PAGES ACQUAMED
        DB::table('pages')->insert([
                [
                    'seg_id'        => $aquaMed,
                    'name'          => 'home',
                    'title'         => null,
                    'subtitle'      => null,
                    'created_at'    => Carbon::now()->toDateTimeString(),
                    'updated_at'    => Carbon::now()->toDateTimeString()
                ],
                [
                    'seg_id'        => $aquaMed,
                    'name'          => 'sobre',
                    'title'         => 'Médica especializada',
                    'subtitle'      => 'Clínica',
                    'created_at'    => Carbon::now()->toDateTimeString(),
                    'updated_at'    => Carbon::now()->toDateTimeString()
                ],
                [
                    'seg_id'        => $aquaMed,
                    'name'          => 'servicos',
                    'title'         => 'Serviços <span>&</span> Especialidade',
                    'subtitle'      => null,
                    'created_at'    => Carbon::now()->toDateTimeString(),
                    'updated_at'    => Carbon::now()->toDateTimeString()
                ],
                [
                    'seg_id'        => $aquaMed,
                    'name'          => 'equipe',
                    'title'         => 'Nossos <span>Profissionais</span>',
                    'subtitle'      => null,
                    'created_at'    => Carbon::now()->toDateTimeString(),
                    'updated_at'    => Carbon::now()->toDateTimeString()
                ],
                [
                    'seg_id'        => $aquaMed,
                    'name'          => 'blog',
                    'title'         => 'Notícias <span>&</span> Novidades',
                    'subtitle'      => null,
                    'created_at'    => Carbon::now()->toDateTimeString(),
                    'updated_at'    => Carbon::now()->toDateTimeString()
                ],
                [
                    'seg_id'        => $aquaMed,
                    'name'          => 'galeria',
                    'title'         => 'Notícias <span>&</span> Novidades',
                    'subtitle'      => null,
                    'created_at'    => Carbon::now()->toDateTimeString(),
                    'updated_at'    => Carbon::now()->toDateTimeString()
                ],
                [
                    'seg_id'        => $aquaMed,
                    'name'          => 'contato',
                    'title'         => 'Contato',
                    'subtitle'      => null,
                    'created_at'    => Carbon::now()->toDateTimeString(),
                    'updated_at'    => Carbon::now()->toDateTimeString()
                ]
        ]);
        
        // PAGES ACQUASHOP
        DB::table('pages')->insert([
                [
                    'seg_id'        => $aquaShop,
                    'name'          => 'home',
                    'title'         => null,
                    'subtitle'      => null,
                    'created_at'    => Carbon::now()->toDateTimeString(),
                    'updated_at'    => Carbon::now()->toDateTimeString()
                ],
                [
                    'seg_id'        => $aquaShop,
                    'name'          => 'sobre',
                    'title'         => 'Versatil como você',
                    'subtitle'      => null,
                    'created_at'    => Carbon::now()->toDateTimeString(),
                    'updated_at'    => Carbon::now()->toDateTimeString()
                ],
                [
                    'seg_id'        => $aquaShop,
                    'name'          => 'servicos',
                    'title'         => null,
                    'subtitle'      => null,
                    'created_at'    => Carbon::now()->toDateTimeString(),
                    'updated_at'    => Carbon::now()->toDateTimeString()
                ],
                [
                    'seg_id'        => $aquaShop,
                    'name'          => 'publicidade',
                    'title'         => null,
                    'subtitle'      => null,
                    'created_at'    => Carbon::now()->toDateTimeString(),
                    'updated_at'    => Carbon::now()->toDateTimeString()
                ],
                [
                    'seg_id'        => $aquaShop,
                    'name'          => 'produtos',
                    'title'         => 'Produtos',
                    'subtitle'      => null,
                    'created_at'    => Carbon::now()->toDateTimeString(),
                    'updated_at'    => Carbon::now()->toDateTimeString()
                ],
                [
                    'seg_id'        => $aquaShop,
                    'name'          => 'blog',
                    'title'         => 'Notícias <span>&</span> Novidades',
                    'subtitle'      => null,
                    'created_at'    => Carbon::now()->toDateTimeString(),
                    'updated_at'    => Carbon::now()->toDateTimeString()
                ],
                [
                    'seg_id'        => $aquaShop,
                    'name'          => 'galeria',
                    'title'         => 'Notícias <span>&</span> Novidades',
                    'subtitle'      => null,
                    'created_at'    => Carbon::now()->toDateTimeString(),
                    'updated_at'    => Carbon::now()->toDateTimeString()
                ],
                [
                    'seg_id'        => $aquaShop,
                    'name'          => 'contato',
                    'title'         => 'Contato',
                    'subtitle'      => null,
                    'created_at'    => Carbon::now()->toDateTimeString(),
                    'updated_at'    => Carbon::now()->toDateTimeString()
                ]
        ]);
        
        // PAGES ACQUARIUS
        DB::table('pages')->insert([
                [
                    'seg_id'        => $aquarius,
                    'name'          => 'home',
                    'title'         => null,
                    'subtitle'      => null,
                    'created_at'    => Carbon::now()->toDateTimeString(),
                    'updated_at'    => Carbon::now()->toDateTimeString()
                ],
                [
                    'seg_id'        => $aquarius,
                    'name'          => 'sobre',
                    'title'         => 'Edifício <span>Acquarius</span>',
                    'subtitle'      => null,
                    'subtitle'      => 'Equipe e estrutura para uma vida com mais saúde e disposição',
                    'created_at'    => Carbon::now()->toDateTimeString(),
                    'updated_at'    => Carbon::now()->toDateTimeString()
                ],
                [
                    'seg_id'        => $aquarius,
                    'name'          => 'servicos',
                    'title'         => 'Estrutura',
                    'subtitle'      => null,
                    'subtitle'      => 'O Acquarius tem elevador e adequação para acessibilidade.',
                    'created_at'    => Carbon::now()->toDateTimeString(),
                    'updated_at'    => Carbon::now()->toDateTimeString()
                ],
                [
                    'seg_id'        => $aquarius,
                    'name'          => 'publicidade',
                    'title'         => null,
                    'subtitle'      => null,
                    'created_at'    => Carbon::now()->toDateTimeString(),
                    'updated_at'    => Carbon::now()->toDateTimeString()
                ],
                [
                    'seg_id'        => $aquarius,
                    'name'          => 'blog',
                    'title'         => 'Notícias <span>&</span> Novidades',
                    'subtitle'      => null,
                    'created_at'    => Carbon::now()->toDateTimeString(),
                    'updated_at'    => Carbon::now()->toDateTimeString()
                ],
                [
                    'seg_id'        => $aquarius,
                    'name'          => 'galeria',
                    'title'         => 'Notícias <span>&</span> Novidades',
                    'subtitle'      => null,
                    'created_at'    => Carbon::now()->toDateTimeString(),
                    'updated_at'    => Carbon::now()->toDateTimeString()
                ],
                [
                    'seg_id'        => $aquarius,
                    'name'          => 'contato',
                    'title'         => 'Contato',
                    'subtitle'      => null,
                    'created_at'    => Carbon::now()->toDateTimeString(),
                    'updated_at'    => Carbon::now()->toDateTimeString()
                ]
        ]);
        
    }
}
