$(document).keydown(function(event) {
if (event.ctrlKey==true && (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109'  || event.which == '187'  || event.which == '189'  ) ) {
        event.preventDefault();
     }
    // 107 Num Key  +
    // 109 Num Key  -
    // 173 Min Key  hyphen/underscor Hey
    // 61 Plus key  +/= key
});

$(window).bind('mousewheel DOMMouseScroll', function (event) {
       if (event.ctrlKey == true) {
       event.preventDefault();
       }
});

// lOADER
var fadeOutScreen = localStorage.getItem('fadeOutScreen');
  $('html, body').css({
    overflow: 'hidden',
    height: '100%'
  });

  $(window).on('load', function() {

    $('html, body').css({
      overflow: 'hidden',
      height: 'auto'
    })

    $("#loading").addClass("loader-hidden");
    if(localStorage.fadeOutScreen != 'true') {
      $(".firstScreen").fadeIn(1500).delay(5000).fadeOut(1500);
      localStorage.setItem('fadeOutScreen', 'true');
    } else {
      $(".firstScreen").css("display", "none");
    }

  });

$(document).ready(function() {

console.log("masuk js login");
const url = "https://webnikahapi.arthatronic.com/api/login/";
var token;
var tmp = null;

var dirPath = dirname(location.href);
var homePath = RemoveLastDirectoryPartOf(dirPath);

function dirname(path) {
  return path.replace(/\\/g, '/').replace(/\/[^\/]*$/, '');
}

function RemoveLastDirectoryPartOf(the_url) {
  var the_arr = the_url.split('/');
  the_arr.pop();
  return (the_arr.join('/'));
}

var statusError = false;
var statusCode;
cookieToken = $.cookie("token");

$("#btn-login").click(function() {

  // var person = {
  //   username: $("#username").val(),
  //   password: "12345678"
  // };

  // console.log(person);

  // var tmp = null;
  // var dataNull = false;

  // $.ajax({
  //   async: false,
  //   type: "POST",
  //   global: false,
  //   dataType: 'json',
  //   url: url,
  //   data: person,

  //   success: function(data) {
  //     tmp = data;
  //   },

  //   complete: function(e, xhr, settings) {

  //     console.log(e.status);
  //     statusCode = e.status;
  //     console.log(statusCode);

  //     if (statusCode !== 200) {
  //       $("#login-form").submit(function(e) {
  //         e.preventDefault();
  //       });

  //       console.log("id salah");
  //       $(".idSalah").css("display", "block");
  //       // $("#username").css("color", "red");
  //     }

  //   },

    // statusCode: {
    //   400: function() {
    //     statusError = true,
    //       console.log(statusError);
    //   }
    // }
  // });

  // console.log("statusCode " + statusCode);

  // var token = tmp.token;
  // console.log(token);

  // $.cookie("token", token, {
  //   path: '/'
  // });

  // console.log("token " + cookieToken);
  localStorage.setItem("nama",$("#username").val());

  console.log ("nama = " + localStorage.getItem("nama"));


  //if (statusCode === 200) {
  window.location = homePath;
  return false;
  //}

  // return false;
});

$(".lupa-id").click(function(){
  $("#forgetIdModal").css("display", "block");
  // $(".login-content").addClass("blur-background");
});

$(".close").click(function(){
  $("#forgetIdModal").css("display", "none");
  // $(".login-page").removeClass("blur-background");
});

$(window).click(function(e) {
  if (e.target.id == "forgetIdModal") {
    $("#forgetIdModal").css("display", "none");
  }
});

// When the user press escape button, close it
$("body").keydown(function(e) {
  if (e.key == "Escape") {
    $("#forgetIdModal").css("display", "none");
  }
});


// return false;


});
