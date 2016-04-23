/*
 * IIFE in es6
 * */
(function(code) {
  code(window.jQuery, window, document);
})(function($, window, document) {
  $(function() {

    // Add smoothscroll
    $('a').smoothScroll();

    // Add tooltiptser
    $('.tooltip').tooltipster({
      theme: 'tooltipster-kq',
    });


    // Reference for the slider: http://codepen.io/jurbank/pen/AckDb?editors=0010

    // Slider for works
    var $worksSliderContainer = $('.works__slides');
    var $workSlides = $worksSliderContainer.find('.works__work');
    var $workBullets = $('.works__slides-nav__bullet');

    var workCurrent = 0;


    $workBullets.on('click',  function() {
      // Get the index of the bullet clicked
      var index = $workBullets.index($(this));

      // Update the current index
      workCurrent = index;

      // First, remove the active class on the workBullets then add the active 
      // class on the current index
      $workBullets.removeClass('active');
      $workBullets.eq(workCurrent).addClass('active');

      // Show the slide of the current index
      $workSlides.removeClass('show active');
      $workSlides.eq(workCurrent).addClass('show');

      setTimeout(function() {
        $workSlides.eq(workCurrent).addClass('active');
      }, 10)
    });



    // Slider for testimonials
    var $testimonialsSlidesCont = $('.testimonials__slides');
    var $testimonialSlides = $testimonialsSlidesCont.find('.testimonials__testimonial');
    var $testimonialBullets = $('.testimonials__slides-nav__bullet');

    var testimonialCurrent = 0;


    $testimonialBullets.on('click',  function() {
      // Get the index of the bullet clicked
      var index = $testimonialBullets.index($(this));

      // Update the current index
      testimonialCurrent = index;

      // First, remove the active class on the testimonialBullets then add the active 
      // class on the current index
      $testimonialBullets.removeClass('active');
      $testimonialBullets.eq(testimonialCurrent).addClass('active');

      // Show the slide of the current index
      $testimonialSlides.removeClass('show active');
      $testimonialSlides.eq(testimonialCurrent).addClass('show');

      setTimeout(function() {
        $testimonialSlides.eq(testimonialCurrent).addClass('active');
      }, 10)
    });


  }); // end of document.ready
});
