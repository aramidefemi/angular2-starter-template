<?php
// header("Access-Control-Allow-Origin: *");

$postdata = file_get_contents("php://input");

$request  = json_decode($postdata);
//decoding json from javascript application
include "craz.php";

include "class_libs/actions.php";

$act  = new actions();

$type = $_GET['type'];


switch ($type) {
	
	case 'get':
	
	$q = "SELECT * from feed_backs inner join users on feed_backs.user_id = users.user_id order by feed_back_id desc";
	
	// 	creating a query to get all d feeds from feed_back table and merge the resoective feed backs with their owns detals on tthe users table
	$res = $act->sqlgetmany($q);
	// 	running query
	if (empty($res)) {
		// 		checking if result set is empty
		$res = array('code' => false, 'message' => 'no feed backs to be displayed');
		// 		returning an  error message if empty
	}
	
	echo json_encode($res);
	// 	returing json result
	die();
	//k	illing application process
	break;
	
	case 'new':
	@$e = $request->email;
	//g	etting email from angular2 applicatiom........
	
	if (isset($e)) {
		
		// 		checking if email is empty or not
		$q   = "SELECT * from users where email='$e' limit 1";
		// 		checing if users as used the site ever b4
		$res = $act->sqlget($q);
		// 		running query
		
		if (empty($res)) {
			
			//c			hecking if result set is empty if yes meaning users has not perticipated on the application b4
			@$n = $act->test_input($request->name);
			//g			etting name from angular2 applicatiom........
			
			$q   = "INSERT INTO users(username,email,status) values('$n','$e','active')";
			//r			egistering the users for future auth.......
			$res = $act->sql($q);
			// 			running query
			
			$act->setCookie('user', $e);
			// 			sabing users email address to browser cookies
			$q   = "SELECT * from users where email='$e' limit 1";
			// 			checing if users as used the site ever b4
			$res = $act->sqlget($q);
			// 			running query
			
			$id = $res['user_id'];
			// 			getting users id from db
			@$c = $request->content;
			//g			etting content from angular2 applicatiom........
			
			$q  = "INSERT into feed_backs(content,status,user_id) values('$c','active','$id')";
			
			
			$act->sqlget($q);
			
		}
		elseif(isset($res)){
			
			# users application did not send an email to us .... maybe the users forgot to input an email address or did not feel it was necessary or save to do so
			@$c = $request->content;
			//g			etting content from angular2 applicatiom........
			@$r = $request->reaction;
			//g			etting reaction from angular2 applicatiom........
			$id = $res['user_id'];
			
			$q = "INSERT into feed_backs(content,status,user_id) values('$c','active','$id')";
			
			$act->sqlget($q);
			
		}
		
	}
	elseif (empty($e)) {
		
		# users application did not send an email to us .... maybe the users forgot to input an email address or did not feel it was necessary or save to do so
		@$c = $request->content;
		//g		etting content from angular2 applicatiom........
		@$r = $request->reaction;
		//g		etting reaction from angular2 applicatiom........
		
		$q = "INSERT into feed_backs(content,status) values('$c','$r','active')";
		
		$act->sqlget($q);
		
	}
	
	
	break;
	
	
	default:
	$res = array('code' => false, 'message' => 'false usage');
	// 	// 	returning an  error message if $tye is not set
	echo json_encode($res);
	// 	returing json result
	die();
	//k	illing application process
	break;
	
}

