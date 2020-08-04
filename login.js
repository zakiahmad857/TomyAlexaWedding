$(document).ready(function() {
  const url = "https://webnikahapi.arthatronic.com/api/login/";
  var token;
  var tmp = null;

  $("#btn-login").click(function() {
    var person = new Object();
    person.username = $("#username").val();
    person.password = "12345678";

    console.log(person);

    var tmp = null;
    $.ajax({
     async: false,
      type: "POST",
      global: false,
      dataType: 'json',
      url: url,
      data: person,
      success: function(data) {
        tmp = data;
      }
    });

    var token = tmp.token;
    console.log(token);

    $.cookie("token", token, {
      path: '/'
    });
    // $.removeCookie("token");
    cookieToken = $.cookie("token");
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
        console.log(result[0]);
        name = result[0].name;
        console.log(name);
      },
      error: function(err){
        console.log(err);
      }
    });

    console.log("nama " + name);

    return false;
  });







});
