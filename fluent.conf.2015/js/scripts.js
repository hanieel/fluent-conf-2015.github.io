// JavaScript Document

jQuery(document).ready(function($){
	
	
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
                    scrollTop: target.offset().top - 135 // Distance from top
                    }, 1000);
                    return false;
                }           
            }
        });
    });

    //postion: sticky;  
    /*
    var stickyNavTop = $('header nav').offset().top;
    var stickyNav = function(){  
    var scrollTop = $(window).scrollTop();  
        if (scrollTop > stickyNavTop) {   
            $('header nav').addClass('sticky');
        } else {  
            $('header nav').removeClass('sticky');
        }  
    };  
    stickyNav();  
    $(window).scroll(function() {  
        stickyNav();  
    });
    */
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});