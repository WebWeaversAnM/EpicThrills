var a = $(".navbar-default").offset().top;

        $(document).scroll(function(){
            if($(this).scrollTop() > a)
            {   
               $('.navbar-default').css({"background-color":"#645E62","border-color":"transparent"});
            } else {
               $('.navbar-default').css({"background-color":"transparent","border-color":"transparent"});
            }
});