(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();
    

    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-dark shadow');
            } else {
                $('.fixed-top').removeClass('bg-dark shadow');
            }
        } else {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-dark shadow').css('top', -45);
            } else {
                $('.fixed-top').removeClass('bg-dark shadow').css('top', 0);
            }
        }
    });


    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fa fa-arrow-right"></i>',
            '<i class="fa fa-arrow-left"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });


    // Partner
    $(document).ready(function () {
        var owl = $("#owl-demo1");
      
        owl.owlCarousel({
          items: 4, //10 items above 1000px browser width
          itemsDesktop: [1000, 3], //5 items between 1000px and 901px
          itemsDesktopSmall: [900, 2], // 3 items betweem 900px and 601px
          itemsTablet: [600, 1], //2 items between 600 and 0;
          itemsMobile: [360, 1] // itemsMobile disabled - inherit from itemsTablet option
        });
      
        // Custom Navigation Events
        $(".next").click(function () {
          owl.trigger("owl.next");
        });
        $(".prev").click(function () {
          owl.trigger("owl.prev");
        });
        $(".play").click(function () {
          owl.trigger("owl.play", 1000);
        });
        $(".stop").click(function () {
          owl.trigger("owl.stop");
        });
      });
      


   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


})(jQuery);

