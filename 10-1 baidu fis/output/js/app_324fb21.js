$(document).ready(function(){$(".user-name").hover(function(){$("#s_user_name_menu").slideDown()}),$("#s_user_name_menu").mouseleave(function(){$("#s_user_name_menu").slideUp()}),$(".setting-text").hover(function(){$("#s_user_setting_menu").slideDown()}),$("#s_user_setting_menu").mouseleave(function(){$("#s_user_setting_menu").slideUp()}),$(".s_bri").hover(function(){$(".s_bdbriimg").slideDown()}),$(".s_bdbriimg").mouseleave(function(){$(".s_bdbriimg").slideUp()}),$(".s-menu-item").on("click",function(){$(".current").removeClass("current"),$(this).addClass("current"),index=$(this).index(),$(".s-content").hide(),$(".s-content").eq(index).show()})});