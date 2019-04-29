<?php  
  	include("conn.php");

  	$lessonid = $_POST['lessonid']; 


    $sql = "delete from lesson where lessonId = '$lessonid'";  
    $sql1 = "delete from queqin where lessonid = '$lessonid'"; 
    $sql2 = "delete from signList where lessonId = '$lessonid'"; 
    //mysqli_query($conn, $sql);
    //mysqli_query($conn, $sql1);
    //mysqli_query($conn, $sql2);
    //echo $lessonid;
    //echo json_encode($result,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
    if(mysqli_query($conn, $sql)&&mysqli_query($conn, $sql1)&&mysqli_query($conn, $sql2)){
      echo 'true';
    }else{
      echo 'false';
    }

?>  