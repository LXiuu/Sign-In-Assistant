<?php  
    include("conn.php");

    $userid = $_POST['userid']; 

    $sql = "select * from student where openid = '$userid'";  
    $result = mysqli_query($conn, $sql); 


    class student{

        public $name;
        public $xuehao;
        public $ischange;
    
    }
    $data = array();
    if (mysqli_num_rows($result) > 0) {
        while($row = mysqli_fetch_assoc($result)) {
            $student=new student();

            $student->name=$row["name"];
            $student->xuehao=$row["xuehao"];
            $student->ischange=$row["ischange"];
            $data[] = $student;

            }
            echo json_encode($data,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);//将请求结果转换为json格式
            }else {
              echo "null" ; 
            }
 
?>  