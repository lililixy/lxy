<?php  
	require "conn.php";//引入数据库连接
    $result=$conn->query("select * from slidelist");
    $arrdata=array();
    for($i=0;$i<$result->num_rows;$i++){
        $arrdata[$i]=$result->fetch_assoc();
    }
    echo json_encode($arrdata);
?>