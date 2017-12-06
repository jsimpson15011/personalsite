
/*
Created by Joseph Simspon 2017
*/
$( window ).on( "load", function() {
var homeAnimation= document.getElementById('home-animation');
var showGraphicDesign= document.getElementById('animation-show-design');
var showWebDevelopment= document.getElementById('animation-show-development');
var showAll= document.getElementById('animation-show-all');
var $bubbles= $('.home-animation-container');
var $designBubbles= $('.home-animation-design');
var $developmentBubbles= $('.home-animation-development');
var bubbleIndex= 0;
var animationStopped= false;
var changedButton;
var changedButtonText;
var bubbleWidth= $bubbles.width();
var bubbleHeight= $bubbles.height();
var mq = window.matchMedia( "(min-width: 1200px)" );
animationResize();
window.onresize= function(){animationResize()};
$bubbles.hide();
for (var i = 0; i < $bubbles.length; i++) {
	$bubbles[i].style.position='absolute';
}
homeAnimation.style.overflow = 'hidden';


if (mq.matches) {
    $('#logo').hide().fadeIn(1000);
	$('#side-text-container').hide().delay(1000).slideDown(1500);
	$('#home-animation').hide().delay(2000).fadeIn(1800);
}


showAll.addEventListener('click',function(){
	stopShow($bubbles,showAll);
	this.removeEventListener('click', arguments.callee);
	},false);
showGraphicDesign.addEventListener('click',function(){
	stopShow($designBubbles,showGraphicDesign);
	this.removeEventListener('click', arguments.callee);
	},false);
showWebDevelopment.addEventListener('click',function(){
	stopShow($developmentBubbles,showWebDevelopment);
	this.removeEventListener('click', arguments.callee);
	},false);

function animationResize(){
	var bubbleWidth= $bubbles.width();
	if (bubbleWidth*3<$(window).width()) {
		homeAnimation.setAttribute("style","width:"+(((bubbleWidth*3)+50))+ "px");
	}
	if ($(window).width()<1160) {
		homeAnimation.setAttribute("style","width:95%");
	}
	if (animationStopped==false){
		homeAnimation.style.overflowY = 'hidden';
	}
	
}
function stopShow(typeOfBubble,buttonName){
	var changedButton= document.getElementsByClassName('changedButton')[0];
	if (changedButtonText=='Everything'&& $(buttonName).text()!='Everything') {
		showAll.addEventListener('click',function(){
			stopShow($bubbles,showAll);
			this.removeEventListener('click', arguments.callee);
			},false);
	}
	if (changedButtonText=='Design'&& $(buttonName).text()!='Design') {
		showGraphicDesign.addEventListener('click',function(){
			stopShow($designBubbles,showGraphicDesign);
			this.removeEventListener('click', arguments.callee);
			},false);
	}
	if (changedButtonText=='Development'&& $(buttonName).text()!='Development') {
		showWebDevelopment.addEventListener('click',function(){
			stopShow($developmentBubbles,showWebDevelopment);
			this.removeEventListener('click', arguments.callee);
			},false);
	}

	if (animationStopped==true) {
		changedButton.innerHTML= changedButtonText;
		changedButton.classList.remove('changedButton');
		buttonName.classList.add('changedButton');
	}

	changedButtonText= $(buttonName).text();

	$bubbles.stop(true,false);
	$bubbles.unbind('mouseenter mouseleave');
	$bubbles.hide();
	typeOfBubble.animate({opacity: 0},0).animate({left: '0px', bottom: '0px'},0).animate({opacity: 100}).fadeIn()
	for (var i = 0; i < typeOfBubble.length; i++) {
	typeOfBubble[i].style.position='relative';
	}
	buttonName.classList.add('changedButton');

	buttonName.addEventListener('click',bubbleShow,false);
	buttonName.innerHTML= 'Start Animation';
	animationStopped=true;
	homeAnimation.style.overflowY = 'scroll';
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
function bubbleShow(){
	if (animationStopped==true) {
		var changedButton= document.getElementsByClassName('changedButton')[0];
		changedButton.classList.remove('changedButton');
		console.log(changedButtonText);
		if (changedButtonText=='Everything') {
			showAll.addEventListener('click',function(){
				stopShow($bubbles,showAll);
				this.removeEventListener('click', arguments.callee);
				},false);
		}
		if (changedButtonText=='Design') {
			showGraphicDesign.addEventListener('click',function(){
				stopShow($designBubbles,showGraphicDesign);
				this.removeEventListener('click', arguments.callee);
				},false);
		}
		if (changedButtonText=='Development') {
			showWebDevelopment.addEventListener('click',function(){
			stopShow($developmentBubbles,showWebDevelopment);
			this.removeEventListener('click', arguments.callee);
			},false);
		}
		$bubbles.hide();
		homeAnimation.style.overflow = 'hidden';
		for (var i = 0; i < $bubbles.length; i++) {
			$bubbles[i].style.position='absolute';
		}
		$bubbles.hover(function() {
		  $(this).stop(true,false);
		}, function() {
			if ((bubbleIndex+1)==($(this).index())){
				if (bubbleIndex<($bubbles.length-1)) {
						bubbleIndex+=1;
					}
				else{
						bubbleIndex=0;
					}
			} 
			$(this).hide().animate({bottom: '0'}, 0, 'linear');
		});
		changedButton.innerHTML= changedButtonText;
		animationStopped=false;
		changedButtonText='nothing';
	}
	
		floatUp();
	function floatUp(){
		var speed=1.5; //Sets speed for the animation. 2 is twice as slow as 1.
		var containerWidth= $('#home-animation').width();
		var containerHeight= $('#home-animation').height();
		var bubbleOrigin=getRandomIntInclusive(0,(containerWidth-bubbleWidth));
		var horizontalA=getRandomIntInclusive(15,30);
		var horizontalB=getRandomIntInclusive(-30,-15);
		var horizontalC=getRandomIntInclusive(-12.5,12.5);
		$($bubbles[bubbleIndex]).animate({left: bubbleOrigin+'px'},0).show(0).animate({left: bubbleOrigin+'px'},0)
		.animate({opacity: 100},(0))
		.animate({left: '+='+horizontalA+'px', bottom: '+='+((containerHeight/6)-(bubbleHeight/6))+'px'},(1000*speed), 'linear')
		.animate({left: '+='+horizontalB+'px', bottom: '+='+((containerHeight/6)-(bubbleHeight/6))+'px'},(1000*speed), 'linear')
		.animate({left: '+='+horizontalA+'px', bottom: '+='+((containerHeight/6)-(bubbleHeight/6))+'px'},(1000*speed), 'linear')
		.animate({left: '+='+horizontalB+'px', bottom: '+='+((containerHeight/6)-(bubbleHeight/6))+'px'},(1000*speed), 'linear')
		.animate({left: '+='+horizontalA+'px', bottom: '+='+((containerHeight/6)-(bubbleHeight/6))+'px'},(1000*speed), 'linear'/*,function(){indexUpdate(),floatUp()}*/)
		.animate({left: '+='+horizontalB+'px', bottom: '+='+((containerHeight/6)-(bubbleHeight/6))+'px'},(1000*speed), 'linear')
		.animate({opacity: 0},(700))
		.animate({bottom: '0'}, 0, 'linear')
		.hide(0);
		indexUpdate();
		function indexUpdate(){
			if (bubbleIndex<($bubbles.length-1)) {
					bubbleIndex+=1;
				}
			else{
				bubbleIndex=0;
				}
			}	
	}
}

$bubbles.hover(function() {
  $(this).stop(true,false);
}, function() {
	if ((bubbleIndex+1)==($(this).index())){
		if (bubbleIndex<($bubbles.length-1)) {
				bubbleIndex+=1;
			}
		else{
				bubbleIndex=0;
			}
	} 
	$(this).hide().animate({bottom: '0'}, 0, 'linear');
});

bubbleShow();
var bubbleShowInterval = setInterval(bubbleShowTimer, 4500);
window.addEventListener("blur",function(){
		animationStopped=true;
	},false);
window.addEventListener("focus",function(){
	if (changedButtonText=='nothing'||changedButtonText==undefined) {
		animationStopped=false;
	}
},false);
function bubbleShowTimer(){
	if (animationStopped==false) {
		bubbleShow();
	}
}
});