

   'use strict';
  /* CODE GOES HERE */


    $(document).ready(function() {

        
        /*
        WebFont.load({
            google: {
              families: ['Roboto+Slab|Roboto:300,400,400i,700,700i']
            }
        });
        */

        
       // jQuery for page scrolling feature - requires jQuery Easing plugin
        $(function() {
            $('a.page-scroll').bind('click', function(event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top-145
                }, 1500, 'easeInOutExpo');
                event.preventDefault();
            });
        });

        if($('.card-price').length > 0) {
            var delay = 150;

            var decimal_places = 2;
            var decimal_factor = decimal_places === 0 ? 1 : decimal_places * 10;

            $('.card-price').each( function () {
                var animateNumber = $(this).find('.gas-price').attr('data-price');
                console.log('Data price: ' + animateNumber);
                console.log($(this).find('.price-day'));

                //$(this).find('.price-day').animateNumber({ number: animateNumber, numberStep: comma_separator_number_step });
                $(this).find('.price-day')
                  .animateNumber(
                    {
                      number: animateNumber * decimal_factor,
                      numberStep: function(now, tween) {
                        var floored_number = Math.floor(now) / decimal_factor,
                            target = $(tween.elem);
                        if (decimal_places > 0) {
                          // force decimal places even if they are 0
                          floored_number = floored_number.toFixed(decimal_places);
                          // replace '.' separator with ','
                          floored_number = floored_number.toString().replace(',', '.');
                        }
                        target.text(floored_number);
                      }
                    },
                    2000
                  );

                //
                //setTimeout(function() {
                    //console.log($(this).find('.price-day'));
                    //$(this).find('.price-day').animateNumber({ number: animateNumber });
                //}, delay);
                delay = delay+150;
            });
        } 

        
    }); //ready





