
/*
Created by Joseph Simspon 2017
*/
(function (){
const $appExplanation = $('.app-explanation');
const $apps = $('.app');
const showAppButton = document.getElementsByClassName('app-showcase-nav');

$apps.hide();
$appExplanation.hide();
$apps.first().show();
$appExplanation.first().slideDown();

for (var i = 0; i < showAppButton.length; i++) {
	showAppButton[i].addEventListener('click',showApp,true);
}

showAppButton[0].removeEventListener('click',showApp,true);

function showApp(){
	var buttonText = this.innerText.replace(/\s/g, "-").toLowerCase();
	$appExplanation.slideUp();
	$apps.hide();
	$(this).children('div').slideDown();
	$('.'+buttonText).show();
	for (var i = 0; i < showAppButton.length; i++) {
		showAppButton[i].addEventListener('click',showApp,true);
	}
	this.classList.add('disabled');
	this.removeEventListener('click',showApp,true);
	console.log(buttonText);
}

})();