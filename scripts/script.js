var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("page-top").style.display = "block";
}


$(document).ready(function(){
    // Activate Carousel
    $("#my-car").carousel();
    
    // Enable Carousel Indicators
    $(".item1").click(function(){
        $("#my-car").carousel(0);
    });
    $(".item2").click(function(){
        $("#my-car").carousel(1);
    });
    $(".item3").click(function(){
        $("#my-car").carousel(2);
    });
   
    
    // Enable Carousel Controls
    $(".left").click(function(){
        $("#my-car").carousel("prev");
    });
    $(".right").click(function(){
        $("#my-car").carousel("next");
    });
});

$(window).scroll(function() {
    if ($("#mainNav").offset().top > 50) {
           $('.navbar-default').css({"background-color":"white","transition-duration":"0.2s"});
           $('#mainNav').css({"color":"#524758"});
           $('.navbar-default .navbar-brand').css({"color":"#3378EC","font-size":"20px"});
           $("#mainNav").addClass("navbar-shrink");
           $('.navbar-default .navbar-nav > li > a').css({"color":"black"});
           $('.navbar-default .navbar-nav > li > a:hover').css({"color":"white"});
    } else {
           $('.navbar-default').css({"background-color":"transparent","border-color":"transparent"});
           $('#mainNav').css({"color":"white"});
           $('.navbar-default .navbar-brand').css({"color":"white","font-size":"18px"});
           $('.navbar-default .navbar-nav > li > a').css({"color":"white"});
           $("#mainNav").removeClass("navbar-shrink");
    }
  });

  $(document).ready(function(){
    // Add scrollspy to <body>
    $('body').scrollspy({target: ".navbar", offset: 50});   
  
    // Add smooth scrolling on all links inside the navbar
    $("#page-top a").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      }  // End if
    });
  });




// (function($) {
//     "use strict"; // Start of use strict
  


    // Smooth scrolling using jQuery easing
    // $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    //   if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    //     var target = $(this.hash);
    //     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //     if (target.length) {
    //       $('html, body').animate({
    //         scrollTop: (target.offset().top - 48)
    //       }, 1000, "easeInOutExpo");
    //       return false;
    //     }
    //   }
    // });

    
    // // Closes responsive menu when a scroll trigger link is clicked
    // $('.js-scroll-trigger').click(function() {
    //   $('.navbar-collapse').collapse('hide');
    // });
  
   
  
    //Collapse the navbar when page is scrolled
    // $(window).scroll(function() {
    //   if ($("#mainNav").offset().top > 100) {
    //     $("#mainNav").addClass("navbar-shrink");
    //   } else {
    //     $("#mainNav").removeClass("navbar-shrink");
    //   }
    // });
  
  //  // Scroll reveal calls
  // window.sr = ScrollReveal();
  // sr.reveal('.sr-icons', {
  //   duration: 600,
  //   scale: 0.3,
  //   distance: '0px'
  // }, 200);
  // sr.reveal('.sr-button', {
  //   duration: 1000,
  //   delay: 200
  // });
  // sr.reveal('.sr-contact', {
  //   duration: 600,
  //   scale: 0.3,
  //   distance: '0px'
  // }, 300);

  // // Magnific popup calls
  // $('.popup-gallery').magnificPopup({
  //   delegate: 'a',
  //   type: 'image',
  //   tLoading: 'Loading image #%curr%...',
  //   mainClass: 'mfp-img-mobile',
  //   gallery: {
  //     enabled: true,
  //     navigateByImgClick: true,
  //     preload: [0, 1]
  //   },
  //   image: {
  //     tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
   // }
  // });




//   })(jQuery); // End of use strict