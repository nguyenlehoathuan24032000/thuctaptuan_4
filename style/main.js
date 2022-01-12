
$(document).ready(function() {
  $('header .overlay .slider-menu').owlCarousel({
      items: 1,
      loop: true,
      dots: true,
      nav: false,
      navText: ['<i class="fas fa-chevron-left prev"></i>', '<i class="fas fa-chevron-right next"></i>'],
      autoplay: true,
      autoplayTimeout: 2000,
    })
});

$(document).ready(function() {
  $('.event .box-container .wrap .events-block .news .news-slider').owlCarousel({
      loop: true,
      dots: false,
      nav: true,  
      margin: 20,
      navText: ['<i class="fas fa-chevron-left prev"></i>', '<i class="fas fa-chevron-right next"></i>'],
      autoplay: false,
      // autoplayTimeout: 5000,
      responsive: {
        0: {
          items:1,
          nav:true
        },
        576:{
          items:1,
          nav:true
        },
        768:{
            items:2,
            nav:true
        },
        992: {
          items:2,
          nav:true,
        },
        1200:{
            items:3,
            nav:true,
            loop:true
        },
       
      }
    })
});