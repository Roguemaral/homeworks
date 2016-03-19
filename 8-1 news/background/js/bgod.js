$(document).ready(function() {
    $("#realcontent").load("add.html");
    $("#tabsecond li").each(function(index) {
        $(this).click(function() {
            $("#tabsecond li.tabin").removeClass("tabin");
            $(this).addClass("tabin");
            if (index == 0) {
                $("#realcontent").load("add.html");
            } else if (index == 1) {
                $("#realcontent").load("listof.php");
            } 
        })
    })
})
