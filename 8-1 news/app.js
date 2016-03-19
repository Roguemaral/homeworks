$(document).ready(function() {
    //页面首次加载时，获取类别为"推荐"的内容
    $.post(
        "news.php",
        function(data) {
            $("#realcontent").empty();
            var dataObj = JSON.parse(data);
            console.log(dataObj);

            var str = '';
            for (var i = 0; i < dataObj.result.length; i++) {
                $('#realcontent').append('<div class="row">' +
                    '<img src="background/img/' + dataObj.result[i].newsimg + '" width="40">' +
                    '<p>' + dataObj.result[i].newstitle + '</p>' +
                    '</div>');
            }
        }
    )


    //$("#realcontent").load("1recommended.html");
    $("#tabsecond li span").each(function(index) {
        $(this).click(function() {
            $("#tabsecond li span").removeClass("cur");
            var type = $(this).parent().attr('data');
            console.log(type);
            $(this).addClass("cur");
            var type = 
            $("#realcontent").append(function() {
                $.ajax({
                    url: 'news.php',
                    data: {
                        type: type
                    },
                    dataType: "json",
                    type: 'post',
                    success: function(data) {
                        $("#realcontent").empty();
                        var dataObj = data;
                        var str = '';
                    for (var i = 0; i < dataObj.result.length; i++) {
                        $('#realcontent').append('<div class="row">' +
                            '<img src="background/img/' + dataObj.result[i].newsimg + '" width="40">' +
                            '<p>' + dataObj.result[i].newstitle + '</p>' +
                            '</div>');
                            }
                    }
                });
            })
        })
    })
})
