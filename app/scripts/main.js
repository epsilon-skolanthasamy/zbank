 (function ($) {
   $.fn.clickToggle = function (func1, func2) {
     var funcs = [func1, func2];
     this.data('toggleclicked', 0);
     this.click(function () {
       var data = $(this).data();
       var tc = data.toggleclicked;
       $.proxy(funcs[tc], this)();
       data.toggleclicked = (tc + 1) % 2;
     });
     return this;
   };
 }(jQuery));


 $(function () {

   // Sticky Nav functionality 
   var stickyNav = function () { 
     $('.header').affix({
       offset: {
         top: 30//Math.round($('.header').offset().top)
       }
     });
   }
   stickyNav(); 

   //Before firing the position fixed bottom gutter is added
   $('.header').on('affix.bs.affix', function () {
     $(this).after('<div class="placeholder-header">placeholder</div>');
     $('.placeholder-header').css('height', Math.round($(this).height()));
   });
   //Before removing the position fixed bottom gutter is removed
   $('.header').on('affix-top.bs.affix', function () {
     $('header').find('.placeholder-header').remove();
   });

   $('.usb-alert').on('closed.bs.alert', function(){
     stickyNav();
   });


   $('.redemption-carousel').slick({
     dots: false,
     infinite: false,
     speed: 300,
     centerMode: false,
     slidesToShow: 4,
     slidesToScroll: 1,
     prevArrow: '<button type="button" class="slick-prev"><img src="images/button-arrow-left.png"></button>',
     nextArrow: '<button type="button" class="slick-next"><img src="images/button-arrow-right.png"></button>',
     responsive: [{
         breakpoint: 1024,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 3,
           infinite: true,
           dots: false,
           arrows: false
         }
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 2,
           dots: true,
           arrows: true,
           prevArrow: '<button type="button" class="slick-prev"><img src="images/icon-chevron-left-white.png"></button>',
           nextArrow: '<button type="button" class="slick-next"><img src="images/icon-chevron-right-white.png"></button>'
         }
       }

     ]

   });


   $('.recommendation-carousel').slick({
     dots: false,
     infinite: false,
     speed: 300,
     centerMode: false,
     slidesToShow: 4,
     slidesToScroll: 1,
     prevArrow: '<button type="button" class="slick-prev"><img src="images/button-arrow-left.png"></button>',
     nextArrow: '<button type="button" class="slick-next"><img src="images/button-arrow-right.png"></button>',
     responsive: [{
         breakpoint: 1024,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 3,
           infinite: true,
           dots: false,
           arrows: false
         }
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 2,
           dots: true,
           arrows: true,
           prevArrow: '<button type="button" class="slick-prev"><img src="images/icon-chevron-left-white.png"></button>',
           nextArrow: '<button type="button" class="slick-next"><img src="images/icon-chevron-right-white.png"></button>'
         }
       }

     ]

   });

   /*********** Hero Component ************/
   $('.usb-banner-slider').slick({
     dots: false,
     infinite: false,
     speed: 300,
     slidesToShow: 5,
     slidesToScroll: 1,
     arrows: false,
     prevArrow: '<button type="button" class="slick-prev"><img src="images/icon-chevron-left.png"></button>',
     nextArrow: '<button type="button" class="slick-next"><img src="images/icon-chevron-right.png"></button>',
     responsive: [{
         breakpoint: 1200,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 1,
           arrows: true,
           dots: true
         }
       },
       {
         breakpoint: 600,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 1,
           arrows: true,
           dots: true
         }
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
           arrows: true,
           dots: true
         }
       }
     ]
   });
   /*********** Hero Component ************/

   /*********** Redeem Component ************/

   $('.redeem-slider').slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     speed: 500,
     arrows: false,
     fade: false,
     asNavFor: '.redeem-slider-nav-thumbnails',
     autoplay: true,
     autoplaySpeed: 3000,
     
     prevArrow: '<button type="button" class="slick-prev"><img src="images/icon-chevron-left-white.png"></button>',
     nextArrow: '<button type="button" class="slick-next"><img src="images/icon-chevron-right-white.png"></button>',
     responsive: [{
         breakpoint: 1023,
         settings: {
           dots: true,
           arrows: true,
           asNavFor: null,
           autoplay:false,
           adaptiveHeight: true
         }
       },
       {
         breakpoint: 767,
         settings: {
           dots: true,
           arrows: true,
           asNavFor: null,
           autoplay:false,
           adaptiveHeight: true
         }
       }

     ]
   });

   $('.redeem-slider-nav-thumbnails').slick({
     slidesToShow: 3,
     asNavFor: '.redeem-slider',
     dots: false,
     speed: 500,
     autoplay: false,
     infinite: true,
     focusOnSelect: true,
     responsive: [{
       breakpoint: 767,
       settings: {
         asNavFor: null
       }
     }]
   });

   // Remove active class from all thumbnail slides
   $('.redeem-slider-nav-thumbnails .slick-slide').removeClass('slick-active');

   // Set active class to first thumbnail slides
   $('.redeem-slider-nav-thumbnails .slick-slide').eq(0).addClass('slick-active');

   // On before slide change match active thumbnail to current slide
   $('.redeem-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
     var mySlideNumber = nextSlide;
     $('.redeem-slider-nav-thumbnails .slick-slide').removeClass('slick-active');
     $('.redeem-slider-nav-thumbnails .slick-slide[data-slick-index=' + mySlideNumber + ']').addClass('slick-active');
   });


   $('.slick-btnPlay').clickToggle(function () {
     $('.redeem-slider').slick('slickPause');
     $(this).addClass('slick-pause-btn');
   }, function () {
     $('.redeem-slider').slick('slickPlay');
     $(this).removeClass('slick-pause-btn');
   });

   /*********** End Redeem Component ************/

   /*********** Start Product Detail Component ************/
   $('.product-detail-carousal').slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     speed: 500,
     arrows: false,
     fade: false,
     asNavFor: '.product-detail-carousal-nav-thumbnails',
     autoplay: false,
     autoplaySpeed: 3000,
     adaptiveHeight: true,
     prevArrow: '<button type="button" class="slick-prev"><img src="images/icon-chevron-left.png"></button>',
     nextArrow: '<button type="button" class="slick-next"><img src="images/icon-chevron-right.png"></button>',
     responsive: [{
       breakpoint: 767,
       settings: {
         dots: true,
         arrows: true,
         asNavFor: null,
         adaptiveHeight: true,
         infinite: false
       }
     }]
   });

   $('.product-detail-carousal-nav-thumbnails').slick({
     slidesToShow: 3,
     slidesToScroll: 1,
     asNavFor: '.product-detail-carousal',
     dots: false,
     focusOnSelect: true,
     infinite: false,
     arrows: false
   });

   // Remove active class from all thumbnail slides
   $('.product-detail-carousal-nav-thumbnails .slick-slide').removeClass('slick-active');

   // Set active class to first thumbnail slides
   $('.product-detail-carousal-nav-thumbnails .slick-slide').eq(0).addClass('slick-active');

   // On before slide change match active thumbnail to current slide
   $('.product-detail-carousal').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
     var mySlideNumber = nextSlide;
     $('.product-detail-carousal-nav-thumbnails .slick-slide').removeClass('slick-active');
     $('.product-detail-carousal-nav-thumbnails .slick-slide').eq(mySlideNumber).addClass('slick-active');
   });
   /*********** End Product Detail Component ************/

   /*********** Sub Catalog Component ************/
   $('#range').ionRangeSlider({
     min: 0,
     max: 100000,
     step: 100,
     // grid: true
   });

   //To remove the collapse from the select sub categories in desktop 
   //Remove collapse functionality in desktop and apply on mobile
   function accordion4mobile() {
     if ($(window).width() >= 991) {
       $('#sub-category-accordion, #toggle-range').removeClass('collapse');
       $('#sub-category-accordion').removeAttr('style');
     } else {
       $('#sub-category-accordion, #toggle-range').addClass('collapse');
     }
   }
   accordion4mobile();

   //Handling if the browser is resized
   $(window).resize(accordion4mobile);

   //Range slider functionality 
   $('#range').on('change', function (e) {
     var sliderVal = $(this).val();
     var redeemVal;
     $('.product-list').each(function () {
       redeemVal = $(this).data('redeem-point');
       if (redeemVal <= sliderVal) {
         $(this).closest('.product-wrapper').removeClass('show hide').addClass('show');
       } else {
         $(this).closest('.product-wrapper').removeClass('show hide').addClass('hide');
       }
     });
   });

   /*********** End Sub Catalog Component ************/
   /******* Rewards Component **********/
   $(document).on('click', '.order-data .order-header',function () {
     if($(this).hasClass('collapsed')){
       $(this).find('.icon-toggle').attr('class','glyphicon glyphicon-triangle-right icon-toggle');
     } else{
       $(this).find('.icon-toggle').attr('class', 'glyphicon glyphicon-triangle-bottom icon-toggle');
     }
   });
   /******* End Rewards Component **********/
 });
