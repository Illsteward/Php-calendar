<?php

$events = array();

$host="localhost";
$port=3306;
$socket="";
$user="calUser";
$password="123456";
$dbname="calendar";

$con = new mysqli($host, $user, $password, $dbname, $port, $socket)
	or die ('Could not connect to the database server' . mysqli_connect_error());

mysqli_set_charset($con, "utf8");

$query = "SELECT * FROM udalosti";

$result = mysqli_query($con, $query);


while($rows = mysqli_fetch_array($result,MYSQLI_ASSOC)) {
$events[] = $rows;
};


echo(json_encode($events, JSON_UNESCAPED_UNICODE));
$con->close();

?>

