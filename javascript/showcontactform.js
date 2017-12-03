const $contactButton = $(".contact-button");
const $closeButton = $('.close-button');
const contactForm = document.getElementById('contact-form');
const greyOut = document.getElementById('grey-out');

for (var i = 0; i < $contactButton.length; i++) {
		$contactButton[i].addEventListener('click',function(e){
		e.preventDefault();
		greyOut.classList.remove('hidden');
		contactForm.classList.remove('hidden');
		$('html, body').css({//disables scrolling
    	overflow: 'hidden',
    	height: '100%'
		});	
	});
}
for (var i = 0; i < $closeButton.length; i++) {
		$closeButton[i].addEventListener('click',function(e){
		e.preventDefault();
		greyOut.classList.add('hidden');
		this.parentElement.classList.add('hidden');
		$('html, body').css({//returns scrolling
    	overflow: 'auto',
    	height: 'auto'
		});	
	});
}
greyOut.addEventListener('click',function(){
		greyOut.classList.add('hidden');
		contactForm.classList.add('hidden');
		$('html, body').css({//returns scrolling
    	overflow: 'auto',
    	height: 'auto'
		});	
	});