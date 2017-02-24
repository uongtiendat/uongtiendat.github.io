$(document).ready(function() {
  //variable for the 'stroke-dashoffset' unit
  var $monitor = $(".monitor").css("stroke-dashoffset");
  var $tablet = $(".tablet").css("stroke-dashoffset");
  var $st0 = $(".st0").css("stroke-dashoffset");
  var $st5 = $(".st5").css("stroke-dashoffset");
  var $stbe = $(".stBe").css("stroke-dashoffset");
  //on a scroll event - execute function
  $(window).scroll(function() {
    //calculate how far down the page the user is 
    var $percentageComplete = (($(window).scrollTop() / ($("html").height() - $(window).height())) * 100);
    //convert dashoffset pixel value to interger
    var $monitorNew = parseInt($monitor, 10);
    var $tabletNew = parseInt($tablet, 10);
    var $st0New = parseInt($st0, 10);
    var $st5New = parseInt($st5, 10);
    var $beNew = parseInt($stbe, 10);
    //get the value to be subtracted from the 'stroke-dashoffset'
    var $monitorOffset = $percentageComplete * ($monitorNew / 100);
    var $tabletOffset = $percentageComplete * ($tabletNew / 100);
    var $st0Offset = $percentageComplete * ($st0New / 100);
    var $st5Offset = $percentageComplete * ($st5New / 100);
    var $beOffset = $percentageComplete * ($beNew / 100);
    //set the new value of the dashoffset to create the drawing effect
    $(".monitor").css("stroke-dashoffset", $monitorNew - $monitorOffset);
    $(".tablet").css("stroke-dashoffset", $tabletNew - $tabletOffset);
    $(".st0").css("stroke-dashoffset", $st0New - $st0Offset);
    $(".st5").css("stroke-dashoffset", $st5New - $st5Offset);
    $(".stBe").css("stroke-dashoffset", $beNew - $beOffset);
  });
});