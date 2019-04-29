<?php
    include("conn.php");
        
        $lessonId=$_POST["id"];
        $lessonKey=$_POST["signKey"];

        $sql= "insert into lessonKey(lessonid,lessonKey,state,time)values ('$lessonId','$lessonKey','true',Now())"; 
    if(mysqli_query($conn, $sql)){
      echo 'true';
    }else{
      echo 'false';
    }

　　?>