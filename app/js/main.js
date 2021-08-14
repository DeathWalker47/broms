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
    speed: 500,//400
    cssEase: 'linear',
    /* arrows: false, */
    slidesToShow:2,
    slidesToScroll:1,
    adaptiveHeight: true,
    variableWidth: true,
  });


  $('.team-slider').slick({
    infinite: true,
    cssEase: 'linear',
    /* arrows: false, */
    prevArrow: '<button type="button" class="slick-prev"><img src="images/decor/left-litlearrow.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/decor/right-litlearrow.svg" alt=""></button>',
    slidesToShow:4,
    slidesToScroll:1,
    speed: 700,
  });

  $('.reviews__text-slider').slick({
    infinite: true,
    speed: 700,//400
    cssEase: 'linear',
    arrows: false,
    slidesToShow:1,
    slidesToScroll:1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    asNavFor: '.reviews-slider'
  });

  $('.reviews-slider').slick({
    infinite: true,
    speed: 600,//400
    cssEase: 'linear',
    arrows: false,
    slidesToShow:5,
    slidesToScroll:1,
    adaptiveHeight: true,
    variableWidth: true,
    centerMode: true,
    asNavFor: '.reviews__text-slider'
  });


  lightGallery(document.getElementById('gallery'));

});




$.easing.circleProgressEasing = function(x, t, b, c, d) {
  if ((t /= d / 2) < 1)
      return c / 2 * t * t * t + b;
  return c / 2 * ((t -= 2) * t * t + 2) + b;
};

$.fn.circleProgress = function(options) {
  if (options == 'widget')
      return this.data('circle-progress');

  options = $.extend({}, $.circleProgress.defaults, options);

  return this.each(function() {
      var el = $(this),
          size = options.size,
          radius = size / 2,
          thickness = size / 14,
          value = options.value,
          startAngle = options.startAngle,
          emptyArcFill = options.emptyFill,
          arcFill;

      if ($.isNumeric(options.thickness))
          thickness = options.thickness;

      var canvas = el.data('circle-progress');

      if (!canvas) {
          canvas = $('<canvas>').prependTo(el)[0];
          el.data('circle-progress', canvas);
      }

      canvas.width = size;
      canvas.height = size;

      var ctx = canvas.getContext('2d');

      if (!options.fill)
          throw Error("The fill is not specified!");

      if (options.fill.color)
          arcFill = options.fill.color;

      if (options.fill.gradient) {
          var gr = options.fill.gradient;
          if (gr.length == 1) {
              arcFill = gr[0];
          } else if (gr.length > 1) {
              var lg = ctx.createLinearGradient(0, 0, size, 0);
              for (var i = 0; i < gr.length; i++)
                  lg.addColorStop(i / (gr.length - 1), gr[i]);
              arcFill = lg;
          }
      }

      if (options.fill.image) {
          var img = new Image();
          img.src = options.fill.image;
          img.onload = function() {
              var bg = $('<canvas>')[0];
              bg.width = size;
              bg.height = size;
              bg.getContext('2d').drawImage(img, 0, 0, size, size);
              arcFill = ctx.createPattern(bg, 'no-repeat');

              if (!options.animation)
                  draw(value);
          }
      }

      if (options.animation)
          drawAnimated(value);
      else
          draw(value);

      function draw(v) {
          ctx.clearRect(0, 0, size, size);
          drawArc(v);
          drawEmptyArc(v);
      }

      function drawArc(v) {
          ctx.save();
          ctx.beginPath();
          ctx.arc(radius, radius, radius - thickness / 2, startAngle, startAngle + Math.PI * 2 * v);
          ctx.lineWidth = thickness;
          ctx.strokeStyle = arcFill;
          ctx.stroke();
          ctx.restore();
      }

      function drawEmptyArc(v) {
          ctx.save();
          if (v < 1) {
              ctx.beginPath();
              if (v <= 0)
                  ctx.arc(radius, radius, radius - thickness / 2, 0, Math.PI * 2);
              else
                  ctx.arc(radius, radius, radius - thickness / 2, startAngle + Math.PI * 2 * v, startAngle);
              ctx.lineWidth = thickness;
              ctx.strokeStyle = emptyArcFill;
              ctx.stroke();
          }
          ctx.restore();
      }

      function drawAnimated(v) {
          el.trigger('circle-animation-start');

          $(canvas).css({ progress: 0 }).animate({ progress: v },
              $.extend({}, options.animation, {
                  step: function(p) {
                      draw(p);
                      el.trigger('circle-animation-progress', [p / v, p]);
                  },

                  complete: function() {
                      el.trigger('circle-animation-end');
                  }
              })
          );
      }
  });
};


$(document).ready(function ($) {
  function animateElements() {
      $('.progressbar').each(function () {
          var elementPos = $(this).offset().top;
          var topOfWindow = $(window).scrollTop();
          var percent = $(this).find('.circle').attr('data-percent');
          var percentage = parseInt(percent, 10) / parseInt(100, 10);
          var animate = $(this).data('animate');
          if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
              $(this).data('animate', true);
              $(this).find('.circle').circleProgress({
                  startAngle: -Math.PI / 2,
                  value: percentage,
                  thickness: 5,
                  fill: {
                      color: '#8AAEE6'
                  },
                  emptyFill: '#1C1D1D',
                  animation: {
                      duration: 2000,
                      easing: 'linear'
                    },
                    
              }).on('circle-animation-progress', function (event, progress, stepValue) {
                  $(this).find('div').text(String(stepValue.toFixed(2)).substr(2) + '%');
              }).stop();
          }
      });
  }

  animateElements();
  $(window).scroll(animateElements);
});