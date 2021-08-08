$(function(){
  $('.top-slider').slick({
    infinite: true,
    dots: true,
    speed: 1000,
    customPaging : function(slider, i) {
      var thumb = jQuery(slider.$slides[i]).data();
      return '<a>'+('0'+(i+1)).slice(-2)+'</a>'; 
  },
  cssEase: 'linear',

    prevArrow: '<button type="button" class="slick-prev"><img src="images/decor/left-arrow.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/decor/right-arrow.svg" alt=""></button>',
  });
  AOS.init();
});

