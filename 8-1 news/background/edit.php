<?php

//header("Content-type:application/json;charset=utf-8");
$newsid = $_REQUEST['newsid'];
$newstitle = $_REQUEST['titlechange'];
$newsimg= $_REQUEST['imgchange'];
$newscontent = $_REQUEST['contentchange'];
$addtime = $_REQUEST['timechange'];

$con = mysql_connect("localhost","root","");
if(!$con){
  	die('Could not connect: ' . mysql_error());
  	}else{
	  	mysql_select_db("phplesson", $con);

		$sql="UPDATE `news` SET `newstitle`='$newstitle',`newsimg`='$newsimg',`newscontent`='$newscontent',`addtime`='$addtime' WHERE `newsid`=$newsid ";//传入数据库
		mysql_query("set names 'utf8'");//解决乱码现象
		$result = mysql_query($sql,$con);
		if(!$result){
			die('Error:'.mysql_error());
		}else{
			echo json_encode(array('msg' =>'更新成功'),JSON_UNESCAPED_UNICODE);//将数据回传
		}
  	}
mysql_close($con);
?>

<!DOCTYPE html>
<html>
<head>
  	<meta charset="utf-8"/>
	<title>编辑</title>

</head>
<body>
	<form enctype="multipart/form-data">    <!-- 加入一个数据传入类型 -->
	<p>
		<label for="titlechange">新闻标题:</label>
		<input type="text" id="titlechange" name="titlechange"></input>
	</p>
	<p>
		<label for="imgchange" style="float: left;">图片地址:</label>
		<input type="file" id="imgchange" name="imgchange"></input>
	</p>
	<p>
		<label for="contentchange">新闻内容:</label>
		<textarea id="contentchange" name="contentchange"></textarea>
	</p>
	<p>
		<label for="timechange">新闻时间:</label>
		<input type="date" id="timechange" name="timechange"></input>
	</p>
	<p>
		<input type="submit" value="确认修改"></input>
		<input type="reset" value="返回界面"></input>
	</p>
	</form>


</body>
</html>