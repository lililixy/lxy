<?php
require("conn.php");
//大图
$sql = "INSERT INTO slidelist(url)
VALUES ('https://img11.static.yhbimg.com/yhb-img01/2019/08/27/16/01125a45db4c598eab5c2f11f432e9452d.jpg?imageView2/2/w/1150/h/450');";
$sql = "INSERT INTO slidelist(url)
VALUES ('https://img11.static.yhbimg.com/yhb-img01/2019/08/27/16/01d66822d666a554e08732523ea037b18e.jpg?imageView2/2/w/1150/h/450')";
$sql = "INSERT INTO slidelist(url)
VALUES ('https://img11.static.yhbimg.com/yhb-img01/2019/08/27/16/01d1edaaf5b13962a6d5e7888c119ee26f.jpg?imageView2/2/w/1150/h/450');";
$sql = "INSERT INTO slidelist(url)
VALUES ('https://img10.static.yhbimg.com/yhb-img01/2019/08/27/16/014c9ea6e7bc428a3614b5792eb9531b63.jpg?imageView2/2/w/1150/h/450');";
$sql = "INSERT INTO slidelist(url)
VALUES ('https://img11.static.yhbimg.com/yhb-img01/2019/08/27/16/01dd122374d1066a453c82c83834af8a83.jpg?imageView2/2/w/1150/h/450');";
$sql = "INSERT INTO slidelist(url)
VALUES ('https://img11.static.yhbimg.com/yhb-img01/2019/08/27/16/012417a0c119fa0600e0ed6434bdbd64da.jpg?imageView2/2/w/1150/h/450');";
$sql = "INSERT INTO slidelist(url)
VALUES ('https://img10.static.yhbimg.com/yhb-img01/2019/08/27/16/011f705f73363df4d126c2d5a08941d45f.jpg?imageView2/2/w/1150/h/450');";
$sql = "INSERT INTO slidelist(url)
VALUES ('https://img10.static.yhbimg.com/yhb-img01/2019/08/27/16/01533088868dfb71bbd13482204cf8ace8.jpg?imageView2/2/w/1150/h/450');";
if ($conn->multi_query($sql) === TRUE) {
    echo "新记录插入成功";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
 
$conn->close();
?>