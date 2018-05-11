var teesheet= document.getElementById('teesheet');
var teeTimeArray= [];
var teeTimeServerData=
	[
	{
		time: 600,
		available: true,
		deal: false
	},
	{
		time: 610,
		available: false,
		deal: false
	},
	{
		time: 620,
		available: false,
		deal: false
	},
	{
		time: 630,
		available: true,
		deal: false
	}
	]
while (teesheet.firstChild) {
	    teesheet.removeChild(teesheet.firstChild);
	}
for (var i = 0; i < teeTimeServerData.length; i++) {
	TeetimeProduce(teeTimeServerData[i].time,teeTimeServerData[i].available,teeTimeServerData[i].deal)
}



function TeetimeProduce(time,available,deal) {
	this.time= time;
	this.available= available;
	var teeTimeNode= document.createElement("UL");
	var timeTextNode= document.createTextNode(this.time)
	var lineBreak= document.createElement("br");
	this.append= function(){
		teeTimeNode.appendChild(timeTextNode);
		teeTimeNode.appendChild(lineBreak);
		teesheet.appendChild(teeTimeNode);
		if (available===false) {
		teeTimeNode.classList.add('not-available')
	}
	}
	append();
}

	/*while (teesheet.firstChild) {
	    teesheet.removeChild(teesheet.firstChild);
	}*/
