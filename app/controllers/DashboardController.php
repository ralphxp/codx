<?php
namespace Codx\Comic\Controller;

use Codx\Ralph\Engine as View;


class DashboardController extends Controller{

    public function __construct(){
    
    }

    public function index()
    {
       
        return View::view('admin/dashboard/index');
    }

    
}