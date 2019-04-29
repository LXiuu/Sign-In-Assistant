 <?php

	include("conn.php");
	$sql = "select *from suggestion order by suggest_time desc";
	$result = mysqli_query($conn, $sql);

	class SuggestList{
		public $nickName;
		public $userImg;
		public $content;
		public $suggestTime;
		}
		$data = array();
		if (mysqli_num_rows($result) > 0) {
		while($row = mysqli_fetch_assoc($result)) {
			$suggestList=new SuggestList();
			$suggestList->nickName=$row["nick"];
			$suggestList->userImg=$row["user_img"];
			$suggestList->content=$row["suggest_content"];
			$suggestList->suggestTime=$row["suggest_time"];	
		    $data[] = $suggestList;
			
		}
		echo json_encode($data,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);//将请求结果转换为json格式
		}else{
			echo json_encode("null");
		}

　　?>