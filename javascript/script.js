$(document).ready(function(){

	// home page nav buttons
	$('.home_li').click(function(e){
		e.preventDefault();
		$('#home').fadeOut();
		var name = $(this).text().toLowerCase();
		$('#nav_'+name).addClass('active');
		$('#'+name).fadeIn();
		$('#main_navbar').fadeIn();
	});

	// main navbar buttons
	$('.nav_buttons').click(function(e){
		e.preventDefault();
		$('.nav_buttons').parent().removeClass('active');
		$('.content_tab').hide();
		var name = $(this).text().toLowerCase();
		$('#nav_'+name).addClass('active');
		$('#'+name).fadeIn();
	});

	//main navbar home button
	$('.navbar-brand').click(function(e){
		e.preventDefault();
		$('.nav_buttons').parent().removeClass('active');
		$('.content_tab').hide();
		$('#main_navbar').hide();
		$('#home').fadeIn();
	});

	// collapse responsive navbar when clicking outside
	$(document).click(function(e) {
		if (!$(e.target).is('a')) {
	    	$('.collapse').collapse('hide');	    
	    }
	});

	// collapse responsive navbar when clicking a link
	$('#bs-example-navbar-collapse-1').click(function(e){
		if($(e.target).is('a')){
       $(this).collapse('hide');
    }
	});

	// animations for home page
	$('.home_header').fadeIn(300, function(){
		$('.divider').animate({width: '180px'}, 250);
		$('#home_nav li').each(function(delayTime){
			$(this).delay(delayTime * 100).fadeIn(500);
		});
	});


});