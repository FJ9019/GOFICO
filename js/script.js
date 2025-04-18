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




   // Swiper Logo
   document.addEventListener('DOMContentLoaded', function() {
    // Clone the logos for infinite loop effect
    const carousel = document.querySelector('.logo-carousel');
    const slides = document.querySelectorAll('.logo-slide');
    
    // Double the slides for seamless looping
    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        carousel.appendChild(clone);
    });
    
    // Pause/play on hover (already handled in CSS but adding JS fallback)
    carousel.addEventListener('mouseenter', function() {
        this.style.animationPlayState = 'paused';
    });
    
    carousel.addEventListener('mouseleave', function() {
        this.style.animationPlayState = 'running';
    });
    
    // Reset position when animation completes (for older browsers)
    carousel.addEventListener('animationiteration', function() {
        // This helps with older browsers that might have issues with infinite animation
        if (window.getComputedStyle(carousel).animationName === 'scroll') {
            // No need to do anything as CSS handles it, but this is a fallback
        }
    });
    
    // Touch support for mobile devices
    let touchStartX = 0;
    let isDragging = false;
    
    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        isDragging = true;
        carousel.style.animationPlayState = 'paused';
    }, {passive: true});
    
    carousel.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const touchX = e.touches[0].clientX;
        const diff = touchX - touchStartX;
        carousel.style.transform = `translateX(calc(${getCurrentTranslateX()}px + ${diff}px))`;
    }, {passive: true});
    
    carousel.addEventListener('touchend', () => {
        if (!isDragging) return;
        isDragging = false;
        carousel.style.animationPlayState = 'running';
        carousel.style.transform = '';
    }, {passive: true});
    
    function getCurrentTranslateX() {
        const style = window.getComputedStyle(carousel);
        const matrix = new DOMMatrix(style.transform);
        return matrix.m41;
    }
});


   
    // Testimonials
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


    // Photo Gallery

    // Fancybox Configuration
$('[data-fancybox="gallery"]').fancybox({
    buttons: [
      "slideShow",
      "thumbs",
      "zoom",
      "fullScreen",
      "share",
      "close"
    ],
    loop: false,
    protect: true
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

