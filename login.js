$(document).ready(function() {
  const url = "https://webnikahapi.arthatronic.com/api/login/";
  var token;
  var tmp = null;

  var dirPath = dirname(location.href);

  function dirname(path) {
    return path.replace(/\\/g, '/').replace(/\/[^\/]*$/, '');
  }

  $("#btn-login").click(function() {
    var person = new Object();
    person.username = $("#username").val();
    person.password = "12345678";

    console.log(person);

    var tmp = null;
    var statusError = false;
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
      statusCode: {
        400: function() {
          statusError = true;
        }
      }
    });

    console.log("status " + statusError);

    var token = tmp.token;
    console.log(token);

    $.cookie("token", token, {
      path: '/'
    });
    // $.removeCookie("token");
    cookieToken = $.cookie("token");
    console.log("token " + cookieToken);
    // alert(cookieToken);

    if (statusError) {
      alert("salah");
    } else {
      var fullPath = dirPath + "/homepage.html";

      window.location = fullPath;
      return false;

    }

    return false;
  });




// return false;


});
