<?php  
    include("conn.php");

    $userid = $_POST['userid']; 
    $lessonid = $_POST['id']; 

 
    $sql = "select * from student where openid = '$userid'";  
    $result = mysqli_query($conn, $sql);  
    $data = mysqli_fetch_assoc($result);

    $sql1 = "select * from lessonKey where lessonid = '$lessonid' order by keyid desc limit 1";  
    $result1 = mysqli_query($conn, $sql1);  
    $data1 = mysqli_fetch_assoc($result1);

    //echo json_encode($data[name],JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);

    $sql2 = "insert into signList values ('$data1[keyid]','$lessonid','$userid','$data[name]','$data[xuehao]',Now())";  
    if(mysqli_query($conn, $sql2)){
      echo 'true';
    }else{
      echo 'false';
    }
        
?>  