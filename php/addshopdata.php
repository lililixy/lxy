<?php
header("Content-Type:text/html;charset=utf-8");
require("conn.php");
$sql = "INSERT INTO yoholist(url,title,price,urls)
VALUES ('https://img10.static.yhbimg.com/goodsimg/2019/08/26/14/0128d031484b21b8c288706a4d5166fc82.jpg?imageMogr2/thumbnail/280x373/background/d2hpdGU=/position/center/quality/90','Drew House Lifestyle LOGO印花短袖TEE','299','https://img10.static.yhbimg.com/goodsimg/2019/08/26/18/01f84c2fe65f8948473ca3002c966ca943.jpg?imageMogr2/thumbnail/75x100/background/d2hpdGU=/position/center/quality/80,https://img12.static.yhbimg.com/goodsimg/2019/08/26/14/02058a8b4fb00bc06d2ffe39ff5ab5ba1e.jpg?imageMogr2/thumbnail/75x100/background/d2hpdGU=/position/center/quality/80');";
$sql = "INSERT INTO yoholist(url,title,price,urls)
VALUES ('https://img11.static.yhbimg.com/goodsimg/2019/07/29/09/0154f30334ea2895fa3715401fc557735c.jpg?imageMogr2/thumbnail/280x373/background/d2hpdGU=/position/center/quality/90','MADNESS WANTED PRINT TEE','459','https://img10.static.yhbimg.com/goodsimg/2019/07/29/09/0154f30334ea2895fa3715401fc557735c.jpg?imageMogr2/thumbnail/75x100/background/d2hpdGU=/position/center/quality/80,https://img12.static.yhbimg.com/goodsimg/2019/07/29/09/02ac9e94c2991b991a000ac0c03f339bae.jpg?imageMogr2/thumbnail/75x100/background/d2hpdGU=/position/center/quality/80');";
$sql = "INSERT INTO yoholist(url,title,price,urls)
VALUES ('https://img11.static.yhbimg.com/goodsimg/2019/08/14/12/01358649e07f354741c2b384f20603303d.jpg?imageMogr2/thumbnail/280x373/background/d2hpdGU=/position/center/quality/90','Dickies 多色LOGO字母印花短袖T恤','259','https://img10.static.yhbimg.com/goodsimg/2019/08/14/12/01358649e07f354741c2b384f20603303d.jpg?imageMogr2/thumbnail/75x100/background/d2hpdGU=/position/center/quality/80,https://img10.static.yhbimg.com/goodsimg/2019/07/30/14/01e43e842a8bd583b008c8ef6266bfd3b2.jpg?imageMogr2/thumbnail/75x100/background/d2hpdGU=/position/center/quality/80');";
$sql = "INSERT INTO yoholist(url,title,price,urls)
VALUES ('https://img12.static.yhbimg.com/goodsimg/2019/04/22/15/0239b27ca5e7644f2e2bc3741b4e9ae3ec.jpg?imageMogr2/thumbnail/280x373/background/d2hpdGU=/position/center/quality/90','黑鲸 字母印花短袖T恤','58','https://img12.static.yhbimg.com/goodsimg/2019/04/22/15/0239b27ca5e7644f2e2bc3741b4e9ae3ec.jpg?imageMogr2/thumbnail/75x100/background/d2hpdGU=/position/center/quality/80,https://img11.static.yhbimg.com/goodsimg/2019/04/22/15/010299cee20494d6ac8d30e17ac92c5c0d.jpg?imageMogr2/thumbnail/75x100/background/d2hpdGU=/position/center/quality/80');";
$sql = "INSERT INTO yoholist(url,title,price,urls)
VALUES ('https://img12.static.yhbimg.com/goodsimg/2019/08/13/15/027a91c5ec6d8bc1cd4b194d86776ca21b.jpg?imageMogr2/thumbnail/280x373/background/d2hpdGU=/position/center/quality/90','Luxury&show奢屯 个性印花短袖T恤','139','https://img13.static.yhbimg.com/goodsimg/2019/08/13/15/027a91c5ec6d8bc1cd4b194d86776ca21b.jpg?imageMogr2/thumbnail/75x100/background/d2hpdGU=/position/center/quality/80,https://img12.static.yhbimg.com/goodsimg/2019/08/13/15/023b2503b5afcad9f84ba0c1a0a146478d.jpg?imageMogr2/thumbnail/75x100/background/d2hpdGU=/position/center/quality/80');";
$sql = "INSERT INTO yoholist(url,title,price,urls)
VALUES ('https://img12.static.yhbimg.com/goodsimg/2019/04/18/18/021e2f7d99cb9ba9a539f79eabe8b164da.jpg?imageMogr2/thumbnail/280x373/background/d2hpdGU=/position/center/quality/90','TEEBACCO 印花短袖T恤','69','https://img13.static.yhbimg.com/goodsimg/2019/03/27/15/029ec10091705cd19f4b66ee27d26e1d23.jpg?imageMogr2/thumbnail/420x560/background/d2hpdGU=/position/center/quality/80,https://img12.static.yhbimg.com/goodsimg/2019/04/18/18/021e2f7d99cb9ba9a539f79eabe8b164da.jpg?imageMogr2/thumbnail/420x560/background/d2hpdGU=/position/center/quality/80');";
$sql = "INSERT INTO yoholist(url,title,price,urls)
VALUES ('https://img13.static.yhbimg.com/goodsimg/2019/08/07/10/02bf4120e4506f0e575246205e1894c1b4.jpg?imageMogr2/thumbnail/280x373/background/d2hpdGU=/position/center/quality/90','FYP 19AW 复古口袋格子长袖衬衫','299','https://img13.static.yhbimg.com/goodsimg/2019/08/07/10/02bf4120e4506f0e575246205e1894c1b4.jpg?imageMogr2/thumbnail/420x560/background/d2hpdGU=/position/center/quality/80,https://img10.static.yhbimg.com/goodsimg/2019/08/07/10/0143eb42d873297dbc503cdb2d254d4666.jpg?imageMogr2/thumbnail/420x560/background/d2hpdGU=/position/center/quality/80');";
$sql = "INSERT INTO yoholist(url,title,price,urls)
VALUES ('https://img10.static.yhbimg.com/goodsimg/2018/07/10/11/01f5c13413f1fb60a214eab749f35b94f7.jpg?imageMogr2/thumbnail/280x375/background/d2hpdGU=/position/center/quality/80','MO&Co. 玫瑰印花绑带连体裤','749','https://img11.static.yhbimg.com/goodsimg/2018/07/10/11/01f5c13413f1fb60a214eab749f35b94f7.jpg?imageMogr2/thumbnail/750x1000/background/d2hpdGU=/position/center/quality/80,https://img11.static.yhbimg.com/goodsimg/2018/07/10/11/01c5f61f6011d13c3c7b50f261db11ba43.jpg?imageMogr2/thumbnail/750x1000/background/d2hpdGU=/position/center/quality/80,https://img11.static.yhbimg.com/goodsimg/2018/07/10/11/019b991b0b063de5e7549fae49d6d17d19.jpg?imageMogr2/thumbnail/750x1000/background/d2hpdGU=/position/center/quality/80');";
$sql = "INSERT INTO yoholist(url,title,price,urls)
VALUES ('https://img12.static.yhbimg.com/goodsimg/2019/01/29/18/02fdd0f9966bd580a9c3e00c343f9b143a.jpg?imageMogr2/thumbnail/280x375/background/d2hpdGU=/position/center/quality/80','MO&Co.  爱丽丝印花圆领短袖T恤','594','https://img12.static.yhbimg.com/goodsimg/2019/01/29/18/02fdd0f9966bd580a9c3e00c343f9b143a.jpg?imageMogr2/thumbnail/750x1000/background/d2hpdGU=/position/center/quality/80,https://img13.static.yhbimg.com/goodsimg/2019/01/29/18/02bba205c09c8991216c39ac83fc0a5f47.jpg?imageMogr2/thumbnail/750x1000/background/d2hpdGU=/position/center/quality/80,https://img13.static.yhbimg.com/goodsimg/2019/01/29/18/0261f9db99b1f6890ac7e288194a773eb3.jpg?imageMogr2/thumbnail/750x1000/background/d2hpdGU=/position/center/quality/80');";
$sql = "INSERT INTO yoholist(url,title,price,urls)
VALUES ('https://img12.static.yhbimg.com/goodsimg/2019/08/15/15/0259e48f794a1d8f95859f2aba9673848b.jpg?imageMogr2/thumbnail/280x373/background/d2hpdGU=/position/center/quality/90','Genanx OVERSIZE满版印花太空棉多色宽松版卫衣','297','https://img11.static.yhbimg.com/goodsimg/2019/08/14/15/017caf4f2a686b918abfac9bd100c8a402.jpg?imageMogr2/thumbnail/420x560/background/d2hpdGU=/position/center/quality/80,https://img12.static.yhbimg.com/goodsimg/2019/08/14/15/02ecdf382e0e054acbef2594f668862ef1.jpg?imageMogr2/thumbnail/420x560/background/d2hpdGU=/position/center/quality/80');";

if ($conn->multi_query($sql) === TRUE) {
    echo "新记录插入成功";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
} 
$conn->close();
?>