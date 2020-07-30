<?php
/**
 * Created by PhpStorm.
 * User: Space22
 * Date: 30.07.2020
 * Time: 18:59
 */

namespace App\Http\Controllers;


class IndexController extends Controller
{
    public function index()
    {
        return view('home.index');
    }
}