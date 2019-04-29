<?php  
    include("conn.php");

    $lessonid = $_POST['id']; 

    $sql = "select state from lessonKey where lessonid = '$lessonid' order by time desc";  
    $result = mysqli_query($conn, $sql);  
    $result = mysqli_fetch_assoc($result);

    echo json_encode($result);


?>  