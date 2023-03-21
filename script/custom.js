$(document).ready(function(){
    
    $(".infoMobile").click(function(){
        $(".socialmedia ul").slideToggle();
    });

    $(".infoIcon").click(function(){
        $(".info").slideToggle();
    });

    $(".mobNav").click(function(){
        if($(this).hasClass("active")){
            $(".mainnav ul").css("left", "-250px");
            $(this).removeClass("active");
        } else {
            $(".mainnav ul").css("left", 0);
            $(this).addClass("active");
        }
    });
   
});








 