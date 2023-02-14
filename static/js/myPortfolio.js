$(document).ready(function () {
    $(".navItems ul li").click(function(){
        $(".navItems ul li").removeClass("active");
        $(this).addClass("active");

        $($(this).children().first().attr("href")).show().siblings().hide();
    });
})