(function() {

var date = new Date(); //this date is used to get the current month and the current year
var month = date.getMonth(); //This is the current month
var next = document.getElementById('next-month');
var prev = document.getElementById('prev-month');
var year = date.getFullYear();
var dateCalcArray = 
[dateCalcWithLeap(5),dateCalcWithLeap(1),dateCalc(1),dateCalc(4)
,dateCalc(6),dateCalc(2),dateCalc(4),dateCalc(0),
dateCalc(3),dateCalc(5),dateCalc(1),dateCalc(3)];//This array runs the date calc function where n is the day of the week of the first of each month in 2010
//the following block displays the current year
var monthLabelBox=document.getElementsByClassName('month-label')[0];
var yearLabel = document.createElement('div');
var numberOfDaysInFeb

if (year%4==0) {
	numberOfDaysInFeb=29;
}
else{
	numberOfDaysInFeb=28;
}

yearLabel.textContent = year;
yearLabel.classList.add('year-name');
monthLabelBox.appendChild(yearLabel);
if (month==0) {
	prev.style.display='none';
}
if (month==11) {
	next.style.display='none';
}

function dateCalc(n){//Calculates how many date boxes need to be added to beggining of month. March through December
	var calc = n+(year-2010)+(Math.floor((year-2008)/4));//adds one for every leap year since 2010
	if(calc>6){
		for (calc; calc > 6; ) {
			calc-=7;
		}
	}
	return calc;
}
function dateCalcWithLeap(n){//Calculates how many date boxes need to be added to beggining of month. January and Feb.
	var calc = n+(year-2010)+(Math.floor((year-2009)/4));//adds one for every year after leap year since 2010
	if(calc>6){
		for (calc; calc > 6; ) {
			calc-=7;
		}
	}
	return calc;
}

createDateBox(0,'cal-body',31);
createDateBox(0,'cal-void',dateCalcArray[0]);

createDateBox(1,'cal-body',numberOfDaysInFeb);
createDateBox(1,'cal-void',dateCalcArray[1]);

createDateBox(2,'cal-body',31);
createDateBox(2,'cal-void',dateCalcArray[2]);

createDateBox(3,'cal-body',30);
createDateBox(3,'cal-void',dateCalcArray[3]);

createDateBox(4,'cal-body',31);
createDateBox(4,'cal-void',dateCalcArray[4]);

createDateBox(5,'cal-body',30);
createDateBox(5,'cal-void',dateCalcArray[5]);

createDateBox(6,'cal-body',31);
createDateBox(6,'cal-void',dateCalcArray[6]);

createDateBox(7,'cal-body',31);
createDateBox(7,'cal-void',dateCalcArray[7]);

createDateBox(8,'cal-body',30);
createDateBox(8,'cal-void',dateCalcArray[8]);

createDateBox(9,'cal-body',31);
createDateBox(9,'cal-void',dateCalcArray[9]);

createDateBox(10,'cal-body',30);
createDateBox(10,'cal-void',dateCalcArray[10]);

createDateBox(11,'cal-body',31);
createDateBox(11,'cal-void',dateCalcArray[11]);


function createDateBox(monthInt,boxClass,amount){
	var monthContainer = document.getElementsByClassName('month');
	for (var i = 0; i < amount; i++) {
		var calBox = document.createElement('DIV');//This is the blank box
		calBox;
		calBox.classList.add(boxClass);
		if (boxClass=='cal-body') {
			calBox.textContent= amount-i;
		}
		monthContainer[monthInt].insertBefore(calBox, monthContainer[monthInt].children[7]);//children 7 inserts the blank after the day of the week labels
	}
}

next.addEventListener('click',showNextMonth,false);
prev.addEventListener('click',showPrevMonth,false);
showMonth();
function showMonth() { //Shows the Current Month
	var monthLabel = document.getElementsByClassName('month-name');
	var dayBoxes = document.getElementsByClassName('month');
	switch (month) {
		case 0:
			$(monthLabel[0]).fadeIn(500);
			dayBoxes[0].style.display='block';
		break;
		case 1:
			var year = date.getFullYear();
			$(monthLabel[1]).fadeIn(500);
			dayBoxes[1].style.display='block';
			if (year%4==0) {
				var leapDay = document.getElementById('leap-day');
				leapDay.style.display='block';
			}
		break;		
		case 2:
			$(monthLabel[2]).fadeIn(500);
			dayBoxes[2].style.display='block';
		break;		
		case 3:
			$(monthLabel[3]).fadeIn(500);
			dayBoxes[3].style.display='block';
		break;		
		case 4:
			$(monthLabel[4]).fadeIn(500);
			dayBoxes[4].style.display='block';
		break;		
		case 5:
			$(monthLabel[5]).fadeIn(500);
			dayBoxes[5].style.display='block';
		break;
		case 6:
			$(monthLabel[6]).fadeIn(500);
			dayBoxes[6].style.display='block';
		break;
		case 7:
			$(monthLabel[7]).fadeIn(500);
			dayBoxes[7].style.display='block';
		break;
		case 8:
			$(monthLabel[8]).fadeIn(500);
			dayBoxes[8].style.display='block';
		break;
		case 9:
			$(monthLabel[9]).fadeIn(500);
			dayBoxes[9].style.display='block';
		break;
		case 10:
			$(monthLabel[10]).fadeIn(500);
			dayBoxes[10].style.display='block';
		break;
		case 11:
			$(monthLabel[11]).fadeIn(500);
			dayBoxes[11].style.display='block';
		break;													
	}
};
function showNextMonth(){
	if (prev.style.display='none') {
		prev.style.display='block';
	}
	month+=1;
	if(month>10){
		next.style.visibility='hidden';
		month=11;
	}
	if(month===1){
		prev.style.visibility='visible';
	}
	var monthLabel = document.getElementsByClassName('month-name');
	var dayBoxes = document.getElementsByClassName('month');
	for (var i = 0; i < monthLabel.length; i++) {
		monthLabel[i].style.display='none';
	}
	for (var i = 0; i < dayBoxes.length; i++) {
		dayBoxes[i].style.display='none';
	}
	showMonth();
}
function showPrevMonth(){
	if (next.style.display='none') {
		next.style.display='block';
	}
	month-=1;
	if(month<1){
	prev.style.visibility='hidden';
	month=0
	}
	if(month===10){
		next.style.visibility='visible'
	}
	var monthLabel = document.getElementsByClassName('month-name');
	var dayBoxes = document.getElementsByClassName('month');
	for (var i = 0; i < monthLabel.length; i++) {
		monthLabel[i].style.display='none';
	}
	for (var i = 0; i < dayBoxes.length; i++) {
		dayBoxes[i].style.display='none';
	}
	showMonth();
}

}
)();