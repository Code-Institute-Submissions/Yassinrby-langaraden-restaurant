//Phone button

function myFunction() {
  document.getElementById("phone").style.visibility = "hidden";
  document.getElementById("phone1").style.visibility = "visible";
}

//Menu buttons lunch

$(document).ready(function () {
  $("#lunch-btn-veg").click(function () {
    $(".veg-lunch").toggleClass("highlight");
    $(".fish-lunch, .meat-lunch").toggleClass("line");
  });
});

$(document).ready(function(){
    $("#lunch-btn-veg").click(function(){
        $(this).toggleClass("active-btn");
    });
});

$(document).ready(function () {
  $("#lunch-btn-fish").click(function () {
    $(".fish-lunch").toggleClass("highlight");
    $(".veg-lunch, .meat-lunch").toggleClass("line");
  });
});

$(document).ready(function(){
    $("#lunch-btn-fish").click(function(){
        $(this).toggleClass("active-btn");
    });
});

$(document).ready(function () {
  $("#lunch-btn-meat").click(function () {
    $(".meat-lunch").toggleClass("highlight");
    $(".veg-lunch, .fish-lunch").toggleClass("line");
  });
});

$(document).ready(function(){
    $("#lunch-btn-meat").click(function(){
        $(this).toggleClass("active-btn");
    });
});

//Menu buttons dinner

$(document).ready(function () {
  $("#dinner-btn-veg").click(function () {
    $(".veg-dinner").toggleClass("highlight");
    $(".meat-dinner, .fish-dinner").toggleClass("line");
  });
});

$(document).ready(function(){
    $("#dinner-btn-veg").click(function(){
        $(this).toggleClass("active-btn");
    });
});

$(document).ready(function () {
  $("#dinner-btn-fish").click(function () {
    $(".fish-dinner").toggleClass("highlight");
    $(".meat-dinner, .veg-dinner").toggleClass("line");
  });
});

$(document).ready(function(){
    $("#dinner-btn-fish").click(function(){
        $(this).toggleClass("active-btn");
    });
});

$(document).ready(function () {
  $("#dinner-btn-meat").click(function () {
    $(".meat-dinner").toggleClass("highlight");
    $(".fish-dinner, .veg-dinner").toggleClass("line");
  });
});

$(document).ready(function(){
    $("#dinner-btn-meat").click(function(){
        $(this).toggleClass("active-btn");
    });
});
