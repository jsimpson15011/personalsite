<!DOCTYPE html>
<html>
<head>
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>	
<link rel="shortcut icon" href="favicon.ico">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">

<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.1/react.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.1/react-dom.min.js"></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

<link href="css/styles.css" type="text/css"
rel="stylesheet"/>
<?php
	$data = 'ajax is confusing';
	$test = json_encode($data);
	parse_str($_SERVER['QUERY_STRING']);
	echo json_encode($app);
?>
<title>Joseph Simpson Designer|Developer</title>
<img src="images/logo.png" id="logo">
<h1 id="title-text-1">joseph<span class="green-text">Simpson</span></h1>
<h1 id="title-text-2">Designer</h1>
<h1 id="title-text-3">Developer</h1>
</head>
<div id="root"></div>
<body>
	<div id="contact-form" class="col-sm-7 hidden">
		<span class="glyphicon glyphicon-remove-circle close-button"></span>
		<h2>Joseph Simpson</h2>
		<div class="row">
			<div class="col-md-6">
				<a href="https://www.upwork.com/o/profiles/users/_~01ecbd84a394ec6dc4/" target="empty">Upwork Account</a>
			</div>
			<div class="col-md-6">
				<a href="https://github.com/jsimpson15011" target="empty">GitHub Account</a>
			</div>
		</div>
		<div class="row">
			<div class="col-md-6">
				<span class="glyphicon glyphicon-envelope"></span> Email: Joseph.franklin.simpson@gmail.com
			</div>
			<div class="col-md-6">
				<span class="glyphicon glyphicon-earphone"></span> Phone: (605)-393-5107
			</div>
		</div>
	</div>
	<div class="background-shapes" id="body-trapezoid">
		<nav class="navbar navbar-inverse">
			<div class="container-fluid">
				<ul class="nav navbar-nav hidden-xs">
					<li><a href="index.html"><span class="glyphicon glyphicon-home"></span> Home</a> </li>
					<li class="active"><a href="#"><span class="glyphicon glyphicon-wrench"></span> App Showcase</a></li>
					<li><a class ="contact-button" href="contact.html"><span class="glyphicon glyphicon-user"></span> Contact</a></li>
				</ul>
			</div>
		</nav>
	</div>
	<div class="background-shapes container-fluid" id="body-square">
		<div class="row">
			<div class="col-sm-1 col-md-0" id="side-nav">
				<nav class="visible-xs navbar-inverse">
					<ul class="nav nav-pills nav-stacked">
						<li><a href="index.html"><span class="glyphicon glyphicon-home"></span> Home</a> </li>
						<li class="active"><a href="#"><span class="glyphicon glyphicon-wrench"></span> App Showcase</a></li>
						<li><a href="contact.html" class="contact-button"><span class="glyphicon glyphicon-user"></span> Contact</a></li>
					</ul>
				</nav>
			</div>
			<div class="col-sm-2" id="side-text-container">
				<h2>App Showcase</h2>
				<div class="app-showcase-nav">
					<button type="button" class= "btn-primary">Black Jack</button>
					<div class="app-explanation">Skills used: Javascript, Jquery. sdlkjalsdjf;lasdkjfl sdkjaflkjasdf;lkjasdflkj sdlfkj;k </div>
				</div>
				<div class="app-showcase-nav">
					<button type="button" class= "btn-primary nav-stacked">Calendar</button>
					<div class="app-explanation">sdjjlkjsdaflk jasd; flkjk jlkjl</div>
				</div>
			</div>
		<div class="col-sm-8 col-xs-10 app black-jack" id="table">
			<div id="test">TEST</div>
			<div id="dealer"><div id="dealer-total"></div></div>
			<div id="bet-text">Place Your Bets. <br>Press Hit When Ready</div>
			<div id="game-text-left">Bust</div>
			<div id="left" class="active">
				<div id="player-total-left"></div>
			</div>
			
			<div id="right">
				<div id="player-total-right"></div>
			</div>
			<div id="black-jack-buttons-container">
				<div id="hit" class="black-jack-buttons">HIT</div>
				<div id ="stand" class="black-jack-buttons">STAND</div>
				<div id="double-down" class="black-jack-buttons">DOUBLE DOWN</div>
				<div id="deal" class="black-jack-buttons">DEAL</div>
				<div id="split" class="black-jack-buttons">SPLIT</div>
			</div>
		</div>
		<div id="calendar-app" class="col-sm-8 col-xs-10 app calendar">
			<div class=month-label>
				<div id=prev-month>
				</div>
				<div class="month-name">January</div>
				<div class="month-name">February</div>
				<div class="month-name">March</div>
				<div class="month-name">April</div>
				<div class="month-name">May</div>
				<div class="month-name">June</div>
				<div class="month-name">July</div>
				<div class="month-name">August</div>
				<div class="month-name">September</div>
				<div class="month-name">October</div>
				<div class="month-name">November</div>
				<div class="month-name">December</div>
				<div class="year-name"></div>
				<div id=next-month></div>
			</div>
			<div class="month" id="Jan">
				<div class="week-label">Sunday</div>
				<div class="week-label">Monday</div>
				<div class="week-label">Tuesday</div>
				<div class="week-label">Wednesday</div>
				<div class="week-label">Thursday</div>
				<div class="week-label">Friday</div>
				<div class="week-label">Saturday</div>
				<div class="cal-body">
					<div class="day">1</div>
				</div>
				<div class="cal-body">
					<div class="day">2</div>
				</div>
				<div class="cal-body">
					<div class="day">3</div>
				</div>
				<div class="cal-body">	
					<div class="day">4</div>
				</div>
				<div class="cal-body">	
					<div class="day">5</div>
				</div>
				<div class="cal-body">	
					<div class="day">6</div>
				</div>
				<div class="cal-body">	
					<div class="day">7</div>
				</div>
				<div class="cal-body">	
					<div class="day">8</div>
				</div>
				<div class="cal-body">	
					<div class="day">9</div>
				</div>
				<div class="cal-body">	
					<div class="day">10</div>
				</div>
				<div class="cal-body">	
					<div class="day">11</div>
				</div>
				<div class="cal-body">	
					<div class="day">12</div>
				</div>
				<div class="cal-body">	
					<div class="day">13</div>
				</div>
				<div class="cal-body">	
					<div class="day">14</div>
				</div>
				<div class="cal-body">	
					<div class="day">15</div>
				</div>
				<div class="cal-body">	
					<div class="day">16</div>
				</div>
				<div class="cal-body">	
					<div class="day">17</div>
				</div>
				<div class="cal-body">	
					<div class="day">18</div>
				</div>
				<div class="cal-body">	
					<div class="day">19</div>
				</div>
				<div class="cal-body">	
					<div class="day">20</div>
				</div>
				<div class="cal-body">	
					<div class="day">21</div>
				</div>
				<div class="cal-body">	
					<div class="day">22</div>
				</div>
				<div class="cal-body">	
					<div class="day">23</div>
				</div>
				<div class="cal-body">	
					<div class="day">24</div>
				</div>
				<div class="cal-body">	
					<div class="day">25</div>
				</div>
				<div class="cal-body">	
					<div class="day">26</div>
				</div>
				<div class="cal-body">	
					<div class="day">27</div>
				</div>
				<div class="cal-body">	
					<div class="day">28</div>
				</div>
				<div class="cal-body">	
					<div class="day">29</div>
				</div>	
				<div class="cal-body">	
					<div class="day">30</div>
				</div>
				<div class="cal-body">	
					<div class="day">31</div>
				</div>
			</div>
			<div class="month" id="Feb">
				<div class="week-label">Sunday</div>
				<div class="week-label">Monday</div>
				<div class="week-label">Tuesday</div>
				<div class="week-label">Wednesday</div>
				<div class="week-label">Thursday</div>
				<div class="week-label">Friday</div>
				<div class="week-label">Saturday</div>
				<div class="cal-body">
					<div class="day">1</div>
				</div>
				<div class="cal-body">
					<div class="day">2</div>
				</div>
				<div class="cal-body">
					<div class="day">3</div>
				</div>
				<div class="cal-body">	
					<div class="day">4</div>
				</div>
				<div class="cal-body">	
					<div class="day">5</div>
				</div>
				<div class="cal-body">	
					<div class="day">6</div>
				</div>
				<div class="cal-body">	
					<div class="day">7</div>
				</div>
				<div class="cal-body">	
					<div class="day">8</div>
				</div>
				<div class="cal-body">	
					<div class="day">9</div>
				</div>
				<div class="cal-body">	
					<div class="day">10</div>
				</div>
				<div class="cal-body">	
					<div class="day">11</div>
				</div>
				<div class="cal-body">	
					<div class="day">12</div>
				</div>
				<div class="cal-body">	
					<div class="day">13</div>
				</div>
				<div class="cal-body">	
					<div class="day">14</div>
				</div>
				<div class="cal-body">	
					<div class="day">15</div>
				</div>
				<div class="cal-body">	
					<div class="day">16</div>
				</div>
				<div class="cal-body">	
					<div class="day">17</div>
				</div>
				<div class="cal-body">	
					<div class="day">18</div>
				</div>
				<div class="cal-body">	
					<div class="day">19</div>
				</div>
				<div class="cal-body">	
					<div class="day">20</div>
				</div>
				<div class="cal-body">	
					<div class="day">21</div>
				</div>
				<div class="cal-body">	
					<div class="day">22</div>
				</div>
				<div class="cal-body">	
					<div class="day">23</div>
				</div>
				<div class="cal-body">	
					<div class="day">24</div>
				</div>
				<div class="cal-body">	
					<div class="day">25</div>
				</div>
				<div class="cal-body">	
					<div class="day">26</div>
				</div>
				<div class="cal-body">	
					<div class="day">27</div>
				</div>
				<div class="cal-body">	
					<div class="day">28</div>
				</div>
				<div class="cal-body" id="leap-day">	
					<div class="day">29</div>
				</div>
			</div>
			<div class="month" id="Mar">
				<div class="week-label">Sunday</div>
				<div class="week-label">Monday</div>
				<div class="week-label">Tuesday</div>
				<div class="week-label">Wednesday</div>
				<div class="week-label">Thursday</div>
				<div class="week-label">Friday</div>
				<div class="week-label">Saturday</div>
				<div class="cal-body">
					<div class="day">1</div>
				</div>
				<div class="cal-body">
					<div class="day">2</div>
				</div>
				<div class="cal-body">
					<div class="day">3</div>
				</div>
				<div class="cal-body">	
					<div class="day">4</div>
				</div>
				<div class="cal-body">	
					<div class="day">5</div>
				</div>
				<div class="cal-body">	
					<div class="day">6</div>
				</div>
				<div class="cal-body">	
					<div class="day">7</div>
				</div>
				<div class="cal-body">	
					<div class="day">8</div>
				</div>
				<div class="cal-body">	
					<div class="day">9</div>
				</div>
				<div class="cal-body">	
					<div class="day">10</div>
				</div>
				<div class="cal-body">	
					<div class="day">11</div>
				</div>
				<div class="cal-body">	
					<div class="day">12</div>
				</div>
				<div class="cal-body">	
					<div class="day">13</div>
				</div>
				<div class="cal-body">	
					<div class="day">14</div>
				</div>
				<div class="cal-body">	
					<div class="day">15</div>
				</div>
				<div class="cal-body">	
					<div class="day">16</div>
				</div>
				<div class="cal-body">	
					<div class="day">17</div>
				</div>
				<div class="cal-body">	
					<div class="day">18</div>
				</div>
				<div class="cal-body">	
					<div class="day">19</div>
				</div>
				<div class="cal-body">	
					<div class="day">20</div>
				</div>
				<div class="cal-body">	
					<div class="day">21</div>
				</div>
				<div class="cal-body">	
					<div class="day">22</div>
				</div>
				<div class="cal-body">	
					<div class="day">23</div>
				</div>
				<div class="cal-body">	
					<div class="day">24</div>
				</div>
				<div class="cal-body">	
					<div class="day">25</div>
				</div>
				<div class="cal-body">	
					<div class="day">26</div>
				</div>
				<div class="cal-body">	
					<div class="day">27</div>
				</div>
				<div class="cal-body">	
					<div class="day">28</div>
				</div>
				<div class="cal-body">	
					<div class="day">29</div>
				</div>	
				<div class="cal-body">	
					<div class="day">30</div>
				</div>
				<div class="cal-body">	
					<div class="day">31</div>
				</div>
			</div>
			<div class="month" id="Apr">
				<div class="week-label">Sunday</div>
				<div class="week-label">Monday</div>
				<div class="week-label">Tuesday</div>
				<div class="week-label">Wednesday</div>
				<div class="week-label">Thursday</div>
				<div class="week-label">Friday</div>
				<div class="week-label">Saturday</div>
				<div class="cal-body">
					<div class="day">1</div>
				</div>
				<div class="cal-body">
					<div class="day">2</div>
				</div>
				<div class="cal-body">
					<div class="day">3</div>
				</div>
				<div class="cal-body">	
					<div class="day">4</div>
				</div>
				<div class="cal-body">	
					<div class="day">5</div>
				</div>
				<div class="cal-body">	
					<div class="day">6</div>
				</div>
				<div class="cal-body">	
					<div class="day">7</div>
				</div>
				<div class="cal-body">	
					<div class="day">8</div>
				</div>
				<div class="cal-body">	
					<div class="day">9</div>
				</div>
				<div class="cal-body">	
					<div class="day">10</div>
				</div>
				<div class="cal-body">	
					<div class="day">11</div>
				</div>
				<div class="cal-body">	
					<div class="day">12</div>
				</div>
				<div class="cal-body">	
					<div class="day">13</div>
				</div>
				<div class="cal-body">	
					<div class="day">14</div>
				</div>
				<div class="cal-body">	
					<div class="day">15</div>
				</div>
				<div class="cal-body">	
					<div class="day">16</div>
				</div>
				<div class="cal-body">	
					<div class="day">17</div>
				</div>
				<div class="cal-body">	
					<div class="day">18</div>
				</div>
				<div class="cal-body">	
					<div class="day">19</div>
				</div>
				<div class="cal-body">	
					<div class="day">20</div>
				</div>
				<div class="cal-body">	
					<div class="day">21</div>
				</div>
				<div class="cal-body">	
					<div class="day">22</div>
				</div>
				<div class="cal-body">	
					<div class="day">23</div>
				</div>
				<div class="cal-body">	
					<div class="day">24</div>
				</div>
				<div class="cal-body">	
					<div class="day">25</div>
				</div>
				<div class="cal-body">	
					<div class="day">26</div>
				</div>
				<div class="cal-body">	
					<div class="day">27</div>
				</div>
				<div class="cal-body">	
					<div class="day">28</div>
				</div>
				<div class="cal-body">	
					<div class="day">29</div>
				</div>	
				<div class="cal-body">	
					<div class="day">30</div>
				</div>
			</div>
			<div class="month" id="May">
				<div class="week-label">Sunday</div>
				<div class="week-label">Monday</div>
				<div class="week-label">Tuesday</div>
				<div class="week-label">Wednesday</div>
				<div class="week-label">Thursday</div>
				<div class="week-label">Friday</div>
				<div class="week-label">Saturday</div>
				<div class="cal-body">
					<div class="day">1</div>
				</div>
				<div class="cal-body">
					<div class="day">2</div>
				</div>
				<div class="cal-body">
					<div class="day">3</div>
				</div>
				<div class="cal-body">	
					<div class="day">4</div>
				</div>
				<div class="cal-body">	
					<div class="day">5</div>
				</div>
				<div class="cal-body">	
					<div class="day">6</div>
				</div>
				<div class="cal-body">	
					<div class="day">7</div>
				</div>
				<div class="cal-body">	
					<div class="day">8</div>
				</div>
				<div class="cal-body">	
					<div class="day">9</div>
				</div>
				<div class="cal-body">	
					<div class="day">10</div>
				</div>
				<div class="cal-body">	
					<div class="day">11</div>
				</div>
				<div class="cal-body">	
					<div class="day">12</div>
				</div>
				<div class="cal-body">	
					<div class="day">13</div>
				</div>
				<div class="cal-body">	
					<div class="day">14</div>
				</div>
				<div class="cal-body">	
					<div class="day">15</div>
				</div>
				<div class="cal-body">	
					<div class="day">16</div>
				</div>
				<div class="cal-body">	
					<div class="day">17</div>
				</div>
				<div class="cal-body">	
					<div class="day">18</div>
				</div>
				<div class="cal-body">	
					<div class="day">19</div>
				</div>
				<div class="cal-body">	
					<div class="day">20</div>
				</div>
				<div class="cal-body">	
					<div class="day">21</div>
				</div>
				<div class="cal-body">	
					<div class="day">22</div>
				</div>
				<div class="cal-body">	
					<div class="day">23</div>
				</div>
				<div class="cal-body">	
					<div class="day">24</div>
				</div>
				<div class="cal-body">	
					<div class="day">25</div>
				</div>
				<div class="cal-body">	
					<div class="day">26</div>
				</div>
				<div class="cal-body">	
					<div class="day">27</div>
				</div>
				<div class="cal-body">	
					<div class="day">28</div>
				</div>
				<div class="cal-body">	
					<div class="day">29</div>
				</div>	
				<div class="cal-body">	
					<div class="day">30</div>
				</div>
				<div class="cal-body">	
					<div class="day">31</div>
				</div>
			</div>
			<div class="month" id="Jun">
				<div class="week-label">Sunday</div>
				<div class="week-label">Monday</div>
				<div class="week-label">Tuesday</div>
				<div class="week-label">Wednesday</div>
				<div class="week-label">Thursday</div>
				<div class="week-label">Friday</div>
				<div class="week-label">Saturday</div>
				<div class="cal-body">
					<div class="day">1</div>
				</div>
				<div class="cal-body">
					<div class="day">2</div>
				</div>
				<div class="cal-body">
					<div class="day">3</div>
				</div>
				<div class="cal-body">	
					<div class="day">4</div>
				</div>
				<div class="cal-body">	
					<div class="day">5</div>
				</div>
				<div class="cal-body">	
					<div class="day">6</div>
				</div>
				<div class="cal-body">	
					<div class="day">7</div>
				</div>
				<div class="cal-body">	
					<div class="day">8</div>
				</div>
				<div class="cal-body">	
					<div class="day">9</div>
				</div>
				<div class="cal-body">	
					<div class="day">10</div>
				</div>
				<div class="cal-body">	
					<div class="day">11</div>
				</div>
				<div class="cal-body">	
					<div class="day">12</div>
				</div>
				<div class="cal-body">	
					<div class="day">13</div>
				</div>
				<div class="cal-body">	
					<div class="day">14</div>
				</div>
				<div class="cal-body">	
					<div class="day">15</div>
				</div>
				<div class="cal-body">	
					<div class="day">16</div>
				</div>
				<div class="cal-body">	
					<div class="day">17</div>
				</div>
				<div class="cal-body">	
					<div class="day">18</div>
				</div>
				<div class="cal-body">	
					<div class="day">19</div>
				</div>
				<div class="cal-body">	
					<div class="day">20</div>
				</div>
				<div class="cal-body">	
					<div class="day">21</div>
				</div>
				<div class="cal-body">	
					<div class="day">22</div>
				</div>
				<div class="cal-body">	
					<div class="day">23</div>
				</div>
				<div class="cal-body">	
					<div class="day">24</div>
				</div>
				<div class="cal-body">	
					<div class="day">25</div>
				</div>
				<div class="cal-body">	
					<div class="day">26</div>
				</div>
				<div class="cal-body">	
					<div class="day">27</div>
				</div>
				<div class="cal-body">	
					<div class="day">28</div>
				</div>
				<div class="cal-body">	
					<div class="day">29</div>
				</div>	
				<div class="cal-body">	
					<div class="day">30</div>
				</div>
			</div>
			<div class="month" id="Jul">
				<div class="week-label">Sunday</div>
				<div class="week-label">Monday</div>
				<div class="week-label">Tuesday</div>
				<div class="week-label">Wednesday</div>
				<div class="week-label">Thursday</div>
				<div class="week-label">Friday</div>
				<div class="week-label">Saturday</div>
				<div class="cal-body">
					<div class="day">1</div>
				</div>
				<div class="cal-body">
					<div class="day">2</div>
				</div>
				<div class="cal-body">
					<div class="day">3</div>
				</div>
				<div class="cal-body">	
					<div class="day">4</div>
				</div>
				<div class="cal-body">	
					<div class="day">5</div>
				</div>
				<div class="cal-body">	
					<div class="day">6</div>
				</div>
				<div class="cal-body">	
					<div class="day">7</div>
				</div>
				<div class="cal-body">	
					<div class="day">8</div>
				</div>
				<div class="cal-body">	
					<div class="day">9</div>
				</div>
				<div class="cal-body">	
					<div class="day">10</div>
				</div>
				<div class="cal-body">	
					<div class="day">11</div>
				</div>
				<div class="cal-body">	
					<div class="day">12</div>
				</div>
				<div class="cal-body">	
					<div class="day">13</div>
				</div>
				<div class="cal-body">	
					<div class="day">14</div>
				</div>
				<div class="cal-body">	
					<div class="day">15</div>
				</div>
				<div class="cal-body">	
					<div class="day">16</div>
				</div>
				<div class="cal-body">	
					<div class="day">17</div>
				</div>
				<div class="cal-body">	
					<div class="day">18</div>
				</div>
				<div class="cal-body">	
					<div class="day">19</div>
				</div>
				<div class="cal-body">	
					<div class="day">20</div>
				</div>
				<div class="cal-body">	
					<div class="day">21</div>
				</div>
				<div class="cal-body">	
					<div class="day">22</div>
				</div>
				<div class="cal-body">	
					<div class="day">23</div>
				</div>
				<div class="cal-body">	
					<div class="day">24</div>
				</div>
				<div class="cal-body">	
					<div class="day">25</div>
				</div>
				<div class="cal-body">	
					<div class="day">26</div>
				</div>
				<div class="cal-body">	
					<div class="day">27</div>
				</div>
				<div class="cal-body">	
					<div class="day">28</div>
				</div>
				<div class="cal-body">	
					<div class="day">29</div>
				</div>	
				<div class="cal-body">	
					<div class="day">30</div>
				</div>
				<div class="cal-body">	
					<div class="day">31</div>
				</div>
			</div>
			<div class="month" id="Aug">
				<div class="week-label">Sunday</div>
				<div class="week-label">Monday</div>
				<div class="week-label">Tuesday</div>
				<div class="week-label">Wednesday</div>
				<div class="week-label">Thursday</div>
				<div class="week-label">Friday</div>
				<div class="week-label">Saturday</div>
				<div class="cal-body">
					<div class="day">1</div>
				</div>
				<div class="cal-body">
					<div class="day">2</div>
				</div>
				<div class="cal-body">
					<div class="day">3</div>
				</div>
				<div class="cal-body">	
					<div class="day">4</div>
				</div>
				<div class="cal-body">	
					<div class="day">5</div>
				</div>
				<div class="cal-body">	
					<div class="day">6</div>
				</div>
				<div class="cal-body">	
					<div class="day">7</div>
				</div>
				<div class="cal-body">	
					<div class="day">8</div>
				</div>
				<div class="cal-body">	
					<div class="day">9</div>
				</div>
				<div class="cal-body">	
					<div class="day">10</div>
				</div>
				<div class="cal-body">	
					<div class="day">11</div>
				</div>
				<div class="cal-body">	
					<div class="day">12</div>
				</div>
				<div class="cal-body">	
					<div class="day">13</div>
				</div>
				<div class="cal-body">	
					<div class="day">14</div>
				</div>
				<div class="cal-body">	
					<div class="day">15</div>
				</div>
				<div class="cal-body">	
					<div class="day">16</div>
				</div>
				<div class="cal-body">	
					<div class="day">17</div>
				</div>
				<div class="cal-body">	
					<div class="day">18</div>
				</div>
				<div class="cal-body">	
					<div class="day">19</div>
				</div>
				<div class="cal-body">	
					<div class="day">20</div>
				</div>
				<div class="cal-body">	
					<div class="day">21</div>
				</div>
				<div class="cal-body">	
					<div class="day">22</div>
				</div>
				<div class="cal-body">	
					<div class="day">23</div>
				</div>
				<div class="cal-body">	
					<div class="day">24</div>
				</div>
				<div class="cal-body">	
					<div class="day">25</div>
				</div>
				<div class="cal-body">	
					<div class="day">26</div>
				</div>
				<div class="cal-body">	
					<div class="day">27</div>
				</div>
				<div class="cal-body">	
					<div class="day">28</div>
				</div>
				<div class="cal-body">	
					<div class="day">29</div>
				</div>	
				<div class="cal-body">	
					<div class="day">30</div>
				</div>
				<div class="cal-body">	
					<div class="day">31</div>
				</div>
			</div>
			<div class="month" id="Sep">
				<div class="week-label">Sunday</div>
				<div class="week-label">Monday</div>
				<div class="week-label">Tuesday</div>
				<div class="week-label">Wednesday</div>
				<div class="week-label">Thursday</div>
				<div class="week-label">Friday</div>
				<div class="week-label">Saturday</div>
				<div class="cal-body">
					<div class="day">1</div>
				</div>
				<div class="cal-body">
					<div class="day">2</div>
				</div>
				<div class="cal-body">
					<div class="day">3</div>
				</div>
				<div class="cal-body">	
					<div class="day">4</div>
				</div>
				<div class="cal-body">	
					<div class="day">5</div>
				</div>
				<div class="cal-body">	
					<div class="day">6</div>
				</div>
				<div class="cal-body">	
					<div class="day">7</div>
				</div>
				<div class="cal-body">	
					<div class="day">8</div>
				</div>
				<div class="cal-body">	
					<div class="day">9</div>
				</div>
				<div class="cal-body">	
					<div class="day">10</div>
				</div>
				<div class="cal-body">	
					<div class="day">11</div>
				</div>
				<div class="cal-body">	
					<div class="day">12</div>
				</div>
				<div class="cal-body">	
					<div class="day">13</div>
				</div>
				<div class="cal-body">	
					<div class="day">14</div>
				</div>
				<div class="cal-body">	
					<div class="day">15</div>
				</div>
				<div class="cal-body">	
					<div class="day">16</div>
				</div>
				<div class="cal-body">	
					<div class="day">17</div>
				</div>
				<div class="cal-body">	
					<div class="day">18</div>
				</div>
				<div class="cal-body">	
					<div class="day">19</div>
				</div>
				<div class="cal-body">	
					<div class="day">20</div>
				</div>
				<div class="cal-body">	
					<div class="day">21</div>
				</div>
				<div class="cal-body">	
					<div class="day">22</div>
				</div>
				<div class="cal-body">	
					<div class="day">23</div>
				</div>
				<div class="cal-body">	
					<div class="day">24</div>
				</div>
				<div class="cal-body">	
					<div class="day">25</div>
				</div>
				<div class="cal-body">	
					<div class="day">26</div>
				</div>
				<div class="cal-body">	
					<div class="day">27</div>
				</div>
				<div class="cal-body">	
					<div class="day">28</div>
				</div>
				<div class="cal-body">	
					<div class="day">29</div>
				</div>	
				<div class="cal-body">	
					<div class="day">30</div>
				</div>
			</div>
			<div class="month" id="Oct">
				<div class="week-label">Sunday</div>
				<div class="week-label">Monday</div>
				<div class="week-label">Tuesday</div>
				<div class="week-label">Wednesday</div>
				<div class="week-label">Thursday</div>
				<div class="week-label">Friday</div>
				<div class="week-label">Saturday</div>
				<div class="cal-body">
					<div class="day">1</div>
				</div>
				<div class="cal-body">
					<div class="day">2</div>
				</div>
				<div class="cal-body">
					<div class="day">3</div>
				</div>
				<div class="cal-body">	
					<div class="day">4</div>
				</div>
				<div class="cal-body">	
					<div class="day">5</div>
				</div>
				<div class="cal-body">	
					<div class="day">6</div>
				</div>
				<div class="cal-body">	
					<div class="day">7</div>
				</div>
				<div class="cal-body">	
					<div class="day">8</div>
				</div>
				<div class="cal-body">	
					<div class="day">9</div>
				</div>
				<div class="cal-body">	
					<div class="day">10</div>
				</div>
				<div class="cal-body">	
					<div class="day">11</div>
				</div>
				<div class="cal-body">	
					<div class="day">12</div>
				</div>
				<div class="cal-body">	
					<div class="day">13</div>
				</div>
				<div class="cal-body">	
					<div class="day">14</div>
				</div>
				<div class="cal-body">	
					<div class="day">15</div>
				</div>
				<div class="cal-body">	
					<div class="day">16</div>
				</div>
				<div class="cal-body">	
					<div class="day">17</div>
				</div>
				<div class="cal-body">	
					<div class="day">18</div>
				</div>
				<div class="cal-body">	
					<div class="day">19</div>
				</div>
				<div class="cal-body">	
					<div class="day">20</div>
				</div>
				<div class="cal-body">	
					<div class="day">21</div>
				</div>
				<div class="cal-body">	
					<div class="day">22</div>
				</div>
				<div class="cal-body">	
					<div class="day">23</div>
				</div>
				<div class="cal-body">	
					<div class="day">24</div>
				</div>
				<div class="cal-body">	
					<div class="day">25</div>
				</div>
				<div class="cal-body">	
					<div class="day">26</div>
				</div>
				<div class="cal-body">	
					<div class="day">27</div>
				</div>
				<div class="cal-body">	
					<div class="day">28</div>
				</div>
				<div class="cal-body">	
					<div class="day">29</div>
				</div>	
				<div class="cal-body">	
					<div class="day">30</div>
				</div>
				<div class="cal-body">	
					<div class="day">31</div>
				</div>
			</div>
			<div class="month" id="Nov">
				<div class="week-label">Sunday</div>
				<div class="week-label">Monday</div>
				<div class="week-label">Tuesday</div>
				<div class="week-label">Wednesday</div>
				<div class="week-label">Thursday</div>
				<div class="week-label">Friday</div>
				<div class="week-label">Saturday</div>
				<div class="cal-body">
					<div class="day">1</div>
				</div>
				<div class="cal-body">
					<div class="day">2</div>
				</div>
				<div class="cal-body">
					<div class="day">3</div>
				</div>
				<div class="cal-body">	
					<div class="day">4</div>
				</div>
				<div class="cal-body">	
					<div class="day">5</div>
				</div>
				<div class="cal-body">	
					<div class="day">6</div>
				</div>
				<div class="cal-body">	
					<div class="day">7</div>
				</div>
				<div class="cal-body">	
					<div class="day">8</div>
				</div>
				<div class="cal-body">	
					<div class="day">9</div>
				</div>
				<div class="cal-body">	
					<div class="day">10</div>
				</div>
				<div class="cal-body">	
					<div class="day">11</div>
				</div>
				<div class="cal-body">	
					<div class="day">12</div>
				</div>
				<div class="cal-body">	
					<div class="day">13</div>
				</div>
				<div class="cal-body">	
					<div class="day">14</div>
				</div>
				<div class="cal-body">	
					<div class="day">15</div>
				</div>
				<div class="cal-body">	
					<div class="day">16</div>
				</div>
				<div class="cal-body">	
					<div class="day">17</div>
				</div>
				<div class="cal-body">	
					<div class="day">18</div>
				</div>
				<div class="cal-body">	
					<div class="day">19</div>
				</div>
				<div class="cal-body">	
					<div class="day">20</div>
				</div>
				<div class="cal-body">	
					<div class="day">21</div>
				</div>
				<div class="cal-body">	
					<div class="day">22</div>
				</div>
				<div class="cal-body">	
					<div class="day">23</div>
				</div>
				<div class="cal-body">	
					<div class="day">24</div>
				</div>
				<div class="cal-body">	
					<div class="day">25</div>
				</div>
				<div class="cal-body">	
					<div class="day">26</div>
				</div>
				<div class="cal-body">	
					<div class="day">27</div>
				</div>
				<div class="cal-body">	
					<div class="day">28</div>
				</div>
				<div class="cal-body">	
					<div class="day">29</div>
				</div>	
				<div class="cal-body">	
					<div class="day">30</div>
				</div>
			</div>
			<div class="month" id="Dec">
				<div class="week-label">Sunday</div>
				<div class="week-label">Monday</div>
				<div class="week-label">Tuesday</div>
				<div class="week-label">Wednesday</div>
				<div class="week-label">Thursday</div>
				<div class="week-label">Friday</div>
				<div class="week-label">Saturday</div>
				<div class="cal-body">
					<div class="day">1</div>
				</div>
				<div class="cal-body">
					<div class="day">2</div>
				</div>
				<div class="cal-body">
					<div class="day">3</div>
				</div>
				<div class="cal-body">	
					<div class="day">4</div>
				</div>
				<div class="cal-body">	
					<div class="day">5</div>
				</div>
				<div class="cal-body">	
					<div class="day">6</div>
				</div>
				<div class="cal-body">	
					<div class="day">7</div>
				</div>
				<div class="cal-body">	
					<div class="day">8</div>
				</div>
				<div class="cal-body">	
					<div class="day">9</div>
				</div>
				<div class="cal-body">	
					<div class="day">10</div>
				</div>
				<div class="cal-body">	
					<div class="day">11</div>
				</div>
				<div class="cal-body">	
					<div class="day">12</div>
				</div>
				<div class="cal-body">	
					<div class="day">13</div>
				</div>
				<div class="cal-body">	
					<div class="day">14</div>
				</div>
				<div class="cal-body">	
					<div class="day">15</div>
				</div>
				<div class="cal-body">	
					<div class="day">16</div>
				</div>
				<div class="cal-body">	
					<div class="day">17</div>
				</div>
				<div class="cal-body">	
					<div class="day">18</div>
				</div>
				<div class="cal-body">	
					<div class="day">19</div>
				</div>
				<div class="cal-body">	
					<div class="day">20</div>
				</div>
				<div class="cal-body">	
					<div class="day">21</div>
				</div>
				<div class="cal-body">	
					<div class="day">22</div>
				</div>
				<div class="cal-body">	
					<div class="day">23</div>
				</div>
				<div class="cal-body">	
					<div class="day">24</div>
				</div>
				<div class="cal-body">	
					<div class="day">25</div>
				</div>
				<div class="cal-body">	
					<div class="day">26</div>
				</div>
				<div class="cal-body">	
					<div class="day">27</div>
				</div>
				<div class="cal-body">	
					<div class="day">28</div>
				</div>
				<div class="cal-body">	
					<div class="day">29</div>
				</div>	
				<div class="cal-body">	
					<div class="day">30</div>
				</div>
				<div class="cal-body">	
					<div class="day">31</div>
				</div>
			</div>
		</div>
		</div>
			<div class="background-shapes" id="bottom-rectangle"></div>
	</div>
	<div id="contact-info-container">
		<div id="contact-info-bot"><br>Email: joseph.franklin.simpson@gmail.com || Phone: (605)393-5107</div>
	</div>
	<div id="grey-out" class="hidden"></div>
</body>
<script type="text/javascript" src="javascript/showcontactform.js"></script>
<script type="text/javascript" src="javascript/blackjack.js"></script>
<script type="text/javascript" src="javascript/calendar.js"></script>
<script type="text/javascript" src="javascript/appshowcasenav.js"></script>
</body>

</html>





		