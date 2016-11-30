<?php
 /** <!--This source code was Written by Oluwafemi Olasubomi Aramide  of https://installappservices.com --> 	*/

$mysqli = @new mysqli('localhost', 'testdb','test', 'urangle');

// Works as of PHP 5.2.9 and 5.3.0.
if ($mysqli->connect_error) {
    die('Connect Error: ' . $mysqli->connect_error);
}




?>

