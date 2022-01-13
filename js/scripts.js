$(document).ready(function() {

 
  
  $("button#check").click(function(event) {
    event.preventDefault();
    const height = parseInt($("input#height").val())

    if (height <= 35) {
      $ ('#under-height').show();
    } else if ((height > 35) && (height <= 54)){
      $('#cover').hide();
      $("#children").addClass("orange");
    } else if ((height > 54) && (height <= 78)){
      $('#cover').hide();
      $("#adult").addClass("orange");
    } else {
      $ ('#over-height').show();
    }
    
  });

});