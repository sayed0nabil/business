



$(".navbar li ").on("click",function(){
        $("html,body").animate({
            scrollTop: $($(this).attr("data-value")).offset().top-70
        },1000);
});