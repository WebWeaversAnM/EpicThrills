var myVar;
function myFunction() {
    myVar = setTimeout(showPage, 1000);
}
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
var a = $('.navbar-default').offset().top;
$(document).scroll(function(){
  if($(this).scrollTop()>a){
    $('.navbar-default').css({"box-shadow":"0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)","transition-duration":".5s"});
    $('.navbar-default').css({"background-color":"white","border-color":"#E2FFD3","transition-duration":".5s"});
    $('#page-head').css({"color":"#25A3BC"});
    $('.nav.navbar-nav li a').css({"color":"#001439"});
    $('.nav.navbar-nav li a').hover(function(){
        $(this).css("color", "#001439");
        $(this).css("font-weight", "bold");
        }, function(){
        $(this).css("color", "#001439");
        $(this).css("font-weight", "500");
    });
  }
  else{
  	$('.navbar-default').css({"box-shadow":"none"});
    $('.navbar-default').css({"background-color":"transparent","border-color":"transparent"});
    $('#page-head').css({"color":"white"});
    $('.nav.navbar-nav li a').css({"color":"white"});
    $('.nav.navbar-nav li a').hover(function(){
        $(this).css("color", "#001439");
        $(this).css("font-weight", "bold");
        }, function(){
        $(this).css("color", "white");
        $(this).css("font-weight", "500");
    });
  }
});