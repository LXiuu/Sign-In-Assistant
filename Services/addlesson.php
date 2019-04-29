<?php  
    include("conn.php");

    $userid = $_POST['userid']; 
    $lessonid = $_POST['lessonid'];
$slesson = $_POST['slesson'];
$sclass = $_POST['sclass']; 
$setTime = $_POST['setTime'];

    $sql = "select * from addLesson where lessonid = '$lessonid' and openid = '$userid'";  
    $result = mysqli_query($conn, $sql);  
    $data = mysqli_fetch_assoc($result);

    //echo json_encode($data[name],JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
    if(empty($data)){
        $sql1 = "insert into addLesson values ('$userid','$lessonid','$slesson','$sclass','$setTime')";  
        mysqli_query($conn, $sql1);
    }else{
        echo json_encode("yes");
    }

        
?>  