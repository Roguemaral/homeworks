
<?php
header("Content-type: application/json; charset=utf-8");
//$id = $_REQUEST['id'];
$con = mysql_connect("localhost","root","");
if (!$con) {
  	die('Could not connect: ' . mysql_error());
	}else{
		mysql_select_db("phplesson", $con);
		$id = $_GET['newsid'];
		//echo $id;exit

		$sql="DELETE FROM `news` WHERE `newsid`=$id";//删除数据库
		//mysql_query("set names 'utf8'");//解决乱码现象
		$result = mysql_query($sql,$con);
		if(!$result){
			die('Error:'.mysql_error());
		}else{
			echo json_encode(array('msg' =>'delete successful'));//将数据回传
		}
	}
?>