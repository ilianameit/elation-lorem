$(function(){
        $("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"},1000);
                return false;
        });
});


	$(function(){
        $(".menu li").click(function(){
                $(".menu li").removeClass("current-menu-item");
                $(this).addClass("current-menu-item");
                
        });
});
