(function() {
const $closeButton = $('.close-button');
const greyOut = document.getElementById('grey-out');

for (var i = 0; i < $closeButton.length; i++) {
		$closeButton[i].addEventListener('click',function(e){
		e.preventDefault();
		greyOut.classList.add('hidden');
		this.parentElement.classList.add('hidden');
		$('html, body').css({//returns scrolling
    	overflow: 'auto',
    	height: 'auto'
		});	
		window.scrollBy(0, scrollPosition);
	});
}
})();