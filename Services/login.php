<?php  
  	include("conn.php");
  	
    $code = $_GET['code'];//小程序传来的code值  
    $url = 'https://api.weixin.qq.com/sns/jscode2session?appid=wx695d526411eeaf32&secret=7e665609d2219101fe43647f4ef36329&js_code=' . $code . '&grant_type=authorization_code';  

	$ch = curl_init(); 
	$timeout = 5; 
	curl_setopt($ch, CURLOPT_URL, $url); 
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 
	curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);  
	$info = curl_exec($ch); 
	curl_close($ch); 

    $json = json_decode($info);//对json数据解码  
    $arr = get_object_vars($json);  
    $openid = $arr['openid'];  
    $arr = json_encode($arr);  
    echo $openid;
  
?>  