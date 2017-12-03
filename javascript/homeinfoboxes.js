var bubbles= document.getElementsByClassName('home-animation-container');
var moreInfo= document.getElementsByClassName('more-info-box');

for (var i = 0; i < bubbles.length; i++) {
	bubbles[i].addEventListener('click',showMoreInfo,false);
}

function showMoreInfo() {
	var rawBubbleIndex = 0;
	var bubbleIndex;
	var child = this;
	while( (child = child.previousSibling) != null ) 
  	rawBubbleIndex++;
  	bubbleIndex=(rawBubbleIndex-3)/2;
	moreInfo[bubbleIndex].classList.remove('hidden');
	greyOut.classList.remove('hidden');

	$('html, body').css({//disables scrolling
    overflow: 'hidden',
    height: '100%'
	});
}

function hideMoreInfo() {
	$('html, body').css({//returns scrolling
    overflow: 'auto',
    height: 'auto'
	});
}