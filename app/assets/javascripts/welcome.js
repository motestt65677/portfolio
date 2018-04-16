$( document ).ready(function() {
  var mark1 = 0;
  $(window).scroll(function() {
    var hT = $('#track1').offset().top,
    hH = $('#track1').outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
    if (wS > (hT+hH-wH) && mark1 == 0){
      var form = document.getElementById("track1")
      form.submit();
      mark1 = 1;
      console.log("in1");
    }
  });

  var mark2 = 0;
  $(window).scroll(function() {
    var hT = $('#track2').offset().top,
    hH = $('#track2').outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
    if (wS > (hT+hH-wH) && mark2 == 0){
      var form = document.getElementById("track2")
      form.submit();
      mark2 = 1;
      console.log("in2");
    }
  });  

  var mark3 = 0;
  $(window).scroll(function() {
    var hT = $('#track3').offset().top,
    hH = $('#track3').outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
    if (wS > (hT+hH-wH) && mark3 == 0){
      var form = document.getElementById("track3")
      form.submit();
      mark3 = 1;
      console.log("in3");
    }
  });

  var mark4 = 0;
  $(window).scroll(function() {
    var hT = $('#track4').offset().top,
    hH = $('#track4').outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
    if (wS > (hT+hH-wH) && mark4 == 0){
      var form = document.getElementById("track4")
      form.submit();
      mark4 = 1;
      console.log("in4");
    }
  });

  document.getElementById("resume-link").onclick = function(){
    document.getElementById("resume-track").submit();
  }

  document.getElementById("contact-me-link").onclick = function(){
    document.getElementById("contact-me-track").submit();
  }
  document.getElementById("baobaocare-link").onclick = function(){
    document.getElementById("baobaocare-track").submit();
  }
  document.getElementById("billboard-air-link").onclick = function(){
    document.getElementById("billboard-air-track").submit();
  }
});
