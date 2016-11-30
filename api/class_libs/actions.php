<?php


/**	* user account details class	*/

class actions
{
	
	
	
	public function test_input($data)
	{
		
		$data = trim($data);
		
		$data = stripslashes($data);
		
		$data = htmlspecialchars($data);
		
		$data = htmlspecialchars_decode($data, ENT_COMPAT);
		
		$data = htmlspecialchars($data, ENT_QUOTES);
		
		return $data;
		
	}
	
	
	
	
	function checkuser(){
		
		@$id = $_COOKIE['user'];
		
		@$lid = $_SESSION['user'];
		
		
		if (empty($id) and empty($lid)) {
			
			
			$id = null;
			
			$j = array('login' => false );
			
			echo json_encode($j);
			
			die();
			
		}
		elseif (isset($id) or isset($lid)) {
			
			
			
			if (empty($lid)) {
				
				$_SESSION['user'] = $_COOKIE['user'];
				
				$id = $_COOKIE['user'];
				
			}
			elseif (isset($lid)) {
				
				$id = $_SESSION['user'];
				
				
				setCookie("user",$id);
				
				
			}
			
			
			
			
			
		}
		
		
		return $id;
		
	}
	
	
	
	
	
	
	
	function sql($q){
		
		global $mysqli;
		
		
		if (@$data = $mysqli->query($q)) {
			
			$core = "done";
			
		}
		else {
			
			$core = null;
			
		}
		
		
		return @$core;
		
		
	}
	
	
	function sqlget($q){
		
		global $mysqli;
		
		$data = $mysqli->query($q);
		
		
		if ($info = $data->fetch_array(MYSQLI_ASSOC)) {
			
			$core = $info;
			
		}
		else{
			
			$core = null;
			
		}
		
		return @$core;
		
	}
	
	
	function sqlgetmany($q){
		
		global $mysqli;
		
		$data = $mysqli->query($q);
		
		
		while ($info = $data->fetch_array(MYSQLI_ASSOC) ) {
			
			
			@$core[]  = $info;
			
		}
		
		return @$core;
		
		
	}
	
	
	function setCookie($n,$v){
		
		setcookie($n, $v, time() + (86400 * 100), "/");
		// 		86400 = 1 day
	}
	
	function killCookie($n){
		
		setcookie($n, null , time() - (86400 * 100), "/");
		// 		86400 = 1 day
	}
	
	
	
}


?>