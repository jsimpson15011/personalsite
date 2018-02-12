
/*
Created by Joseph Simspon 2017
*/
(function () {
	var $appExplanation = $('.app-explanation');
	var $apps = $('.app');
	var showAppButton = document.getElementsByClassName('app-showcase-nav');
	//var linkClicked = getParameterByName('app');

	$apps.hide();
	$appExplanation.hide();
	if (true) {
		$apps.first().show();
		$appExplanation.first().slideDown();
	}

	for (var i = 0; i < showAppButton.length; i++) {
		showAppButton[i].addEventListener('click', showApp, true);
	}

	showAppButton[0].removeEventListener('click', showApp, true);
	/*if (linkClicked!=null) {
 	$appExplanation.slideUp();
 	$apps.hide();
 	switch(linkClicked){
 		case 'blackjack':
 			$apps.first().show();
 			$appExplanation.first().slideDown();
 			break;
 		case 'calendar':
 			$('.'+linkClicked).show();
 			$appExplanation.eq(1).show();
 			for (var i = 0; i < showAppButton.length; i++) {
 			showAppButton[i].addEventListener('click',showApp,true);
 			}
 			showAppButton[1].classList.add('disabled');
 			showAppButton[1].removeEventListener('click',showApp,true);
 			break;
 	}
 }
 
 function getParameterByName(name, url) {
     if (!url) url = window.location.href;
     name = name.replace(/[\[\]]/g, "\\$&");
     var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
         results = regex.exec(url);
     if (!results) return null;
     if (!results[2]) return '';
     return results[2].replace(/\+/g, " ").replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
 }*/

	function showApp() {
		console.log(this);
		var buttonText = this.innerText.replace(/\s/g, "-").toLowerCase();
		$appExplanation.slideUp();
		$apps.hide();
		$(this).children('div').slideDown();
		$('.' + buttonText).show();
		for (var i = 0; i < showAppButton.length; i++) {
			showAppButton[i].addEventListener('click', showApp, true);
		}
		this.classList.add('disabled');
		this.removeEventListener('click', showApp, true);
	}
})();