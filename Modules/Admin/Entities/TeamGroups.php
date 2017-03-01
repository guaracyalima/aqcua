<?php

namespace Modules\Admin\Entities;

use Illuminate\Database\Eloquent\Model;
use Modules\Admin\Entities\Teams;

class TeamGroups extends Model
{
    protected $fillable = [
        'id',
        'name',
        'desc',
        'icon'
    ];
    
    protected $dates = ['deleted_at'];
    
    protected $table = "team_groups";
    
    
    public static function getTeamGroup()
    {
        $collect = collect();
        $group = TeamGroups::select('id', 'name', 'icon')->get();
        foreach ($group as $val) {
            $team = Teams::getTemByGroup( $val->id );
            $coolectGroup = collect( $val );
            $coolectGroup->put('team', $team );
            $collect->push( $coolectGroup->all() );
        }
        return $collect->all();
    }
    
}
