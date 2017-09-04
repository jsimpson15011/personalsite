var bubbles= $('.home-animation-links');
bubbles[0].style.top='100 px';
for (var i = 0; i < bubbles.length; i++) {
	bubbles[i].addEventListener('mouseover',off,false);
}
for (var i = 0; i < 10; i++) {
	floatUp();
}

function randomInt(min,max)
{
	return Math.floor(Math.random()*(max-min+1)+min);
}

function floatUp(){
	
}

function off(){
	var random1 = randomInt(0,1);
	var random2 = randomInt(0,1);
	bubbles[random1].style.backgroundColor='black';
	bubbles[random2].style.backgroundColor='blue';
	this.style.top='100 px';
}