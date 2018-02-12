(function () {
		var $contactButton = $(".contact-button");
		var contactForm = document.getElementById('contact-form');
		var greyOut = document.getElementById('grey-out');

		for (var i = 0; i < $contactButton.length; i++) {
				$contactButton[i].addEventListener('click', function (e) {
						scrollPosition = window.pageYOffset;
						e.preventDefault();
						greyOut.classList.remove('hidden');
						contactForm.classList.remove('hidden');
						$('html, body').css({ //disables scrolling
								overflow: 'hidden',
								height: '100%'
						});
				});
		}
		greyOut.addEventListener('click', function () {
				greyOut.classList.add('hidden');
				contactForm.classList.add('hidden');
				$('html, body').css({ //returns scrolling
						overflow: 'auto',
						height: 'auto'
				});
		});
})();