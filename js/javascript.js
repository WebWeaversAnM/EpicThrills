var a = $('.navbar-default').offset().top;
$(document).scroll(function(){
  if($(this).scrollTop()>a){
    $('.navbar-default').css({"background-color":"white","border-color":"#F0E8DB"});
    $('#main-head').css({"color":"#524758"});
    $('.navbar-default .navbar-nav > li > a').css({"color":"#524758"});
  }
  else{
    $('.navbar-default').css({"background-color":"transparent","border-color":"transparent"});
    $('#main-head').css({"color":"white"});
    $('.navbar-default .navbar-nav > li > a').css({"color":"white"});
  }
});