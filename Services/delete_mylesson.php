<?php  
  	include("conn.php");

  	$lessonid = $_POST['lessonid']; 
  	$openid = $_POST['userid'];

    $sql = "delete from addLesson where lessonid = '$lessonid' and openid='$openid'"; 
    //mysqli_query($conn, $sql);
    //echo $lessonid.$openid;
    //echo json_encode($result,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
    if(mysqli_query($conn, $sql)){
      echo 'true';
    }else{
      echo 'false';
    }

?>  