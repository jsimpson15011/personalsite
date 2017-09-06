var decks=1; //number of decks in game
var shoeDone=0; //when this number reaches 48 a new shoe starts
var hitButton= document.getElementById('hit');
var table = document.getElementById('table');
var playerBlackJack = false;
var hasHighAce= false;
var hasAce= false;
var playerTotal=0;
var gameTextLeft= document.getElementById('game-text-left');
var dealer= document.getElementById('dealer');
var h1 = {value: 1, suit:'heart',ace:true, index:0, drawn:0};
var h2 = {value: 2, suit:'heart',ace:false, index:1, drawn:0};
var h3 = {value: 3, suit:'heart',ace:false, index:2, drawn:0};
var h4 = {value: 4, suit:'heart',ace:false, index:3, drawn:0};
var h5 = {value: 5, suit:'heart',ace:false, index:4, drawn:0};
var h6 = {value: 6, suit:'heart',ace:false, index:5, drawn:0};
var h7 = {value: 7, suit:'heart',ace:false, index:6, drawn:0};
var h8 = {value: 8, suit:'heart',ace:false, index:7, drawn:0};
var h9 = {value: 9, suit:'heart',ace:false, index:8, drawn:0};
var hj = {value: 10, suit:'heart',ace:false, index:9, drawn:0};
var hq = {value: 10, suit:'heart',ace:false, index:10, drawn:0};
var hk = {value: 10, suit:'heart',ace:false, index:11, drawn:0};

deal();
hitButton.addEventListener('click',hit,false);

function newCardValue(){
		function randomInt(min,max){
			return Math.floor(Math.random()*(max-min+1)+min);
		}
		var cardNumber= randomInt(0,11);
		switch(cardNumber) {
    	case 0:
    		hasAce=true;
    	    if (h1.drawn>(decks*4)-1) {
       	 		cardValue='redraw';
       	 		break;
       	 	}
    		if (playerTotal<11) {
    			h1.value=11;
    			cardValue = h1.value;
    			hasHighAce = true;
    		}
    		else{
    			h1.value=1;
    			cardValue = h1.value;
    			hasHighAce = false;
    		}

       	 	h1.drawn+=1;
       	 	shoeDone+=1;
        	break;
    	case 1:
        	
        	if (h2.drawn>(decks*4)-1) {
       	 		cardValue='redraw';
       	 		break;
       	 	}
       	 	cardValue = h2.value;
       	 	h2.drawn+=1;
       	 	shoeDone+=1;
        	break;
    	case 2:
        	
        	if (h3.drawn>(decks*4)-1) {
       	 		cardValue='redraw';
       	 		break;
       	 	}
       	 	cardValue = h3.value;
       	 	h3.drawn+=1;
       	 	shoeDone+=1;
        	break;
    	case 3:
        	
        	if (h4.drawn>(decks*4)-1) {
       	 		cardValue='redraw';
       	 		break;
       	 	}
       	 	cardValue = h4.value;
       	 	h4.drawn+=1;
       	 	shoeDone+=1;
        	break;
    	case 4:
        	
        	if (h5.drawn>(decks*4)-1) {
       	 		cardValue='redraw';
       	 		break;
       	 	}
       	 	cardValue = h5.value;
       	 	h5.drawn+=1;
       	 	shoeDone+=1;
        	break;
    	case 5:
        	
        	if (h6.drawn>(decks*4)-1) {
       	 		cardValue='redraw';
       	 		break;
       	 	}
       	 	cardValue = h6.value;
       	 	h6.drawn+=1;
       	 	shoeDone+=1;
        	break;
    	case 6:
        	
        	if (h7.drawn>(decks*4)-1) {
       	 		cardValue='redraw';
       	 		break;
       	 	}
       	 	cardValue = h7.value;
       	 	h7.drawn+=1;
       	 	shoeDone+=1;
        	break;
    	case 7:
        	
        	if (h8.drawn>(decks*4)-1) {
       	 		cardValue='redraw';
       	 		break;
       	 	}
       	 	cardValue = h8.value;
       	 	h8.drawn+=1;
       	 	shoeDone+=1;
        	break; 
    	case 8:
        	
        	if (h9.drawn>(decks*4)-1) {
       	 		cardValue='redraw';
       	 		break;
       	 	}
       	 	cardValue = h9.value;
       	 	h9.drawn+=1;
       	 	shoeDone+=1;
        	break; 
    	case 9:
        	
        	if (hj.drawn>(decks*4)-1) {
       	 		cardValue='redraw';
       	 		break;
       	 	}
       	 	cardValue = hj.value;
       	 	hj.drawn+=1;
       	 	shoeDone+=1;
        	break;
    	case 10:
        	
        	if (hq.drawn>(decks*4)-1) {
       	 		cardValue='redraw';
       	 		break;
       	 	}
       	 	cardValue = hq.value;
       	 	hq.drawn+=1;
       	 	shoeDone+=1;
        	break;  
    	case 11:
        	
        	if (hk.drawn>(decks*4)-1) {
       	 		cardValue='redraw';
       	 		break;
       	 	}
       	 	cardValue = hk.value;
       	 	hk.drawn+=1;
       	 	shoeDone+=1;
        	break;
    	default:
       		break; 
		}
	}

