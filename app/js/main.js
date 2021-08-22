$(function () {

    $('.header__menu-btn').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active');
    });
    $('.top, .menu__list-link').on('click', function () {
        $('.menu__list').removeClass('menu__list--active');
    });

    $('.menu__dropdawn').on('click', function () {
        $('.menu__dropdawn').toggleClass('menu__dropdawn--active');
        $('.dropdawn').toggleClass('dropdawn--active');
    });

    $('.booking-calendar__input').on('click', function () {
        $('.popup-overlay').fadeIn();
        $('.booking-box').fadeIn();
    });

    $('.booking-box__close, .popup-overlay').on('click', function () {
        $('.popup-overlay').fadeOut();
        $('.booking-box').fadeOut();
    });



    $(".menu__list-link").on("click", function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });


    /*  $('.top-slider').slick({
    infinite: true,
    dots: true,
    speed: 1000,
    touchMove:false,
    touchThreshold: false,
    customPaging : function(slider, i) {
      var thumb = jQuery(slider.$slides[i]).data();
      return '<a>'+('0'+(i+1)).slice(-2)+'</a>'; 
  },
  cssEase: 'linear',

    prevArrow: '<button type="button" class="slick-prev"><img src="images/decor/left-arrow.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/decor/right-arrow.svg" alt=""></button>',
  
}); */



    $('.images-slider').slick({
        infinite: true,
        speed: 500, //400
        cssEase: 'linear',
        slidesToShow: 2,
        slidesToScroll: 1,
        adaptiveHeight: true,
        variableWidth: true,
        responsive: [{
                breakpoint: 1101,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 341,
                settings: {
                    arrows: false,
                    dots: true,
                }
            },
        ],
    });


    $('.team-slider').slick({
        infinite: true,
        cssEase: 'linear',
        prevArrow: '<button type="button" class="slick-prev"><img src="images/decor/left-litlearrow.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/decor/right-litlearrow.svg" alt=""></button>',
        slidesToShow: 4,
        lazyLoad: 'ondemand',
        slidesToScroll: 4,
        speed: 1000,
        responsive: [{
                breakpoint: 881,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 641,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 441,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ],
    });

    $('.reviews-block__text-slider').slick({
        infinite: true,
        speed: 700, //400
        cssEase: 'linear',
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        //autoplay: true,
        //autoplaySpeed: 5000,
        asNavFor: '.reviews-slider'
    });

    $('.reviews-slider').slick({
        infinite: true,
        lazyLoad: 'ondemand',
        speed: 600, //400
        cssEase: 'linear',
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        /* adaptiveHeight: true, */
        variableWidth: true,
        centerMode: true,
        asNavFor: '.reviews-block__text-slider',
        responsive: [{
            breakpoint: 541,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }, ],
    });

});

lightGallery(document.getElementById('gallery'));
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