document.addEventListener('DOMContentLoaded', function() {

	/**
 * Gets the browser name or returns an empty string if unknown. 
 * This function also caches the result to provide for any 
 * future calls this function has.
 *
 * @returns {string}
 */
var browser = function() {
    // Return cached result if avalible, else get result then cache it.
    if (browser.prototype._cachedResult)
        return browser.prototype._cachedResult;

    // Opera 8.0+
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';

    // Safari 3.0+ "[object HTMLElementConstructor]" 
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);

    // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/false || !!document.documentMode;

    // Edge 20+
    var isEdge = !isIE && !!window.StyleMedia;

    // Chrome 1+
    var isChrome = !!window.chrome && !!window.chrome.webstore;

    // Blink engine detection
    var isBlink = (isChrome || isOpera) && !!window.CSS;

    return browser.prototype._cachedResult =
        isOpera ? 'Opera' :
        isFirefox ? 'Firefox' :
        isSafari ? 'Safari' :
        isChrome ? 'Chrome' :
        isIE ? 'IE' :
        isEdge ? 'Edge' :
        "Don't know";
};

//console.log(browser());

	var parallax = document.querySelectorAll("#parallax-one"),
		speed = 0.4,
		speed1 = 0.3,
		speed2 = 0.2,
		speed3 = 0.15;
		speed4 = 0.05;
	var parallax2 = document.querySelectorAll("#parallax-two");
	var parallax3 = document.querySelectorAll("#parallax-three");

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

		    [].slice.call(parallax2).forEach(function(el,i){

		      var windowYOffset = window.pageYOffset,
		          elBackgrounPos = 	"50% " + (windowYOffset * speed4) + "px" + "," +
		          					"50% " + (windowYOffset * speed3) + "px" + "," +
		          					"50% " + (windowYOffset * speed2) + "px" + "," +
		          					"50% " + (windowYOffset * speed1) + "px";

		      el.style.backgroundPosition = elBackgrounPos;

		    });

		    [].slice.call(parallax3).forEach(function(el,i){

		      var windowYOffset = window.pageYOffset,
		          elBackgrounPos = 	"50% " + (windowYOffset * speed4) + "px" + "," +
		          					"50% " + (windowYOffset * speed3) + "px" + "," +
		          					"50% " + (windowYOffset * speed2) + "px" + "," +
		          					"center";

		      el.style.backgroundPosition = elBackgrounPos;

		    });
		  };

	var fish1 = document.getElementById("fish1");
	var fish2 = document.getElementById("fish2");
	var fish3 = document.getElementById("fish3");
	var fish4 = document.getElementById("fish4");
	var fish5 = document.getElementById("fish5");
	var fish6 = document.getElementById("fish6");
	var fish7 = document.getElementById("fish7");
	var fish8 = document.getElementById("fish8");
	var fish9 = document.getElementById("fish9");
	var fish10 = document.getElementById("fish10");

	var jellyfish1 = document.getElementById("jellyfish1");
	var jellyfish2 = document.getElementById("jellyfish2");

	var horsefish = document.getElementById("horsefish");
	var horsefish2 = document.getElementById("horsefish2");

	var octopus = document.getElementById("octopus");

	// Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled
	window.addEventListener("scroll", myFunction);

	function myFunction() {
	var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

	  //************FISH*******************/
	  fish1.style.right = scrollpercent * 1000 +"px";
	  fish2.style.right = scrollpercent * 400 +"px";
	  fish3.style.left = scrollpercent * 700 +"px";
	  fish4.style.left = scrollpercent * 800 +"px";
	  fish5.style.left = scrollpercent * 100 +"px";
	  fish6.style.left = scrollpercent * 400 +"px";
	  fish7.style.right = scrollpercent * 300 +"px";
	  fish8.style.left = scrollpercent * 400 +"px";
	  fish9.style.left = scrollpercent * 200 +"px";
	  fish10.style.right = scrollpercent * 20 +"px";
	  fish10.style.top = -scrollpercent * 600 + 3800 + "px";

	  jellyfish1.style.top = -scrollpercent * 600 + 1800 + "px";
	  jellyfish2.style.top = -scrollpercent * 600 + 3450 + "px";

	  horsefish.style.top = -scrollpercent * 300 + 2650 +"px";
	  horsefish.style.right = scrollpercent * 300 +"px";
	  horsefish2.style.top = -scrollpercent * 500 + 3950 +"px";
	  horsefish2.style.right = scrollpercent * 300 +"px";

	  octopus.style.top = -scrollpercent * 1000 + 4000+"px";

	  if(window.innerWidth < 980) {
		fish7.style.opacity = "0";
		fish9.style.opacity = "0";
	}
	  if(window.innerWidth < 980) {
		fish2.style.opacity = "0";
	}

	if(window.innerWidth < 540) {
		fish10.style.opacity = "0";
		octopus.style.opacity = "0";
	}

}
})