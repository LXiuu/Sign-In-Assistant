<?php  
    include("conn.php");

    $userid = $_POST['userid']; 
    $sname = $_POST['sname']; 
    $snum = $_POST['snum'];
    $slesson = $_POST['slesson']; 
    $sclass = $_POST['sclass'];


    if (!empty($sname&&$snum)) {  
        $sql1 = "insert into student values ('$userid','$sname','$snum',0)";  
        if(mysqli_query($conn, $sql1)){
        	echo json_encode("student_success");
        }else{
        	echo $sql1;
        }
     }elseif(!empty($slesson&&$sclass)){
      $sql2 = "insert into lesson(openid,slesson,sclass,setTime) values ('$userid','$slesson','$sclass',Now())";  
       if(mysqli_query($conn, $sql2)){
           echo json_encode("lesson_success");  
         }else{
         	echo  $sql2;
         }
     }else{
     	echo "fail";
     }
?>  