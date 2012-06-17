/* Author:

*/
$(document).ready(function(){  
    $('.MYCLASS').jqzoom();  
	$("#tabContainer").acidTabs();
});

$("#button-box").click(function() {
  $('html').removeClass('bg1').addClass('bg2');
  $('#image').addClass('visuallyhidden');
  $("#container").animate({
    marginTop: "120%",
  }, 2000, function () {  
   $("#remedy").fadeIn(1000, function () {
          $('#back').fadeIn();
          });
    });
});

$("#back").click(function() {
$(this).fadeOut();
  $('html').removeClass('bg2').addClass('bg1');
  $('#remedy').fadeOut();;
  $("#container").animate({
    marginTop: "1%",
  }, 2000, function () {  
    $('#image').removeClass('visuallyhidden');
          });
});


