// lOADER

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

});

// // LANGUAGE
var arrLang = {
  'eng': {
    // welcoming modal
    'welcome': 'Welcome',
    'language': 'Choose Language',
    // welcoming modal - early bird
    'earlyBird_1': 'Video Call Access',
    'earlyBird_2': 'We will give you the video call access in',
    'earlyBird_3': 'The video call access will show up automatically when the countdown is done.',
    'earlyBird_4': 'While waiting, let us show you around the "Reception Venue"',
    // welcoming modal - jam Karet
    'sorry': 'Whoops you’re late, we’re sorry you’re not able to meet Tomy & Lexa. Here some message from them..',
    // video call pop-up
    'vcall_1': ' detik lagi Anda akan menuju halaman video call',
    'vcall_2': 'You will be seated in the waiting room, you can explore the website after the video call',
    // angpao
    'gift': 'Send Gift with Ease :)',
    'bank': 'Via Bank Transfer',
    'norek': 'Account number',
  },

  'ind': {
    // welcoming modal
    'welcome': 'Selamat Datang',
    'language': 'Pilih Bahasa',
    // welcoming modal - early bird
    'earlyBird_1': 'Akses Video Call',
    'earlyBird_2': 'Akses video call akan kami berikan dalam waktu',
    'earlyBird_3': 'Akses video call akan muncul otomatis ketika hitungan mundur selesai',
    'earlyBird_4': 'Sambil menunggu, ayo kita berkeliling venue!',
    // welcoming modal - jam Karet
    'sorry': 'Ups Anda telat, mohon maaf Anda tidak dapat bertemu dengan Tomy & Lexa. Berikut pesan dari Tomy & Lexa..',
    // video call pop-up
    'vcall_1': ' detik lagi Anda akan menuju halaman video call',
    'vcall_2': 'Anda akan menunggu di ruang tunggu dan dapat kembali mengexplore website setelah video call',
    // angpao
    'gift': 'Kirim hadiah dengan mudah :) wkwk',
    'bank': 'Via Transfer Bank',
    'norek': 'No rekening'
  }
};
console.log("window screen");
console.log(window.screen.width);

var browserWidth = $(window).width();
var browserHeight = $(window).height();
var screenWidth = window.screen.width;
var screenHeight = window.screen.height;
var perfectWidth = 0.95 * screenWidth;
var perfectHeight = 0.8 * screenHeight;

console.log("screenWidth awal " + screenWidth);
console.log("screenHeight awal " + screenHeight);
console.log("browserWidth awal " + browserWidth);
console.log("browserHeight awal " + browserHeight);
console.log("perfectWidth awal " + perfectWidth);
console.log("perfectHeight awal " + perfectHeight);

if ((browserWidth < perfectWidth ) || (browserHeight < perfectHeight)){
  $(".browser-resize").css('display', 'block');
  $(".mobile-content").css('display', 'none');
  $(".desktop-content").css('display', 'none');
} else {
  $(".browser-resize").css('display', 'none');
  $(".desktop-content").css('display', 'block');
}


$(window).resize(function() {
  console.log('window was resized');

  console.log("screenWidth " + screenWidth);
  console.log("screenHeight " + screenHeight);
  console.log("browserWidth " + browserWidth);
  console.log("browserHeight " + browserHeight);
  console.log("perfectWidth " + perfectWidth);
  console.log("perfectHeight " + perfectHeight);

  browserWidth = $(window).width();
  browserHeight = $(window).height();

  if ((browserWidth < perfectWidth ) || (browserHeight < perfectHeight)){
    $(".browser-resize").css('display', 'block');
    $(".mobile-content").css('display', 'none');
    $(".desktop-content").css('display', 'none');
  } else {
    $(".browser-resize").css('display', 'none');
    $(".desktop-content").css('display', 'block');
  }
});

