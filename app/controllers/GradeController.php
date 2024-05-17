<?php
namespace Codx\Comic\Controller;

use Codx\Ralph\Engine as View;


class GradeController extends Controller{

    public function __construct(){
    
    }

    public function index()
    {
       
        return View::view('welcome');
    }

    
}