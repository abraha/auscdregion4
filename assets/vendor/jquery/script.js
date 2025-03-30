 (function ($) {
   "use strict";



   Drupal.behaviors.owlmodal = {
     attach: function (context, settings) {
       // $('.popup-btn').click(function(e) {
       //
       // });
       //
       // $('.popup-close').click(function(e) {
       //
       // });
       //
       // $( ".popup-btn" ).on( "click", function() {
       //   $('.quote--modal').toggleClass('quote--modal--show');
       // });
       //
       // $( ".quote--overlay" ).on( "click", function() {
       //   $('.quote--modal').toggleClass('quote--modal--show');
       // });
       //
       // $( ".quote--modal__close" ).on( "click", function() {
       //   $('.quote--modal').toggleClass('quote--modal--show');
       // });


       toggle_modal();

       function toggle_modal() {

         // when any button/link is clicked that has
         // the class 'js-trigger-modal'...

         $('.js-trigger-modal').on("click", function(e){



           // prevent the element's default behavior
           e.preventDefault();

           // get the value for the 'data-modal-source'
           // attribute for the element clicked
           var modal_content_source = $(this).data('quote-modal-source');

           // match the value above with the corresponding
           // content modal wrapper, and then get the HTML
           var modal_inner_content = $('div[id=' + modal_content_source + ']').html();

           // insert the HTML above into the modal
           $('.quote-modal').appendTo($('body'));
           $('#quote-modal-content').html('').append(modal_inner_content);
           console.log('clo');

           // show the modalâ€”add class to the body to reveal
           setTimeout(function(){
             $('body').addClass('show-quote-modal');
           }, 100); // needed a slight delay for the CSS fade-up transition for inner-content to work

         });

         // close the modal when a 'dismiss' element
         // or the overlay is clicked
         $('body').on('click', '.dismiss-quote-modal, .quote-modal .quote-modal-overlay', function(e) {
           // remove the class on the body that shows the modal
           e.preventDefault();
           $("body").removeClass("show-quote-modal");
         });

       }
       $('.js-review-slider').owlCarousel({
         items: 1,
         loop:true,
         margin: 0,
         nav:true,
         dots: false,
         navSpeed: '800',
         dotsSpeed: '800',
         autoplaySpeed: '800',
         mouseDrag: true,
         fallbackEasing: "easeInOutCubic",
         navRewind: false,
         navigationText : false,
         autoplay: false,
         navText: ['<i class="icon-slider-prev"></i>','<i class="icon-slider-next"></i>']
       });

     }



   };


   })(jQuery);

