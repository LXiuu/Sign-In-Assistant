<?php  
  	include("conn.php");

  	$lessonid = $_POST['lessonid']; 

  	$sql = "select * from lessonKey where lessonid = '$lessonid' and state='false' order by time";  
    $result = mysqli_query($conn, $sql);

    class Record{

        public $lessonid;
        public $keyid;
        public $time;
    
    }
    $data = array();
    if (mysqli_num_rows($result) > 0) {
        while($row = mysqli_fetch_assoc($result)) {
            $record=new Record();

            $record->lessonid=$row["lessonid"];
            $record->keyid=$row["keyid"];
            $record->time=$row["time"];
           
            $data[] = $record;
            
            }
            echo json_encode($data,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);//将请求结果转换为json格式
          }else{
		echo "null";
	}
 	
?>  