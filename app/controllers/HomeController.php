<?php
namespace Codx\Comic\Controllers;

use Codx\Ralph\Engine as View;

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