 <?php

	$lessonid=$_POST["lessonid"];
	include("conn.php");

	$sql = "select *from addLesson where lessonid =$lessonid";
	$result= mysqli_query($conn, $sql);

class qList{
	public $openid;
	public $name;
	public $xuehao;
	public $qTime;
		}
	$data = array();
if (mysqli_num_rows($result) > 0) {
	while($row = mysqli_fetch_assoc($result)) {
	$openid=json_encode($row["openid"]);
	$sql1= "select *from student where openid =$openid order by xuehao asc";
	$result1= mysqli_query($conn, $sql1);
	$row1 = mysqli_fetch_assoc($result1);

	$qlist=new qList();
	$qlist->openid=$row1["openid"];
	$qlist->name=$row1["name"];
	$qlist->xuehao=$row1["xuehao"];
	$qlist->qTime=date("Y-m-d h:i:s");
	$data[] = $qlist;
		}
		echo json_encode($data,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
		}
　　?>