$(document).ready(function() {
  /*//variable for the 'stroke-dashoffset' unit
  var $dashOffset = $(".line").css("stroke-dashoffset");
  //on a scroll event - execute function
  $(window).scroll(function() {
    //calculate how far down the page the user is 
    var $percentageComplete = (($(window).scrollTop() / ($("html").height() - $(window).height())) * 100);
    //convert dashoffset pixel value to interger
    var $newUnit = parseInt($dashOffset, 10);
    //get the value to be subtracted from the 'stroke-dashoffset'
    var $offsetUnit = $percentageComplete * ($newUnit / 1400);
    //set the new value of the dashoffset to create the drawing effect
    $(".line").css("stroke-dashoffset", $newUnit - $offsetUnit);

    if($(window).scrollTop() >= 3000) {
    	$(".thanks").css("visibility", "visible");
    }
    else {
    	$(".thanks").css("visibility", "hidden");
    }
  });*/

  //variable for the 'stroke-dashoffset' unit
  var $dashOffset = $(".line").css("stroke-dashoffset");
  //on a scroll event - execute function
  $(window).scroll(function() {
    //calculate how far down the page the user is 
    

    if($(window).scrollTop() >= 2950) {
    	var $percentageComplete = ((($(window).scrollTop() - 2950)/ ($("html").height() - $(window).height())) * 100);
	    //convert dashoffset pixel value to interger
	    var $newUnit = parseInt($dashOffset, 10);
	    //get the value to be subtracted from the 'stroke-dashoffset'
	    var $offsetUnit = $percentageComplete * ($newUnit / 900);
	    //set the new value of the dashoffset to create the drawing effect
	    $(".line").css("stroke-dashoffset", $newUnit - $offsetUnit);
	    if($(window).width() > 540) { 
		    $(".thanks").css("visibility", "visible");
		}
	}
    else {
    	$(".thanks").css("visibility", "hidden");
    }
  });

  // Add smooth scrolling to all links
					  $("a").on('click', function(event) {

					    // Make sure this.hash has a value before overriding default behavior
					    if (this.hash !== "") {
					      // Prevent default anchor click behavior
					      event.preventDefault();

					      // Store hash
					      var hash = this.hash;

					      // Using jQuery's animate() method to add smooth page scroll
					      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
					      $('html, body').animate({
					        scrollTop: $(hash).offset().top
					      }, 800, function(){
					   
					        // Add hash (#) to URL when done scrolling (default click behavior)
					        window.location.hash = hash;
					      });
					    } // End if
					  });
});