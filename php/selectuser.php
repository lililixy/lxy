<?php
require("conn.php");
if(isset($_POST['user'])){
    $user=$_POST['user'];
    $result=$conn->query("select * from userlist where user=$user");
    echo json_encode($result->fetch_assoc());
}