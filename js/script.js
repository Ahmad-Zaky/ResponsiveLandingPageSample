$(document).ready(function() {
 
    /***************************
     * Carousel JS Snippet     *
     **************************/
     if ( "owlCarousel" in $.fn && typeof $.fn.owlCarousel === "function") {
         const owl = $("#owl-demo");
         owl.owlCarousel({
             rtl:true,
             pagination:false, 
             center:true,
             margin:5,
             loop:true,
             autoWidth:true,
             items:3,
             responsive:{
                 0:{
                     items:1
                 },
                 1000:{
                     items:2
                 },
                 1500:{
                     items:3
                 }
             }
         });
     
         // Go to the next item
         $('.nextBtn').click(function() {
             console.log('next', owl)
             owl.trigger('owl.next');
         })
     
         // Go to the previous item
         $('.prevBtn').click(function() {
             console.log('prev', owl)
             // With optional speed parameter
             // Parameters has to be in square bracket '[]'
             owl.trigger('owl.prev', [300]);
         })
    }

    /********************************
     *   Pay Animation JS Snippet   *
     ********************************/
    
    $('.animated-pay-card-front').on('click', function (e) {
        // Hide
        $('.multi-pay-icon').fadeOut(300);
        $('.animated-pay-card-front').fadeOut(300);

        // Show
        setTimeout(function () {
            $('.animated-pay-card-back').fadeIn();
        }, 300);
    });
    
    $('.animated-pay-card-back').on('click', function (e) {
        // Hide
        $('.animated-pay-card-back').fadeOut(300);
        
        // Show
        setTimeout(function () {
            $('.animated-pay-card-front').fadeIn(200);
            $('.multi-pay-icon').fadeIn(300);
        }, 300);

    });
    
    $('.animated-trans-card-front').on('click', function (e) {
        // Hide
        $('.translation-icon').fadeOut(300);
        $('.animated-trans-card-front').fadeOut(300);

        // Show
        setTimeout(function () {
            $('.animated-trans-card-back').fadeIn();
        }, 300);
    });
    
    $('.animated-trans-card-back').on('click', function (e) {
        // Hide
        $('.animated-trans-card-back').fadeOut(300);
        
        // Show
        setTimeout(function () {
            $('.animated-trans-card-front').fadeIn(200);
            $('.translation-icon').fadeIn(300);
        }, 300);

    });

    /***************************************
     *    In Job Form Trigger File Input   *
     ***************************************/
    
    $('#resume').on('click', function () {
        $('input[name="resume"]').trigger('click');
    });


    /***************************************
     *        In FAQs Expandable JS        *
     ***************************************/
    
    var speed = 200 
    $('.accordion dt.expanded + dd').slideDown(speed)
    $('.accordion dt').on('click', function(){
        $(this).toggleClass('expanded').next('dd').slideToggle(speed)  
    });
    

    /************************************************************
     *        In Parteners International Tel Code API JS        *
     ************************************************************/
    if ( "intlTelInput" in $.fn && typeof $.fn.intlTelInput === "function") {
        $(".partener-phone").intlTelInput();

        // Style round curve on the left side of the input
        $(".intl-tel-input").addClass("w-100 rounded-pill-end");

        // Enhance the font weight of the countries names
        $(".country-list").attr("dir", "ltr").addClass("fw-normal");
    }
});
  