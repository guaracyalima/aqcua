<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Modules\Admin\Entities\Blog;

class BlogController extends Controller
{
    public function news($id)
    {

        return Blog::find($id);
        
    }
}
