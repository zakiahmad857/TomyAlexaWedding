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

    if (statusError) {
      alert("salah");
    } else {
      var fullPath = dirPath + "/homepage.html";
      window.location = fullPath;
      return false;
    }

    var token = tmp.token;
    console.log(token);

    $.cookie("token", token, {
      path: '/'
    });
    // $.removeCookie("token");
    cookieToken = $.cookie("token");
    console.log("token " + cookieToken);
    // alert(cookieToken);

    var name = null;
    $.ajax({
      url: "https://webnikahapi.arthatronic.com/api/user/",
      async: false,
      type: "GET",
      global: false,
      // Fetch the stored token from localStorage and set in the header
      headers: {
        "Authorization": "Token " + cookieToken
      },
      success: function(result) {
        console.log(result);
        name = result[0].name;
        console.log(name);

        // var result = $('<div />').append(name).find('#welcomeName').html();
        //    $('#welcomeName').html(result);
      },
      error: function(err) {
        console.log(err);
      }
    });

    console.log("nama " + name);

    // var div = $("div")[0];
    // jQuery.data(div, "test", {
    //   first: name
    // });
    // $("span").first().text(jQuery.data(div, "test").first);

    $("#welcomeName").html(name);

    return false;
  });







});
