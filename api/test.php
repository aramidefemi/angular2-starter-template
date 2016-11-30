<?php
	include 'craz.php';
	include 'class_libs/actions.php';
	header("Access-Control-Allow-Origin: *");
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata); //decoding json from javascript application
    @$myTxt = "my name"; //$request->name;
    $act = new actions();

//$q = "SHOW TABLES"; sql code for grtting all d tables in a mysql db
    $q="desc feed_backs ";// sql code for getting the schema of a mysql table 

    //$q="SELECT * from information_schema.columns where table_schema ='urangle' and table_name ='feed_backs' "; sql code for getting intensive information about a table 
$data = $act->sqlgetmany($q);
	echo json_encode($data);
?>