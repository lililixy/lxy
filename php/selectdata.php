<?php
require("conn.php");
if(isset($_GET['sid'])){
    $sid=$_GET['sid'];
    $result=$conn->query("select * from yoholist where sid=$sid ");
    echo json_encode($result->fetch_assoc());
}