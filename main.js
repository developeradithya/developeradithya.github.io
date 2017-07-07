$(document).ready(function(){
      function pulsate() {
    $(".portfolio-piece").
      animate({opacity: 0.2}, 3000, 'swing').
      animate({opacity: 1}, 3000, 'swing',);
        setTimeout(pulsate(), 4000);
  }
  pulsate();
});
