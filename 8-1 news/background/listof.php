<?php
$con = mysql_connect("localhost","root","");
mysql_select_db("phplesson", $con);
$arr = [];
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
        array_push($arr,array("newsid"=>$row['newsid'],"newstitle"=>$row['newstitle'],"newsimg"=>$row['newsimg']));
      }
?>


<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"/>
  <title>新闻列表</title>
  <style type="text/css">
  <script type="text/javascript" src="js/jquery-2.1.4.min.js"></script>
  <script type="text/javascript" src="js/listof.js"></script>
	table.dataintable {
    margin-top: 10px;
    border-collapse: collapse;
    border: 1px solid #aaa;
    width: 100%;
   }
   table.dataintable th {
    vertical-align: baseline;
    padding: 5px 62px 5px 6px;
    background-color: #d5d5d5;
    border: 1px solid #aaa;
    text-align: left;
	}
	table.dataintable td {
    vertical-align: text-top;
    padding: 6px 15px 6px 6px;
    background-color: #efefef;
    border: 1px solid #aaa;
	}
	table.dataintable td .button{
	cursor: pointer;
    background-color: #FF7987;
    color: #ffffff;
    padding: 5px;
    margin-right: 10px;
    border: 1px solid #6DFFF0;
	}
  </style>
</head>
<body>

<!-- <form> -->
	<table class="dataintable">
		<tbody>
    <tr>
			<th>新闻编号</th>
			<th>新闻标题</th>
			<th>新闻图片</th>
			<th>新闻操作</th>
		</tr>
  <?php
  foreach($arr as $key=>$value){
    //var_dump($value);continue;

  ?>

		<tr>
			<td><?php echo $value['newsid'] ?></td>
			<td><?php echo $value['newstitle'] ?></td>
			<td><?php echo $value['newsimg'] ?></td>
			<td>
          <a href="edit.php?newsid=<?php echo $value['newsid'] ?>">编辑</a>   
          <a href="delete.php?newsid=<?php echo $value['newsid'] ?>">删除</a>  
      </td>
		</tr>
  <?php
  }
  ?>
		</tbody>
	</table>
	<div class="warn">
<!-- </form> -->

</body>
</html>