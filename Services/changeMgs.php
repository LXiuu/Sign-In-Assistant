<?php  
    include("conn.php");

    $userid = $_POST['userid']; 
    $newname = $_POST['newname']; 
    $newxuehao = $_POST['newxuehao']; 

    $sql = "update student set name='$newname',xuehao='$newxuehao',ischange=1 where openid = '$userid'";  

    if (mysqli_query($conn, $sql)) {
       echo "true";
    }else {
         echo "false" ; 
    }
 
?>  