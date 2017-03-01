<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Modules\Admin\Entities\Teams;

class TeamController extends Controller
{
    public function about($id)
    {
        return Teams::getDetails($id);
    }
}
