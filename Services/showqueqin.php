<?php  
  	include("conn.php");

  	$keyid = $_POST['keyid']; 

  	$sql = "select * from queqin where keyid = '$keyid'";  
    $result = mysqli_query($conn, $sql);

	class qList{
	public $openid;
	public $xuehao;
	public $name;
	public $qTime;
		}
	$data = array();
if (mysqli_num_rows($result) > 0) {
	while($row = mysqli_fetch_assoc($result)) {

	$qlist=new qList();
	$qlist->openid=$row["openid"];
	$qlist->name=$row["name"];
	$qlist->xuehao=$row["xuehao"];
	$qlist->qTime=$row["qtime"];
	$data[] = $qlist;
		}
		echo json_encode($data,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
		}else{
		echo "null";
	}

  	
?>  