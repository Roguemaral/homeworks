$(document).ready(function() {
    //页面首次加载时，获取类别为"推荐"的内容
    $.post(
        "news.php",
        function(data) {
            $("#hiddenews").empty();
            var dataCod = JSON.parse(data);
            console.log(dataObj);

            var str = '';
            for (var i = 0; i < dataCod.result.length; i++) {
                $('#hiddenews').append('<tr id="hiddenews">' +
                    '<td class="id">'+dataCod.result[i].newsid+'</td>'+
                    '<td class="name">' + dataCod.result[i].newstitle + '</td>' +
                    '<td class="img">' + dataCod.result[i].newsimg + '</td>' +
                    '<td><label class="button" action="delete.php">' + 删除 + '</label></td>' +  
                    '</tr>');
            }
        }
    )