var scrollPosition;
(function () {
	var bubbles = document.getElementsByClassName('home-animation-container');
	var moreInfo = document.getElementsByClassName('more-info-box');
	var greyOut = document.getElementById('grey-out');
	var bubbleIndex;

	for (var i = 0; i < bubbles.length; i++) {
		bubbles[i].addEventListener('click', showMoreInfo, false);
	}
	greyOut.addEventListener('click', function (e) {
		hideMoreInfo(e);
	}, false);
	function showMoreInfo() {
		var rawBubbleIndex = 0;
		var child = this;
		scrollPosition = window.pageYOffset;
		while ((child = child.previousSibling) != null) {
			rawBubbleIndex++;
		}bubbleIndex = (rawBubbleIndex - 3) / 2;
		moreInfo[bubbleIndex].classList.remove('hidden');
		greyOut.classList.remove('hidden');

		$('html, body').css({ //disables scrolling
			overflow: 'hidden',
			height: '100%'
		});
	}

	function hideMoreInfo(e) {
		if (e.target == '<div id="grey-out" class="hidden"></div>') {
			console.log('its grey');
		}
		console.log($(e.target).attr('id'));
		moreInfo[bubbleIndex].classList.add('hidden');
		$('html, body').css({ //returns scrolling
			overflow: 'auto',
			height: 'auto'
		});
		window.scrollBy(0, scrollPosition);
	}
})();