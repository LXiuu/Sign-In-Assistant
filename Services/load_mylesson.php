<?php  
    include("conn.php");

    $userid = $_POST['userid']; 

    $sql = "select * from addLesson where openid = '$userid'";  
    $result = mysqli_query($conn, $sql); 


    class Lesson{

        public $lessonid;
        public $slesson;
        public $sclass;
        public $setTime;
    
    }
    $data = array();
    if (mysqli_num_rows($result) > 0) {
        while($row = mysqli_fetch_assoc($result)) {
            $lesson=new Lesson();

            $lesson->lessonid=$row["lessonid"];
            $lesson->slesson=$row["slesson"];
            $lesson->sclass=$row["sclass"];
            $lesson->setTime=$row["setTime"];
            
            $data[] = $lesson;
            
            }
            echo json_encode($data,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);//将请求结果转换为json格式
            }else {
              echo "null" ; 
            }
 
?>  