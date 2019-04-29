<?php  
    include("conn.php");

    $userid = $_POST['userid']; 

    $sql = "select * from student where openid = '$userid'";  
    $result = mysqli_query($conn, $sql); 

    if (mysqli_num_rows($result) > 0) {
        echo "true";
    }else {
         echo "false"; 
        }
 
?>  