<?php 
require("conn.php");
if(isset($_GET['sid'])){
    $sid=$_GET['sid'];
    $result=$conn->query("delete * from userlist where sid=$sid ");
    $re=$conn->query("select * from userlist where sid=$sid ");
    if($result){
        echo "正确";
    }else{
        echo "报错";
    }
    echo json_encode($re->fetch_assoc());
}
    
