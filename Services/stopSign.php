<?php
    include("conn.php");

    $lessonId=$_POST["id"];
    $lessonKey=$_POST["signKey"];

    $sql= "update lessonKey set state='false' where lessonid=$lessonId"; 
    mysqli_query($conn, $sql);

    //echo "插入成功";

　　?>