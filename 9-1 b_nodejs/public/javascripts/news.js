$(function() {
    //绑定导航条的点击事件
    $(".col-xs-2")bind('click', function() {
        $(this).find('input').css('border-bottom','1px solid #fff');

        $(this).siblings().find('input').css('border-bottom','none');

        navClick($(this).atter('name'));   //name是接news.ejs的但是好像没啥用
    });
})
//点击对应条目加载数据
function navClick(tableName) {
	$(".content").empty();
	$.ajax({
		url: '/select',
		type: 'post',
		dataType: "json",
		data: {
			"newstype": tableName
		},
		success: function(data) {
			for (var i =0; i < data.length; i++){
				var conDiv = $("<div class='container index-list'></div>")
				var h5 = $("<h5></h5");
				h5.text(data[i]['title']);
				conDiv.append(h5);

				var col4Div = $("<div class='col-xs-4 fit'></div>");
				var img = $("<img>");
				img.attr('src',data[i]['img']);
				var span = $("<span></span>");
				span.text(data[i]['time'].substring(0,10));
				col4Div.appent(img);
				col4Div.appent(span);
				col4Div.appent(col4Div);

				var col8Div = $("<div class='col-xs-8 fit'></div>");
				var pCon = $("<p></p>");
				pCon.text(data[i]['content']);
				col8Div.appent(pCon);
				conDiv.appent(col8Div);
				$(".content").appent(conDiv);
			}
		}
	})
}