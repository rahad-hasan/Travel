
  $('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
  autoplayTimeout:5000,
  autoplayHoverPause:false,
    autoPlay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
$('.carousel-testimonial').owlCarousel({
    loop:true,
    autoplay:true,
  autoplayTimeout:5000,
  autoplayHoverPause:false,
    autoPlay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

 
    // Get the current year for the copyright
    $('#year').text(new Date().getFullYear());


  jQuery(document).ready(function($) {
            $('.counter').counterUp({
                delay: 10,
                time: 2000
            });
        });


  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

  
     //>=, not <=
    if (scroll >= 100) {
        //clearHeader, not clearheader - caps H
        $(".about-us-video").addClass("fade-in-up");
        $(".fade-in-left-animation").addClass("fade-in-left");
        
    }
    if(scroll>=650){
      $(".room-section").addClass("bounce_Up_animation");
      
    }
    if(scroll>=1450){
      $(".client-say-section h1").addClass("jackInTheBox");
    }
    if(scroll>=1850){
      $(".blog-section h1").addClass("jackInTheBox");
      $(".blog-section p").addClass("wooble");
    }
});
