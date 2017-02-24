document.addEventListener('DOMContentLoaded', function() {
	var parallax = document.querySelectorAll("#parallax-one"),
		speed = 0.4,
		speed1 = 0.3,
		speed2 = 0.2,
		speed3 = 0.1;
		speed4 = 0.1;

		window.onscroll = function(){
		    [].slice.call(parallax).forEach(function(el,i){

		      var windowYOffset = window.pageYOffset,
		          elBackgrounPos = 	"50% " + (windowYOffset * speed4) + "px" + "," +
		          					"50% " + (windowYOffset * speed3) + "px" + "," +
		          					"50% " + (windowYOffset * speed2) + "px" + "," +
		          					"50% " + (windowYOffset * speed1) + "px" + "," +
		          					"50% " + (windowYOffset * speed) + "px";

		      el.style.backgroundPosition = elBackgrounPos;

		    });
		  };


	//**************************SCROLL DRAWING*****************************/
	// Get the id of the <path> element and the length of <path>
	//var triangle = document.getElementById("triangle");
	var monitor1 = document.getElementById("monitor1");
	var monitor2 = document.getElementById("monitor2");

	var tablet1 = document.getElementById("tablet1");
	var tablet2 = document.getElementById("tablet2");

	var skill = document.getElementById("skill");

	var work = document.getElementById("work");
	var work2 = document.getElementById("work2");

	var contact = document.getElementById("contact");

	var s = document.getElementById("s");

	//var length = triangle.getTotalLength();
	var lengthc = monitor1.getTotalLength();
	var lengthc2 = monitor2.getTotalLength();

	var lengtht = tablet1.getTotalLength();
	var lengtht2 = tablet2.getTotalLength();

	var lengths = skill.getTotalLength();

	var lengthw = work.getTotalLength();
	var lengthw2 = work2.getTotalLength();

	var lengthct = contact.getTotalLength();

	var lengthss = s.getTotalLength();

	var fish1 = document.getElementById("fish1");
	var fish2 = document.getElementById("fish2");
	var fish3 = document.getElementById("fish3");
	var fish4 = document.getElementById("fish4");
	var fish6 = document.getElementById("fish6");
	var fish7 = document.getElementById("fish7");
	var fish8 = document.getElementById("fish8");
	var fish9 = document.getElementById("fish9");

	var jellyfish1 = document.getElementById("jellyfish1");
	var jellyfish2 = document.getElementById("jellyfish2");

	var horsefish = document.getElementById("horsefish");
	var horsefish2 = document.getElementById("horsefish2");

	var octopus = document.getElementById("octopus");

	// The start position of the drawing
	//triangle.style.strokeDasharray = length;
	monitor1.style.strokeDasharray = lengthc;
	monitor2.style.strokeDasharray = lengthc2;

	tablet1.style.strokeDasharray = lengtht;
	tablet2.style.strokeDasharray = lengtht2;

	// Hide the triangle by offsetting dash. Remove this line to show the triangle before scroll draw
	//triangle.style.strokeDashoffset = length;
	monitor1.style.strokeDashoffset = lengthc;
	monitor2.style.strokeDashoffset = lengthc2;

	skill.style.strokeDasharray = lengths;

	work.style.strokeDasharray = lengthw;
	work2.style.strokeDasharray = lengthw2;
	work2.style.strokeDashoffset = lengthw2;

	contact.style.strokeDasharray = lengthct;

	s.style.strokeDasharray = lengthss;

	// Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled
	window.addEventListener("scroll", myFunction);

	function myFunction() {
	var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight),
		speedm = 3;
		speedm2 = 2;
		speedt = 2;
		speedt2 = 1.25;
		speeds = 1.6;
		speedw = 1.1;
		speedw2 = 0.65;
		speedct = 1;
		speedss = 0.1;

	  //var draw = length * scrollpercent;
	  var drawc = lengthc * scrollpercent * speedm;
	  var drawc2 = lengthc2 * scrollpercent * speedm2;

	  var drawt = lengtht * scrollpercent * speedt;
	  var drawt2 = lengtht2 * scrollpercent * speedt2;

	  var draws = lengths * scrollpercent * speeds;

	  var draww = lengthw * scrollpercent * speedw;
	  var draww2 = lengthw2 * scrollpercent * speedw2;

	  var drawct = lengthct * scrollpercent * speedct;

	  var drawss = lengthss * scrollpercent * speedss;
	  
	  // Reverse the drawing (when scrolling upwards)
	  //triangle.style.strokeDashoffset = length - draw;
	  monitor1.style.strokeDashoffset = lengthc - drawc;
	  monitor2.style.strokeDashoffset = lengthc2 - drawc2;

	  tablet1.style.strokeDashoffset = lengtht - drawt;
	  tablet2.style.strokeDashoffset = lengtht2 - drawt2;

	  skill.style.strokeDashoffset = lengths - draws;

	  work.style.strokeDashoffset = lengthw - draww;
	  work2.style.strokeDashoffset = lengthw2 - draww2;

	  contact.style.strokeDashoffset = lengthct - drawct;

	  s.style.strokeDashoffset = lengthss - drawss;

	  //************FISH*******************/
	  fish1.style.right = scrollpercent * 1000 +"px";
	  fish2.style.right = scrollpercent * 700 +"px";
	  fish3.style.left = scrollpercent * 700 +"px";
	  fish4.style.left = scrollpercent * 800 +"px";
	  fish6.style.left = scrollpercent * 400 +"px";
	  fish7.style.right = scrollpercent * 1200 +"px";
	  fish8.style.left = scrollpercent * 1200 +"px";
	  fish9.style.left = scrollpercent * 800 +"px";

	  jellyfish1.style.top = -scrollpercent * 600 + 1800 + "px";
	  jellyfish2.style.top = -scrollpercent * 600 + 3200 + "px";

	  horsefish.style.top = -scrollpercent * 300 + 2650 +"px";
	  horsefish.style.right = scrollpercent * 600 +"px";
	  horsefish2.style.top = -scrollpercent * 500 + 3950 +"px";
	  horsefish2.style.right = scrollpercent * 300 +"px";

	  octopus.style.top = -scrollpercent * 1000 + 3400+"px";
	}
})