<?php
    include("conn.php");

	$userid=$_POST["userid"];

	$sql = "select  *from lesson where openid='".$userid."' order by setTime desc";

 	mysqli_query($conn, "set names 'utf8mb4'");
	$result = mysqli_query($conn, $sql);
	class Article{

		public $lessonId;
		public $slesson;
		public $sclass;
		public $setTime;
	
	}
	$data = array();
	if (mysqli_num_rows($result) > 0) {
		while($row = mysqli_fetch_assoc($result)) {
			$article=new Article();

			$article->lessonId=$row["lessonId"];
			$article->slesson=$row["slesson"];
			$article->sclass=$row["sclass"];
			$article->setTime=$row["setTime"];
			
			$data[] = $article;
			
			}
			echo json_encode($data,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);//将请求结果转换为json格式
			}
　　?>