function blackJack(){
	var playerTotalDisplayLeft= document.getElementById('player-total-left');
	playerTotalDisplayLeft.innerHTML = "Black Jack!";
	playerBlackJack=true;
	hitButton.innerHTML = 'DEAL';
}

function stand(){

}

function deal(){
	hitButton.innerHTML = 'HIT';
	playerTotal=0;
	$('.cards-player').remove();
	gameTextLeft.style.display='none';
	dealerHit();
	hit();
	hit();
	if (playerTotal==21) {
		blackJack();
	}
}

function hit(){	
	var playerTotalDisplayLeft= document.getElementById('player-total-left');
	var newCard = document.createElement("div");
	var left = document.getElementById('left');

	if (playerTotal>21||playerBlackJack==true) { //if player is busted new hand.
		hasAce=false;
		hasHighAce=false;
		playerBlackJack=false;
		deal();
		return;
	}

	function bust(){
		gameTextLeft.style.display='block';
	}

	newCardValue();
	while (cardValue=='redraw') {
		newCardValue();
		if (shoeDone>=(48*decks)) {
			h1.drawn=0;
			h2.drawn=0;
			h3.drawn=0;
			h4.drawn=0;
			h5.drawn=0;
			h6.drawn=0;
			h7.drawn=0;
			h8.drawn=0;
			h9.drawn=0;
			hj.drawn=0;
			hq.drawn=0;
			hk.drawn=0;
			shoeDone=0;
		}
	}
	playerTotal+= cardValue;
	
	if (hasHighAce==true&&playerTotal>21) {
		playerTotal-=10;
		hasHighAce=false;
	}
	
	newCard.classList.add('cards-player');
	if (cardValue==11||cardValue==1) {
		cardValue='A';
	}
	newCard.innerHTML = cardValue;
	if (hasHighAce==false) {
		playerTotalDisplayLeft.innerHTML = "Total: "+playerTotal;
	}
	if (hasHighAce==true&&playerTotal!=21) {
		playerTotalDisplayLeft.innerHTML = "Total: "+playerTotal+' or '+(playerTotal-10);
	}
	left.appendChild(newCard);
	if (playerTotal>21) {
		bust();
	}
	if (playerTotal==21) {
		stand();
	}
	if (playerTotal>21) { //if player busts change hit button to deal
		hitButton.innerHTML = 'DEAL';
	}
}

function dealerHit(){
	var newCard = document.createElement("div");
		newCardValue();
	while (cardValue=='redraw') {
		newCardValue();
		if (shoeDone>=(48*decks)) {
			h1.drawn=0;
			h2.drawn=0;
			h3.drawn=0;
			h4.drawn=0;
			h5.drawn=0;
			h6.drawn=0;
			h7.drawn=0;
			h8.drawn=0;
			h9.drawn=0;
			hj.drawn=0;
			hq.drawn=0;
			hk.drawn=0;
			shoeDone=0;
		}
	}
	newCard.classList.add('cards-player');
	newCard.innerHTML = cardValue;
	dealer.appendChild(newCard);
}
