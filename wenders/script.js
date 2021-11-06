$(document).ready(function(){
  var options = {
    strings: ['Большой гамбургер','лаваш','пицца','хотдог'],
    typeSpeed: 70,
    startDelay: 0,
    backSpeed: 100,
    backDelay:500,
    loop: true,
    loopCount: Infinity
    
  };
  
  var typed = new Typed('.header-title', options);

  $('.main').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


});