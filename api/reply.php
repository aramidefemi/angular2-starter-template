<?php
//    header("Access-Control-Allow-Origin: *");
$postdata = file_get_contents("php://input");
$request  = json_decode($postdata); //decoding json from javascript application
include "class_libs/actions.php";

$type = $_GET['type'];

switch ($type) {
	case 'value':
	@$myTxt = $request->name;

		break;
	
	default:
		# code...
		break;
}



$data =
array('id' => false, 'first_name' => $myTxt, 'error' => 'user has no id');

echo json_encode($data);

?>


<?php
//    header("Access-Control-Allow-Origin: *");
$postdata = file_get_contents("php://input");
$request  = json_decode($postdata); //decoding json from javascript application
include "class_libs/actions.php";

$type = $_GET['type'];

switch ($type) {
	case 'value':
	@$myTxt = $request->name;

		break;
	
	default:
		# code...
		break;
}



$data =
array('id' => false, 'first_name' => $myTxt, 'error' => 'user has no id');

echo json_encode($data);

?>


