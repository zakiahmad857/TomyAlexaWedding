$(window).load(function(){
  var name = null;

  cookieToken = $.cookie("token");
  console.log("token " + cookieToken);

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
  $("#welcomeName").html(name);
});
