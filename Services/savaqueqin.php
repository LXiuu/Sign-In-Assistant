<?php  
  	include("conn.php");

  	$lessonid = $_POST['lessonid']; 

  	$sql = "select keyid from lessonKey where lessonid = '$lessonid' order by time desc limit 1";  
    $result = mysqli_query($conn, $sql);
	$row = mysqli_fetch_assoc($result);
	$keyid=$row['keyid'];

  	$openid= $_POST['openid'];
  	$xuehao = $_POST['xuehao'];
  	$name= $_POST['name'];

    $sql1 = "insert into queqin values ('$keyid','$lessonid','$openid','$xuehao','$name',Now())";  
    if(mysqli_query($conn, $sql1)){
      echo 'true';
    }else{
      echo 'false';
    } 	
?>  