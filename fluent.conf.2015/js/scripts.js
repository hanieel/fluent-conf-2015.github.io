// JavaScript Document

$(document).ready(function($){
	
	
	 // General Lighbox close
	  $('.lightbox_wrap').click(function() {
		  $('.lightbox_wrap').hide();
		  $(this).children('.lightbox').hide();
		  $('body').removeClass('noscroll');
	  });
	  $('.lightbox').click(function(event) {
		  event.stopPropagation();
	  });
	  
	  
	  
	  //Scrollto function; Removes hash from href and scrolls to element ID
    $(function(){
        $('a.scrollto[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {             
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                    scrollTop: target.offset().top - 80 // Distance from top
                    }, 1000);
                    return false;
                }           
            }
        });
    });

    //sticky NAV for vertical pages
		//$(window).scroll(function() {
			 //var header = $(document).scrollTop();
		 
			 //if (header > 281 ) { // Change this number to the amount you want to scroll before the header sticks
				//  $('header').addClass('sticky');
				 
			// } else {
				//  $('header').removeClass('sticky');
				  
			// }
		//});
	
	var  mn = $("header");
    mns = "sticky";
    hdr = $('header').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > hdr ) {
    mn.addClass(mns);
  } else {
    mn.removeClass(mns);
  }
  
  if ($('header').hasClass('sticky')) {
		$('main').addClass('pad_top');
		$('#header_image').addClass('hide');
		
	} else {
		$('main').removeClass('pad_top');
		$('#header_image').removeClass('hide');
	}
  
  
});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});