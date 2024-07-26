<?php
namespace Codx\Comic\Controller;

use Codx\Ralph\Engine as View;
use \Codx\Comic\Model\User;


class HomeController extends Controller{

    public function index()
    {
       
        return View::view('welcome');
    }

    public function auth()
    {
        echo("logged");
    }
}