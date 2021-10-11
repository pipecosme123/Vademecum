<?php

include 'db/database.php';

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
        $query = 'CALL getUserVademecum(' . $_GET["cedulas"] . ');';
        $resultado=metodoGet($query);
        echo json_encode($resultado->fetch(PDO::FETCH_ASSOC));
    header("HTTP/1.1 200 OK");
    exit();
}

?>