/*REMOVE COMMENT FROM NEW CARD VAlue to work
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*/
(function() {

var mainHandActive= true;
var playerHasSplit= false; 
var decks=1; //number of decks in game
var shoeDone=0; //when this number reaches 48 a new shoe starts
var faceDownValue;
var hitButton= document.getElementById('hit');
var standButton= document.getElementById('stand');
var splitButton= document.getElementById('split');
var dealButton= document.getElementById('deal');
var doubleDownButton= document.getElementById('double-down');
var table = document.getElementById('table');
var playerTotalDisplayRight= document.getElementById('player-total-right');
var splitButtonOn= false;
var splitModeOn= false;
var cardValue;
var playerBlackJack = false;
var hasHighAce= false;
var hasAce= false;
var dealerHasHighAce= false;
var dealerHasAce= false;
var playerTotal=0;
var playerTotalRight=null;
var dealerTotal=0;
var gameTextLeft= document.getElementById('game-text-left');
var gameTextRight= document.getElementById('game-text-right')
var dealer= document.getElementById('dealer');
var h1 = {value: 11, suit:'heart',ace:true, index:0, drawn:0};
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

hitButton.addEventListener('click',hit,false);
dealButton.addEventListener('click',deal,false);
standButton.addEventListener('click',stand,false);
doubleDownButton.addEventListener('click',doubleDown,false);
splitButton.addEventListener('click',split,false);

function newCardValue(){
		function randomInt(min,max){
			return Math.floor(Math.random()*(max-min+1)+min);
		}
		var cardNumber= randomInt(0,11);
		switch(cardNumber) {
    	case 0:
    	    if (h1.drawn>(decks*4)-1) {
       	 		cardValue='redraw';
       	 		break;
       	 	}
       	 	cardValue = h1.value;
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
  standButton.style.display= 'none';
	hitButton.style.display = 'none';
  doubleDownButton.style.display= 'none';
  dealButton.style.display = 'inline-block';
}

function dealDebug(){
  var dealerTotalDisplay =document.getElementById('dealer-total');
  var playerTotalDisplayLeft =document.getElementById('player-total-left');
  var firstCardValue;
  function displayButtons(){
    doubleDownButton.style.display='inline-block';
    hitButton.style.display = 'inline-block';
    standButton.style.display='inline-block';
  }
  function setFirstCardValue(){
    firstCardValue=cardValue;
  }  
  function splitBlackJackCheck(){
    if (playerTotal/2==firstCardValue||(firstCardValue=='A'&&playerTotal==12)) {
      splitButtonOn= true;
      splitButton.style.display='inline-block';
    }
    if (playerTotal==21) {
      blackJack();
    }
  }
  playerTotal=0;
  dealerTotal=0;
  $('.cards-player').remove();
  playerTotalDisplayLeft.innerHTML= 'Total: 0';
  dealerTotalDisplay.innerHTML= '';
  gameTextLeft.style.display='none';
  hasAce=false;
  hasHighAce=false;
  dealerHasHighAce=false;
  window.setTimeout(dealerHitFaceDown,1);
  window.setTimeout(dealerHit,2); 
  window.setTimeout(hit,3);
  window.setTimeout(setFirstCardValue,4);
  window.setTimeout(hit,5);
  window.setTimeout(splitBlackJackCheck,7);
  window.setTimeout(displayButtons,6);
  dealButton.style.display = 'none';
}

function deal(){
  var dealerTotalDisplay =document.getElementById('dealer-total');
  var playerTotalDisplayLeft =document.getElementById('player-total-left');
  var firstCardValue;
  function displayButtons(){
    doubleDownButton.style.display='inline-block';
    hitButton.style.display = 'inline-block';
    standButton.style.display='inline-block';
  }
  function setFirstCardValue(){
    firstCardValue=cardValue;
  }  
  function splitBlackJackCheck(){
    if (playerTotal/2==firstCardValue||(firstCardValue=='A'&&playerTotal==12)) {
      splitButtonOn= true;
      splitButton.style.display='inline-block';
    }
    if (playerTotal==21) {
      blackJack();
    }
  }
	playerTotal=0;
  dealerTotal=0;
	$('.cards-player').remove();
  playerTotalDisplayLeft.innerHTML= 'Total: 0';
  dealerTotalDisplay.innerHTML= '';
	gameTextLeft.style.display='none';
  hasAce=false;
  hasHighAce=false;
  dealerHasHighAce=false;
  window.setTimeout(dealerHitFaceDown,100);
  window.setTimeout(dealerHit,1000); 
  window.setTimeout(hit,2000);
  window.setTimeout(setFirstCardValue,2001);
  window.setTimeout(hit,2003);
  window.setTimeout(splitBlackJackCheck,2004);
  window.setTimeout(displayButtons,2003);
  dealButton.style.display = 'none';
}

function bust(){
  if (splitModeOn==false&&mainHandActive===true) {
    var faceDownCard =document.getElementsByClassName('cards-player-face-down')[0];
    var dealerTotalDisplay =document.getElementById('dealer-total');
    gameTextLeft.style.display='inline-block';
    standButton.style.display = 'none';
    hitButton.style.display = 'none';
    dealButton.style.display = 'inline-block';
    faceDownCard.classList.add('cards-player');
    faceDownCard.innerHTML = faceDownValue;
    faceDownCard.classList.remove('cards-player-face-down');
    dealerTotal+= faceDownValue;
    dealerTotalDisplay.innerHTML = "Total: "+dealerTotal;
    gameTextLeft.style.display='inline-block';
    gameTextLeft.innerHTML='Bust';
  }
  if (mainHandActive==true&&splitModeOn==true){
    gameTextLeft.style.display='inline-block';
    changeHands();
  }
  else{
    var faceDownCard =document.getElementsByClassName('cards-player-face-down')[0];
    var dealerTotalDisplay =document.getElementById('dealer-total');
    gameTextRight.style.display='inline-block';
    standButton.style.display = 'none';
    hitButton.style.display = 'none';
    dealButton.style.display = 'inline-block';
    faceDownCard.classList.add('cards-player');
    faceDownCard.innerHTML = faceDownValue;
    faceDownCard.classList.remove('cards-player-face-down');
    dealerTotal+= faceDownValue;
    dealerTotalDisplay.innerHTML = "Total: "+dealerTotal;
    gameTextRight.style.display='inline-block';
    gameTextRight.innerHTML='Bust';
  }
}

function hit(){	
	var playerTotalDisplayLeft= document.getElementById('player-total-left');
	var newCard = document.createElement("div");
	var left = document.getElementById('left');
  doubleDownButton.style.display='none';
  if (splitButtonOn==true) {
    splitButtonOn= false;
    splitButton.style.display='none';
    }  
	if (playerTotal>21) { //if player is busted new hand.
		bust();
	}
  if(mainHandActive==true) {
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
  	if (cardValue==11&&hasAce==true) {
  			cardValue=1;
  	}
  	if (cardValue==11) {
  		if (playerTotal<=10) {
  			hasHighAce=true;
  			}
  		if (playerTotal>10) {
  			cardValue=1;
  		}
  			hasAce=true;
  	}
  	playerTotal+= cardValue;
  
  	if (hasHighAce==true&&playerTotal>21) {
  		playerTotal-=10;
  		hasHighAce=false;
  		if (cardValue==11) {
  			hasHighAce=true;
  		}
  	}
  	
  	newCard.classList.add('cards-player');
  	if (cardValue==11||cardValue==1) {
  		cardValue='A';
  	}
  	newCard.innerHTML = cardValue;
  	if (hasHighAce==false||playerTotal==21) {
  		playerTotalDisplayLeft.innerHTML = "Total: "+playerTotal;
  	}
  	if (hasHighAce==true&&playerTotal!=21) {
  		playerTotalDisplayLeft.innerHTML = "Total: "+playerTotal+' or '+(playerTotal-10);
  	}
  	left.appendChild(newCard);
    $(newCard).hide().delay(200).show("slow");
  	if (playerTotal>21) {
  		bust();
  	}
  	if (playerTotal==21&&playerBlackJack!=true) {
  		stand();
  	}
  }
  if(mainHandActive==false) {
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
    if (cardValue==11&&hasAce==true) {
        cardValue=1;
    }
    if (cardValue==11) {
      if (playerTotalRight<=10) {
        hasHighAce=true;
        }
      if (playerTotalRight>10) {
        cardValue=1;
      }
        hasAce=true;
    }
    playerTotalRight+= cardValue;
  
    if (hasHighAce==true&&playerTotalRight>21) {
      playerTotalRight-=10;
      hasHighAce=false;
      if (cardValue==11) {
        hasHighAce=true;
      }
    }
    
    newCard.classList.add('cards-player');
    if (cardValue==11||cardValue==1) {
      cardValue='A';
    }
    newCard.innerHTML = cardValue;
    if (hasHighAce==false||playerTotalRight==21) {
      playerTotalDisplayRight.innerHTML = "Total: "+playerTotalRight;
    }
    if (hasHighAce==true&&playerTotalRight!=21) {
      playerTotalDisplayRight.innerHTML = "Total: "+playerTotalRight+' or '+(playerTotalRight-10);
    }
    right.appendChild(newCard);
    $(newCard).hide().delay(200).show("slow");
    if (playerTotalRight>21) {
      bust();
    }
    if (playerTotalRight==21&&playerBlackJack!=true) {
      stand();
    }
  }
}

function dealerHit(){
	var newCard = document.createElement("div");
  var dealerTotalDisplay = document.getElementById("dealer-total");
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
    if (cardValue==11&&dealerHasAce==true) {
      cardValue=1;
  }
  if (cardValue==11) {
    if (dealerTotal<=10) {
      dealerHasHighAce=true;
      }
    if (dealerHasAce==true||dealerTotal>10) {
      cardValue=1;
    }
      dealerHasAce=true;
  }

  dealerTotal+= cardValue;

  if (dealerHasHighAce==true&&dealerTotal>21) {
    dealerTotal-=10;
    dealerHasHighAce=false;
    if (cardValue==11) {
      dealerHasHighAce=true;
    }
  }
  
  newCard.classList.add('cards-player');
  if (cardValue==11||cardValue==1) {
    cardValue='A';
  }
  left.appendChild(newCard);
	newCard.classList.add('cards-player');
	newCard.innerHTML = cardValue;
  $(newCard).hide().delay(200).show("slow").delay(1000);
	dealer.appendChild(newCard);
}

function dealerHitFaceDown(){
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
  newCard.classList.add('cards-player-face-down');
  dealer.appendChild(newCard);
  $(newCard).hide().delay(1000).show("slow").delay(1000);
  faceDownValue=cardValue;
}

function stand(){
  if (splitModeOn==false) {
    var faceDownCard =document.getElementsByClassName('cards-player-face-down')[0];
    var dealerTotalDisplay = document.getElementById("dealer-total");
    standButton.style.display='none';
    hitButton.style.display= 'none';
    splitButton.style.display= 'none';
    dealButton.style.display= 'inline-block';
    doubleDownButton.style.display='none';
    faceDownCard.classList.add('cards-player');
    faceDownCard.innerHTML = faceDownValue;
    faceDownCard.classList.remove('cards-player-face-down');
    dealerTotal+= faceDownValue;
    while (dealerTotal<17) {
      dealerHit();
    }
    dealerTotalDisplay.innerHTML = "Total: "+dealerTotal;
    if ((playerTotal>dealerTotal&&playerTotal<=21)||dealerTotal>21) {
      leftVictory();    
    }
    if (playerTotal<dealerTotal&&dealerTotal<=21) {
      leftDefeat();
    }
    if (playerTotal==dealerTotal) {
      leftPush();
    }
  }
  else{
    changeHands();
  }
}

function leftVictory(){
  gameTextLeft.style.display='inline-block';
  gameTextLeft.innerHTML='Win';
}

function leftDefeat(){
  gameTextLeft.style.display='inline-block';
  gameTextLeft.innerHTML='Lose';
}
function leftPush(){
  gameTextLeft.style.display='inline-block';
  gameTextLeft.innerHTML='Push';
}

function split(){
  var left = document.getElementById('left');
  var playerTotalDisplayRight= document.getElementById('player-total-right');
  var playerTotalDisplayLeft= document.getElementById('player-total-left');
  var newCard = document.createElement("div");
  var right = document.getElementById('right');
  $('#left div:nth-child(3)').remove();
  if (playerTotal==13) {
    playerTotal=11;
    playerTotalRight=11;
  }
  else{
    playerTotal=(playerTotal/2);
    playerTotalRight=(playerTotal/2);
  }
  playerTotalDisplayLeft.innerHTML = "Total: "+playerTotal;
  playerTotalDisplayRight.innerHTML = "Total: "+playerTotal;
  splitModeOn = true;
  newCard.innerHTML = cardValue;
  console.log(cardValue);
  splitButton.style.display='none';
  newCard.classList.add('cards-player');
  right.appendChild(newCard);
}

function changeHands(){
  var right = document.getElementById('right');
  var left = document.getElementById('left');
  splitModeOn=false;
  mainHandActive=false;
  if (playerTotalRight!=11) {
    hasAce=false;
    hasHighAce=false;
  }
  right.classList.add('active');
  left.classList.remove('active');
}

function doubleDown(){
  doubleDownButton.style.display='none';
  hit();
  stand();
}

})();