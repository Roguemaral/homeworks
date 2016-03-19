$(document).ready(function() {
    //全部新闻
    $.ajax({
        cache: true,
        url: '/select',
        type: "post",
        async: false,
        success: function(data) {
            console.log("返回数据");
            var html = "";
            $.each(data, function(valueIndex, value) {
                var time = value.addtime.substring(0, 10);
                html += '<tr class="all-tr">';
                html += '<td class="all-id">' + value.newsid + '</td>';
                html += '<td>' + value.newstitle + '</td>';
                html += '<td>' + value.newstype + '</td>';
                html += '<td>' + value.newsimg + '</td>';
                html += '<td>' + value.newscontent + '</td>';
                html += '<td>' + time + '</td>';
                html += '<input class="all-dele" type="submit"value="删除">';
                html += '<input class="all-updata" type="submit" value="更新">';
                html += '</td>';
                html += '</tr>';
            });
            $("#thead").after(html);
        },
        error: function() {
            console.log("数据获取失败");
        }
    });
    //删除新闻
    $(".all-dele").click(function(event) {
        var id = $(this).parent().siblings(".all-id").html();
        $.ajax({
            cache: true,
            url: '/delete',
            data: {
                "id": id
            },
            type: "get",
            async: false,
            success: function(data) {
                $('.dele-info').show();
                setTimeout(function() {
                    window.location.reload();
                }, 2000);
            },
            error: function() {
                console.log("删除数据失败");
            }
        });
    });
    //查找新闻
    $(".all-updata").click(function(event) {
        var id = $(this).parent().siblings(".all-id").html();
        $.ajax({
            cache: true,
            url: '/select',
            data: {
                "id": id
            },
            type: "get",
            async: false,
            success: function(data) {
                $(".update-news").show();
                $.each(data, function(valueIndex, value) {
                    var time = value.addtime.substring(0, 10);
                    $('#update-id').val(value.newsid);
                    $('#update-title').val(value.newstitle);
                    $('#update-type').val(value.newstype);
                    $('#update-date').val(time);
                    $('#update-content').val(value.newscontent);
                });
                console.log("查找成功");
            },
            error: function() {
                console.log("查找失败");
            }
        });
    });
    //更改新闻
    $("#updatebtn").click(function() {
        $.ajax({
            cache: true,
            url: '/update',
            data: $('#update').serialize(),
            type: "post",
            async: false,
            success: function(data) {
                console.log("更新成功");
                $('.updata-info').show();
                setTimeout(function() {
                    window.location.reload();
                }, 2000);
            },
            error: function() {
                console.log("更新失败");
            }
        });
    });
    //更新新闻取消更改
    $("#updatereset").click(function() {
        $('.update-news').hide();
    });
    //点击全部新闻时的点击事件
    $("#all").click(function() {
        $("#all").css("color", "#ff3333").siblings().css("color", " #636363");
        $(".all-news").show().siblings().hide();
    });
    //点击发布新闻时的点击事件
    $("#addnews").click(function() {
        $("#addnews").css("color", "#ff3333").siblings().css("color", " #636363");
        $(".add-news").show().siblings().hide();
    });
    //添加新闻！
    $("#addbtn").click(function(event) {
        //判断新闻标题是否输入
        if ($("#addnewsheader").val() == "") {
            $("#addinfo").show();
            setTimeout(function() {
                $("#addinfo").hide(200);
            }, 3000);
            return false;

        };
        //判断新闻类型是否输入
        var addtype = $("#addtype").val();
        if (addtype == "recom" || addtype == "baijia" || addtype == "local" || addtype == "img" || addtype == "fun" || addtype == "society") {


        } else {
            $("#addinfo-2").show();
            setTimeout(function() {
                $("#addinfo-2").hide(200);
            }, 3000);
            return false;
        };
        //判断新闻内容是否输入
        if ($("#addtext").val() == "") {
            $("#addinfo-3").show();
            setTimeout(function() {
                $("#addinfo-3").hide(200);
            }, 3000);
            return false;
        };
        event.preventDefault();
        var data = new FormData($("#add")[0]);
        $.ajax({
            cache: false,
            url: '/insert',
            data: data,
            // dataType: 'json',
            type: "post",
            async: false,
            contentType: false,
            processData: false,
            success: function(data) {
                $('.addinfop').html('加载完成').addClass('addinfop2');
                setTimeout(function() {
                    $('.addinfop').html('待命,上一条新闻发布完成').removeClass('addinfop2');
                }, 3000);
                return false;
            },
            error: function() {
                console.log("插入到数据库失败");
            }
        });
    });
    // end 
    //全部新闻点击时刷新一次，加载新的数据
    $("#all").click(function() {
        window.location.reload();

    });
});

