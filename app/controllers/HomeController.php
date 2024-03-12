<?php
namespace Codx\Comic\Controllers;

use Comic\App\Template\Engine as View;

class HomeController{

    public function index()
    {
        return View::view('welcome');
    }

    public function auth()
    {
        echo("logged");
    }
}