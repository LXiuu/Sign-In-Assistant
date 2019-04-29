<?php
	$hostname_conn = "localhost";
	$database_conn = "xdq";
	$username_conn = "你的数据库用户名";//没改的话一般时root
	$password_conn = "你的数据库密码";
	//连接MYSQL数据库
	$conn = mysqli_connect($hostname_conn, $username_conn, $password_conn,$database_conn)or trigger_error(mysqli_error(),E_USER_ERROR);
	mysqli_query($conn,"set names 'utf8mb4'");
?>
