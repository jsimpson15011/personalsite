if($(window).width() > 480)
{   
	$('.nav-circles').mouseover(function(){
		$(this).siblings().finish().animate({top: '+=15px',fontSize: '18px'},"fast");
	});
	$('.nav-circles').mouseout(function(){
		$(this).siblings().finish().animate({top: "-=15px",fontSize: '.9em'});
	});
}