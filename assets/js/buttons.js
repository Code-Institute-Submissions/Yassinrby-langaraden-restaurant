//Phone button

function myFunction() {
  document.getElementById("phone").style.visibility = "hidden";
  document.getElementById("phone1").style.visibility = "visible";
}

//Menu buttons lunch

$(document).ready(function () {
  $("#lunch-btn-veg").click(function () {
     $(".fish-lunch, .meat-lunch").removeClass("highlight");
     $("#lunch-btn-meat, #lunch-btn-fish").removeClass("active-btn")
     $(".veg-lunch").removeClass("line")
     $(".veg-lunch").addClass("highlight");
    $(".fish-lunch, .meat-lunch").addClass("line");
    // $(".veg-lunch").toggleClass("highlight");
    // $(".fish-lunch, .meat-lunch").toggleClass("line");
    localStorage.clear();
    let currentMenu = localStorage.setItem('element', 'veg');
    
  });
    

});

$(document).ready(function(){
    $("#lunch-btn-veg").click(function(){
        $(this).toggleClass("active-btn");
    });
});

$(document).ready(function () {
  $("#lunch-btn-fish").click(function () {
   $(".veg-lunch, .meat-lunch").removeClass("highlight");
   $("#lunch-btn-meat, #lunch-btn-veg").removeClass("active-btn")
     $(".fish-lunch").removeClass("line")
    $(".fish-lunch").addClass("highlight");
    $(".veg-lunch, .meat-lunch").addClass("line");
    // $(".fish-lunch").toggleClass("highlight");
    // $(".veg-lunch, .meat-lunch").toggleClass("line");
    localStorage.clear();
    let currentMenu = localStorage.setItem('element', 'fish');
    
  });
});

$(document).ready(function(){
    $("#lunch-btn-fish").click(function(){
        $(this).toggleClass("active-btn");
    });
});

$(document).ready(function () {
  $("#lunch-btn-meat").click(function () {
      $(".veg-lunch, .fish-lunch").removeClass("highlight");
      $("#lunch-btn-veg, #lunch-btn-fish").removeClass("active-btn")
     $(".meat-lunch").removeClass("line")
      $(".meat-lunch").addClass("highlight");
      $(".veg-lunch, .fish-lunch").addClass("line");
    // $(".meat-lunch").toggleClass("highlight");
    // $(".veg-lunch, .fish-lunch").toggleClass("line");
    localStorage.clear();
    let currentMenu = localStorage.setItem('element', 'meat');
   
  });
});

$(document).ready(function(){
    $("#lunch-btn-meat").click(function(){
        $(this).toggleClass("active-btn");
    });
});

//Menu buttons dinner

// $(document).ready(function () {
//   $("#lunch-btn-veg").click(function () {
//      $(".fish-lunch, .meat-lunch").removeClass("highlight");
//      $(".veg-lunch").removeClass("line")
//      $(".veg-lunch").addClass("highlight");
//     $(".fish-lunch, .meat-lunch").addClass("line");
//     localStorage.clear();
//     let currentMenu = localStorage.setItem('element', 'veg');
    
//   });

$(document).ready(function () {
  $("#dinner-btn-veg").click(function () {
      $(".fish-dinner, .meat-dinner").removeClass("highlight");
      $("#dinner-btn-fish, #dinner-btn-meat").removeClass("active-btn");
      $(".veg-dinner").removeClass("line")
      $(".veg-dinner").addClass("highlight");
      $(".fish-dinner, .meat-dinner").addClass("line");
      localStorage.clear();
      let currentMenu = localStorage.setItem('element', 'veg-dinner');
   
  });
});

$(document).ready(function(){
    $("#dinner-btn-veg").click(function(){
        $(this).toggleClass("active-btn");
    });
});

$(document).ready(function () {
  $("#dinner-btn-fish").click(function () {
      $(".veg-dinner, .meat-dinner").removeClass("highlight");
      $("#dinner-btn-meat, #dinner-btn-veg").removeClass("active-btn");
      $(".fish-dinner").removeClass("line")
      $(".fish-dinner").addClass("highlight");
      $(".veg-dinner, .meat-dinner").addClass("line");
      localStorage.clear();
      let currentMenu = localStorage.setItem('element', 'fish-dinner');
  });
});

$(document).ready(function(){
    $("#dinner-btn-fish").click(function(){
        $(this).toggleClass("active-btn");
    });
});

$(document).ready(function () {
  $("#dinner-btn-meat").click(function () {
      $(".veg-dinner, .fish-dinner").removeClass("highlight");
      $("#dinner-btn-fish, #dinner-btn-veg").removeClass("active-btn");
      $(".meat-dinner").removeClass("line")
      $(".meat-dinner").addClass("highlight");
      $(".veg-dinner, .fish-dinner").addClass("line");
      localStorage.clear();
      let currentMenu = localStorage.setItem('element', 'meat-dinner');
  });
});

$(document).ready(function(){
    $("#dinner-btn-meat").click(function(){
        $(this).toggleClass("active-btn");
    });
});

// Local Storage


if ((localStorage.getItem('element')) == ('veg')) {
    $("#lunch-btn-veg").addClass("active-btn");
    $(".veg-lunch").toggleClass("highlight");
    $(".fish-lunch, .meat-lunch").toggleClass("line");
}

if ((localStorage.getItem('element')) == ('fish')) {
    $("#lunch-btn-fish").addClass("active-btn");
    $(".fish-lunch").toggleClass("highlight");
    $(".veg-lunch, .meat-lunch").toggleClass("line");
}

if ((localStorage.getItem('element')) == ('meat')) {
    $("#lunch-btn-meat").addClass("active-btn");
    $(".meat-lunch").toggleClass("highlight");
    $(".fish-lunch, .veg-lunch").toggleClass("line");
}

if ((localStorage.getItem('element')) == ('veg-dinner')) {
    $("#dinner-btn-veg").addClass("active-btn");
    $(".veg-dinner").toggleClass("highlight");
    $(".fish-dinner, .meat-dinner").toggleClass("line");
}

if ((localStorage.getItem('element')) == ('fish-dinner')) {
    $("#dinner-btn-fish").addClass("active-btn");
    $(".fish-dinner").toggleClass("highlight");
    $(".veg-dinner, .meat-dinner").toggleClass("line");
}

if ((localStorage.getItem('element')) == ('meat-dinner')) {
    $("#dinner-btn-meat").addClass("active-btn");
    $(".meat-dinner").toggleClass("highlight");
    $(".fish-dinner, .veg-dinner").toggleClass("line");
}

function clearStorage() {
    $(".veg-lunch, .fish-lunch, .meat-lunch, .veg-dinner, .fish-dinner, .meat-dinner").removeClass("line highlight");
    $("#lunch-btn-fish, #lunch-btn-veg, #lunch-btn-meat, #dinner-btn-fish, #dinner-btn-veg, #dinner-btn-meat").removeClass("active-btn");
    localStorage.clear();
}
