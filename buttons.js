//Phone button

function myFunction() {
        document.getElementById("phone").style.visibility = "hidden";
        document.getElementById("phone1").style.visibility = "visible";
      }

//Menu buttons lunch

$(document).ready(function(){
  $("#lunch-btn-veg").click(function(){
    $(".fish-lunch, .meat-lunch").toggleClass("line");
  });
});

$(document).ready(function(){
  $("#lunch-btn-fish").click(function(){
    $(".veg-lunch, .meat-lunch").toggleClass("line");
  });
});

$(document).ready(function(){
  $("#lunch-btn-meat").click(function(){
    $(".veg-lunch, .fish-lunch").toggleClass("line");
  });
});


//Menu buttons dinner

$(document).ready(function(){
  $("#dinner-btn-veg").click(function(){
    $(".meat-dinner, .fish-dinner").toggleClass("line");
  });
});

$(document).ready(function(){
  $("#dinner-btn-fish").click(function(){
    $(".meat-dinner, .veg-dinner").toggleClass("line");
  });
});

$(document).ready(function(){
  $("#dinner-btn-meat").click(function(){
    $(".fish-dinner, .veg-dinner").toggleClass("line");
  });
});