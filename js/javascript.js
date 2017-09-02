var a = $('.navbar-default').offset().top;
$(document).scroll(function(){
  if($(this).scrollTop()>a){
    $('.navbar-default').css({"background-color":"#A19A8A","border-color":"#F0E8DB","border-width":"2px"});
  }
  else{
    $('.navbar-default').css({"background-color":"transparent","border-color":"transparent"});
  }
});