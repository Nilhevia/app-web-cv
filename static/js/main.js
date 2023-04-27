jQuery(document).ready(function($) {


	var mastheadheight = $('.maa-header').outerHeight();
	//console.log(mastheadheight);
	$(".maa-banner,.maa-main-section").css("margin-top" , mastheadheight);

	$(window).scroll(function(){
	    if ($(window).scrollTop() >= 10) {
	        $('.maa-header').addClass('maa-fixed-header');
	    }
	    else {
	        $('.maa-header').removeClass('maa-fixed-header');
	    }
	}).scroll();


});