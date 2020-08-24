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

  var person = {
    username: $("#username").val(),
    password: "12345678"
  };

  console.log(person);

  var tmp = null;
  var dataNull = false;

  $.ajax({
    async: false,
    type: "POST",
    global: false,
    dataType: 'json',
    url: url,
    data: person,

    success: function(data) {
      tmp = data;
    },

    complete: function(e, xhr, settings) {

      console.log(e.status);
      statusCode = e.status;
      console.log(statusCode);

      if (statusCode !== 200) {
        $("#login-form").submit(function(e) {
          e.preventDefault();
        });

        console.log("id salah");
        $(".idSalah").css("display", "block");
        // $("#username").css("color", "red");
      }

    },

    statusCode: {
      400: function() {
        statusError = true,
          console.log(statusError);
      }
    }
  });

  console.log("statusCode " + statusCode);

  var token = tmp.token;
  console.log(token);

  $.cookie("token", token, {
    path: '/'
  });

  console.log("token " + cookieToken);

  if (statusCode === 200) {
    window.location = homePath;
    return false;
  }

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
