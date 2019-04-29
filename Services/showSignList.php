 <?php

	$lessonid=$_POST["lessonid"];
	include("conn.php");
	$sql = "select *from lessonKey where lessonid =$lessonid order by keyid desc limit 1";
	$result = mysqli_query($conn, $sql);
	$data = mysqli_fetch_assoc($result);
	$keyid=$data[keyid];

	$sql1 = "select *from signList where lessonId =$lessonid and keyid=$keyid order by xuehao";
	$result1 = mysqli_query($conn, $sql1);
	
class SignList{
					public $name;
					public $xuehao;
					public $signTime;
					}
			$data = array();
			if (mysqli_num_rows($result1) > 0) {
			while($row = mysqli_fetch_assoc($result1)) {
				$signList=new SignList();
				$signList->name=$row["name"];
				$signList->xuehao=$row["xuehao"];
				$signList->signTime=$row["signTime"];
				
				$data[] = $signList;
			
				}
				echo json_encode($data,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);//将请求结果转换为json格式
				}

　　?>