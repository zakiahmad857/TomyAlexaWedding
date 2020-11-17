var dirPath = dirname(location.href);

// TOKEN DATA
var name = null;

cookieToken = $.cookie("token");
console.log("token " + cookieToken);

if (cookieToken == null) {
  var fullPath = dirPath + "/login";
  console.log(fullPath);
  window.location = fullPath;
}

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
    timeSet = result[0].time;
    console.log(name);
    console.log(timeSet);

  },
  error: function(err) {
    console.log(err);
  }
});

console.log("nama homepage " + name);
$("#welcomeName").html(name);

function dirname(path) {
  return path.replace(/\\/g, '/').replace(/\/[^\/]*$/, '');
}

// cek manual
// var now = new Date();
// var timeNow = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
// var endTime = new Date("5 August 2020 " + now.getHours().toString() + ":" + now.getMinutes().toString() + ":" + parseInt(now.getSeconds()).toString() + " GMT+07:00");


var endTime = new Date("7 August 2020 " + timeSet + " GMT+07:00");

console.log("endtimeeeee" + endTime);
// endTime = (Date.parse(endTime) / 1000) + 10;

endTime = (Date.parse(endTime) / 1000);

var welcomeState = localStorage.getItem("welcomeState");

function makeTimer() {

  // var endTime = new Date("5 August 2020 " + timeSet + " GMT+07:00");

  // manual
  now = new Date();
  timeNow = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

  // var endTime = new Date("6 August 2020 17:38:05 GMT+07:00");

  timeNow = (Date.parse(now) / 1000);

  var timeLeft = endTime - timeNow;
  console.log("timeleft " + timeLeft);
  var days = Math.floor(timeLeft / 86400);
  var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
  var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
  var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

  if (hours < "10") {
    hours = "0" + hours;
  }
  if (minutes < "10") {
    minutes = "0" + minutes;
  }
  if (seconds < "10") {
    seconds = "0" + seconds;
  }

  $("#hours").html(hours + "<span> :</span>");
  $("#minutes").html(minutes + "<span> :</span>");
  $("#seconds").html(seconds);

  console.log(hours + ":" + minutes + ":" + seconds);

  // Popup Vcall
  if (hours == "00" && minutes == "00" && seconds == "00") {
    $("#welcomeModal").css('display', 'none');
    $("#earlyBird").css('display', 'none');
    $("#vcallModal").css('display', 'block');

    console.log("nol");

    tour.end();
    tourEng.end();

    var counterVcall = 3;
    var interval = setInterval(function() {
      // Display 'counter' wherever you want to display it.
      // $(".redirectVcall").html(counterVcall);
      counterVcall--;


      console.log(counterVcall);
      if (counterVcall == 0) {
        // Display a login box
        clearInterval(interval);
        $("#vcallModal").css('display', 'block');
        console.log(dirPath);
        var fullPath = dirPath + "/Vcall";
        console.log(fullPath);
        window.location = fullPath;
        // return false;
      }
    }, 1000);
  }

  // Jam Karet
  if (hours < "3") {
    // Select language @ modal
    $("#checkbox-ind").click(function() {
      $("#toggleLang").prop('checked', false);

      // close modal, pop user modal
      $("#welcomeModal").delay(1000).queue(function(next) {
        $("#welcomeModal").css("display", "none");
        $("#earlyBird").css("display", "block");
      });
    });

    $("#checkbox-eng").click(function() {
      $("#toggleLang").prop('checked', true);

      $("#welcomeModal").delay(1000).queue(function(next) {
        $("#welcomeModal").css("display", "none");
        $("#earlyBird").css("display", "block");
      });
    });
  }

  if (hours > "20") {
    $("#checkbox-ind").click(function() {
      $("#welcomeModal").delay(1000).queue(function(next) {
        $("#earlyBird").css('display', 'none');
        $("#karetModal").css('display', 'block');
      });
    });
    $("#checkbox-eng").click(function() {
      $("#welcomeModal").delay(1000).queue(function(next) {
        $("#earlyBird").css('display', 'none');
        $("#karetModal").css('display', 'block');
      });
    });
  }
}

setInterval(function() {
  makeTimer();
}, 1000);

$("#btn-next-2").click(function() {
  $('#welcomeModal').css('display', 'none');
  $("#earlyBird").css('display', 'none');
});
