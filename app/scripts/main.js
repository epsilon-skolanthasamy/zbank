 (function($) {
   $.fn.clickToggle = function(func1, func2) {
     var funcs = [func1, func2];
     this.data('toggleclicked', 0);
     this.click(function() {
       var data = $(this).data();
       var tc = data.toggleclicked;
       $.proxy(funcs[tc], this)();
       data.toggleclicked = (tc + 1) % 2;
     });
     return this;
   };
 }(jQuery));


 $(function() {

   /*// Sticky Nav functionality 
   var stickyNav = function() {
     $('.header').affix({
       offset: {
         top: 30 //Math.round($('.header').offset().top)
       }
     });
   }
   stickyNav();

   //Before firing the position fixed bottom gutter is added
   $('.header').on('affix.bs.affix', function() {
     $(this).after('<div class="placeholder-header">placeholder</div>');
     $('.placeholder-header').css('height', Math.round($(this).height()));
   });
   //Before removing the position fixed bottom gutter is removed
   $('.header').on('affix-top.bs.affix', function() {
     $('header').find('.placeholder-header').remove();
   });

   $('.usb-alert').on('closed.bs.alert', function() {
     stickyNav();
   });
*/
   /*********** Popular Categories Slider ************/
   $('.categories-tiles').slick({
     dots: false,
     infinite: false,
     speed: 300,
     slidesToShow: 5,
     slidesToScroll: 1,
     arrows: false,
     responsive: [{
         breakpoint: 1200,
         settings: {
           slidesToShow: 5,
           slidesToScroll: 1,
           arrows: true,
           dots: true
         }
       },
       {
         breakpoint: 600,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 1,
           centerMode: true,
           dots: false
         }
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
           centerMode: true,
           dots: false
         }
       }
     ]
   });

   /*********** Popular Categories Slider ************/
   $('.current-promotions-carousel').slick({
     dots: false,
     infinite: false,
     speed: 300,
     centerMode: false,
     slidesToShow: 5,
     slidesToScroll: 1,
     arrows:false,
     responsive: [{
         breakpoint: 1024,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 1,
           infinite: true,
           dots: false,
           arrows: false
         }
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
           dots: true
         }
       }

     ]

   });


   /*********** Redeem Component ************/

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
   $('#range').on('change', function(e) {
     var sliderVal = $(this).val();
     var redeemVal;
     $('.product-list').each(function() {
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
   $(document).on('click', '.order-data .order-header', function() {
     if ($(this).hasClass('collapsed')) {
       $(this).find('.icon-toggle').attr('class', 'glyphicon glyphicon-triangle-right icon-toggle');
     } else {
       $(this).find('.icon-toggle').attr('class', 'glyphicon glyphicon-triangle-bottom icon-toggle');
     }
   });
   /******* End Rewards Component **********/
 });
