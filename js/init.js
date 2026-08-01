/*-----------------------------------------------------------------------------------
/*
/* Init JS
/*
-----------------------------------------------------------------------------------*/

 jQuery(document).ready(function($) {

   var $header = $('header');

/*----------------------------------------------------*/
/* FitText Settings
------------------------------------------------------ */

    setTimeout(function() {
	   $('h1.responsive-headline').fitText(1, { minFontSize: '40px', maxFontSize: '90px' });
	 }, 100);


/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */

   $('.smoothscroll').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    /* Bail out if the anchor does not exist on this page, otherwise
	       $target.offset() is undefined and the handler throws. */
	    if (!$target.length) return;

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing', function () {
	        window.location.hash = target;
	    });
	});


/*----------------------------------------------------*/
/*	Header sizing and primary navigation
/*
/*	Only index.html has a <header>. There the nav fades out over the
/*	hero and turns opaque once you scroll past it. The other pages have
/*	white content directly under a fixed nav whose links are #fff, so
/*	the nav must be opaque from the start -- set once here rather than
/*	on every scroll event.
------------------------------------------------------*/

   if ($header.length) {

      $header.css({ 'height': $(window).height() });
      $(window).on('resize', function() {
         $header.css({ 'height': $(window).height() });
      });

      $(window).on('scroll', function() {

         var h = $header.height();
         var y = $(window).scrollTop();
         var nav = $('#nav-wrap');

         if ( (y > h*.20) && (y < h) && ($(window).outerWidth() > 768 ) ) {
            nav.fadeOut('fast');
         }
         else {
            if (y < h*.20) {
               nav.removeClass('opaque').fadeIn('fast');
            }
            else {
               nav.addClass('opaque').fadeIn('fast');
            }
         }

      });

   }
   else {
      $('#nav-wrap').addClass('opaque');
   }

});