$(document).ready(function() {



  // Path
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

  // LANGUAGE
  $(document).on('click', '#checkbox-container input[type="checkbox"]', function() {
    $('#checkbox-container input[type="checkbox"]').not(this).prop('checked', false);
  });

  var checkboxValues = JSON.parse(localStorage.getItem("checkboxValues")) || {};
  var $checkboxes = $("#toggleLang");

  $checkboxes.on("change", function() {

    checkboxValues[this.id] = this.checked;
    localStorage.setItem("checkboxValues", JSON.stringify(checkboxValues));

    selectLanguage(this);
  });

  // On page load - Language
  $.each(checkboxValues, function(key, value) {
    $("#toggleLang").prop('checked', value);
    selectLanguage(this);
    toggleLanguange(value);
  });

  var $checkbox = $('input[type=checkbox]');
  $checkbox.change(function() {
    var checked = $(this).prop('checked');
    selectLanguage(this);
  });

  // Welcoming modal once shown per user
  var welcomeState = localStorage.getItem("welcomeState");
  var karetState = localStorage.getItem("karetState");

  if (welcomeState != 'shown') {

    $("#welcomeModal").css('display', 'block');

    $("#checkbox-ind").click(function() {
      checkboxValues["toggleLang"] = false;
      localStorage.setItem("checkboxValues", JSON.stringify(checkboxValues));

      console.log("Welcome state external 2");
      console.log(welcomeState);
    });

    $("#checkbox-eng").click(function() {
      checkboxValues["toggleLang"] = true;
      localStorage.setItem("checkboxValues", JSON.stringify(checkboxValues));
    });
  }

  // Set localstorage welcomestate
  $("#btn-welcome").click(function(){
    localStorage.setItem('welcomeState', 'shown');
  });


  $("#toggleLang").on('change', function() {
    var tog = $("#toggleLang").prop('checked');
    toggleLanguange(tog);
  });

  // Angpao-Faq Modal, when the user clicks on the button, open the modal
  $("#angpao").click(function() {
    $("#angpaoModal").css("display", "block");
  });

  $("#faq").click(function() {
    $("#faqModal").css("display", "block");
  });

  // Exit button, go to homepage
  $(".exit").click(function() {
    window.location = homePath;
  });


  // When the user clicks on (x), close the modal
  $("span").click(function() {
    $("#angpaoModal").css("display", "none");
    $("#faqModal").css("display", "none");
  });

  // When the user clicks anywhere outside of the modal, close it
  $(window).click(function(e) {
    if ((e.target.id == "angpaoModal") || (e.target.id == "earlyBird") || (e.target.id == "faqModal")) {
      $("#angpaoModal").css("display", "none");
      $("#earlyBird").css("display", "none");
      $("#faqModal").css("display", "none");
    }
  });

  // When the user press escape button, close it
  $("body").keydown(function(e) {
    if (e.key == "Escape") {
      $("#angpaoModal").css("display", "none");
      $("#faqModal").css("display", "none");
    }
  });

});

// lANGUANGE FUNCTIONS
function selectLanguage(check) {
  if (check.id === "checkbox-ind" && check.checked) {
    var lang = "ind";
    $("#toggleLang").prop('checked', false);
    $(".lang").each(function(index, element) {
      $(this).text(arrLang[lang][$(this).attr('key')]);
    });
  }

  if (check.id === "checkbox-eng" && check.checked) {
    var lang = "eng";
    $("#toggleLang").prop('checked', true);
    $(".lang").each(function(index, element) {
      $(this).text(arrLang[lang][$(this).attr('key')]);
    });
  }
}

function toggleLanguange(tog) {
  if (tog) {
    var lang = "eng";
    $(".lang").each(function(index, element) {
      $(this).text(arrLang[lang][$(this).attr('key')]);
    });
  } else {
    var lang = "ind";
    $(".lang").each(function(index, element) {
      $(this).text(arrLang[lang][$(this).attr('key')]);
    });
  }
}

// youtube
// function onYouTubePlayerAPIReady() {
//   // create the global player from the specific iframe (#video)
//   player = new YT.Player('videoMC', {
//     events: {
//       // call this function when player is ready to use
//       'onReady': onPlayerReady
//     }
//   });
// }
//
// function onPlayerReady(event) {
//   // bind events
//   player.mute();
//
// }
