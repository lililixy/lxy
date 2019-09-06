<?php
require("conn.php");

//检查手机号码
if(isset($_GET['phone'])){
    $phone=$_GET['phone'];
    
    //通过查询方式来测试是否存在用户名。
    $result=$conn->query("select * from userlist where phonenumber='$phone'");
    if($result->fetch_assoc()){//存在
        echo true;//1
    }else{//不存在
        echo false;//空隙
    }
}
//检测用户名
if(isset($_GET['user'])){
    $user=$_GET['user'];
    
    //通过查询方式来测试是否存在用户名。
    $result=$conn->query("select * from userlist where user='$user'");
    if($result->fetch_assoc()){//存在
        echo true;//1
    }else{//不存在
        echo false;//空隙
    }
}

if(isset($_POST['user'])){
    $user=$_POST['user'];
    $pass=$_POST['pass'];
    $phone=$_POST['phone'];
    $result=$conn->query("insert userlist values(null,'$user','$pass','$phone',NOW())");
    echo true;
}