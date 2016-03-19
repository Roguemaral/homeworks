
<?php
header("Content-type: application/json; charset=utf-8"); 
$con = mysql_connect("localhost","root","");
  if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }else{
  		mysql_select_db("phplesson", $con);
  		$newstitle = $_REQUEST['newstitle'];
  		$newsimg = $_REQUEST['newsimg'];
  		$newscontent = $_REQUEST['newscontent'];
  		$addtime = $_REQUEST['addtime'];
  		$sql ="INSERT INTO `news`(`newstitle`, `newsimg`, `newscontent`, `addtime`) VALUES ('".$newstitle."','".$newsimg."','".$newscontent."','".$addtime."')";
      
   		mysql_query("set names 'utf8'");
  		$result = mysql_query($sql,$con);
  		if (!$result)
  		{
          die('Error: ' . mysql_error());
    		}else{
             echo "update success";
    		}
  }	
  mysql_close($con);
?>