$(document).ready(function(){
	// 用户名下拉菜单收回
    $(".user-name").hover(function(){
    	$("#s_user_name_menu").slideDown();
    });
    $("#s_user_name_menu").mouseleave(function(){
    	$("#s_user_name_menu").slideUp();
    });

    //设置专区
    $(".setting-text").hover(function(){
    	$("#s_user_setting_menu").slideDown();
    });
    $("#s_user_setting_menu").mouseleave(function(){
    	$("#s_user_setting_menu").slideUp();
    });
    
    //更多产品专区
    $(".s_bri").hover(function(){
    	$(".s_bdbriimg").slideDown();
    });
    $(".s_bdbriimg").mouseleave(function(){
    	$(".s_bdbriimg").slideUp();
    });

    $(".s-menu-item").on("click", function () {
        $(".current").removeClass("current");
        $(this).addClass("current");
        index = $(this).index();
        $(".s-content").hide();
        $(".s-content").eq(index).show();
    });

})