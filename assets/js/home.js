$(document).ready(function(){
    $('.hero .carousel').slick({
      arrows: false, // Hide default arrows
      infinite: true, // Enable infinite loop
      speed: 500, // Animation speed
      slidesToShow: 1, // Number of slides to show at a time
      slidesToScroll: 1 // Number of slides to scroll at a time
    });
  
    // Add event handlers for previous and next buttons
    $('.hero .arrow.prev').click(function(){
      $('.hero .carousel').slick('slickPrev');
    });
  
    $('.hero .arrow.next').click(function(){
      $('.hero .carousel').slick('slickNext');
    });
  });
  