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

  $('.slider-examples').slick({
    infinite: true,
    cssEase: 'linear',
    /* arrows: false, */
    prevArrow: '<button type="button" class="slick-prev"><img src="images/decor/left-litlearrow.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/decor/right-litlearrow.svg" alt=""></button>',
    slidesToShow:1,
    slidesToScroll:1,
    speed: 1000,
  });

  $('.images-slider').slick({
    infinite: true,
    speed: 400,//400
    cssEase: 'linear',
    /* arrows: false, */
    slidesToShow:2,
    slidesToScroll:1,
    adaptiveHeight: true,
    variableWidth: true,
  });

  $('.circle-1').circleProgress({
    value: 0.85,
    fill: '#8AAEE5',
    size:105,
    animation: {
        duration: 1200,
        easing: 'linear',
      },
    emptyFill: 'rgba(0, 0, 0, 1)',
    });
    
    const myChart = $(".circle-2").donutty({
  
    });

    $(".example").circlos({
      backgroundColor:'#fff',
          progressColor:'#fff',
          percent: 75,
          duration: 2000
    });
});


