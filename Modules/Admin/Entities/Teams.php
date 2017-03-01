<?php

namespace Modules\Admin\Entities;

use DB;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

use Modules\Admin\Entities\TeamsHasHealth;

class Teams extends Model
{
    protected $fillable = [
        'id',
        'group_id',
        'name',
        'initials',
        'crm',
        'desc',
        'img'
    ];
    
    protected $dates = ['deleted_at'];
    
    protected $table = "teams";
    
    public static function getTemByGroup($id){
        $collect = collect();
        $team = Teams::select('id', 'name', 'initials', 'crm', 'desc', 'img')
                        ->where('group_id', '=', $id )
                        ->get();
        foreach ($team as $val) {
            $role = TeamsHasHealth::select('hs.name')
                    ->join('teams as t', 'teams_has_health.team_id', '=', 't.id')
                    ->join('health_specialties as hs', 'teams_has_health.hs_id', '=', 'hs.id')
                    ->where('t.id', '=', $val->id )
                    ->first();
            $collectTeam = collect($val);
            $collectTeam->put('role', $role->name );
            $collect->push( $collectTeam->filter()->all() );
        }
        return $collect->filter()->all();
    }

    public static function getDetails($id)
    {
        return  Teams::select(  'teams.id', 'teams.name', 'teams.initials', 
                                'teams.crm', 'teams.desc', 'teams.img',
                                DB::raw("hs.name as role")
                        )
                        ->join('teams_has_health as thh', 'teams.id','=', 'thh.team_id')
                        ->join('health_specialties as hs', 'thh.hs_id', '=', 'hs.id')
                        ->where('teams.id', '=', $id )
                        ->first();
    }
}
