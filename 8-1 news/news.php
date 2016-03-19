<?php
//header("Content-type: application/json; charset=utf-8"); 
$con = mysql_connect("localhost","root","");
  if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }else{
  	//数据在前台显示出来
  		mysql_select_db("phplesson", $con);
  		if (isset($_POST['type'])) {
  			$sql = "select * from news where newstype = '".$_POST['type']."'";
  		}else{
  			$sql = "select * from news";
  		}
  		mysql_query("set names 'utf8'");
		$result = mysql_query($sql,$con);
		$arr = array();
		while($row = mysql_fetch_array($result))
		  {
				array_push($arr,array("newstitle"=>$row['newstitle'],"newsimg"=>$row['newsimg']));
		  }
		  $result = array("errcode"=>0,"result"=>$arr);
		  echo json_encode($result);
  }	
  mysql_close($con);
?>