<?php  
  	include("conn.php");

  	$lessonid= $_POST['id']; 


    $sql = "select * from lessonKey where lessonid= '$lessonid' order by time desc limit 1";  
    $result = mysqli_query($conn, $sql);
	if (mysqli_num_rows($result) > 0) {
		while($row = mysqli_fetch_assoc($result)) {
			echo json_encode($row,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);//将请求结果转换为json格式
			}
		}

?>  