window.addEventListener('DOMContentLoaded', function() {
    setTimeout(function(){
      $('.container').fadeOut('slow');
      $('.myDiv').fadeIn('fast');
      console.log("Dom Loaded.");
  
    },2500);
}, true);
  