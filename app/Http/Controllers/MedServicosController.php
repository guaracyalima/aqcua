<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Modules\Admin\Entities\Segments;
use Modules\Admin\Entities\HealthSpecialties;
use Modules\Admin\Entities\HealthServices;


class MedServicosController extends Controller
{
    public function index(Request $request){
        
        // (AcquaMed)
        // ID = 3
        $id = 3;
        
        $collectHealth = collect();
        $e  = HealthSpecialties::select('id', 'name', 'desc')
                    ->where('seg_id', '=', $id )
                    ->get();
        $s  = HealthServices::all();
        
        $collectHealth->put('especialidades', $e);
        $collectHealth->put('servicos', $s);
        
        return response()->json( $collectHealth->filter()->all() );
    }
}
