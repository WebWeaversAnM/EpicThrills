var a = $('.navbar-default').offset().top;
$(document).scroll(function(){
  if($(this).scrollTop()>a){
    $('.navbar-default').css({"background-color":"white","border-color":"#F0E8DB","border-width":"2px"});
    $('#main-head').css({"color":"#524758"});
  }
  else{
    $('.navbar-default').css({"background-color":"transparent","border-color":"transparent","border-width":"2px"});
    $('#main-head').css({"color":"white"});
  }
});