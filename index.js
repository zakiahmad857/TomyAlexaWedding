// PARALLAX
var scene = document.getElementById("scene");
// var parallax = new Parallax(scene);

// LANGUAGE
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
    'vcall_1': '5 Minutes to Meet The Bride & Groom',
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
    'vcall_1': '5 Menit Lagi untuk Bertemu Kedua Mempelai',
    'vcall_2': 'Anda akan menunggu di ruang tunggu dan dapat kembali mengexplore website setelah video call',
    // angpao
    'gift': 'Kirim hadiah dengan mudah :) wkwk',
    'bank': 'Via Transfer Bank',
    'norek': 'No rekening'
  }
};



$(document).ready(function() {
  // WEB TOUR
  var tour = new Tour({
    steps: [{
        element: "#gallery",
        title: "Gallery Foto & Video",
        content: "Kamu bisa melihat foto dan video Pre-Wed, Lamaran, serta Akad Pernikahan dari Tomy & Lexa ",
        placement: "right",
      },
      {
        element: "#idPlanet",
        title: "Pelaminan",
        content: "Di sini kamu bisa melihat siapa yang sedang bertemu dengan mempelai dan siapa yang ada di antrian berikutnya",
        placement: "top",
      },
      {
        element: "#angpao",
        title: "Donasi",
        content: "Kamu bisa memberikan rasa sayangmu untuk masa depan Tomy & Lexa di sini",
        placement: "right",
      },
      {
        element: "#souvenir",
        title: "Cinderamata",
        content: "Sebagai tanda terima kasih dari Tomy & Lexa, ada cinderamata untukmu di sini",
        placement: "top",
      },
      {
        element: "#live-mc",
        content: "MC (nama) akan menemanimu selama acara berlangsung",
        placement: "top",
      },
      {
        element: "#info",
        title: "Instructions",
        content: "Jika kamu ingin membaca ulang petunjuk sebelumnya, silakan klik tombol ini",
        placement: "left",
      }
    ],
    container: 'body',
    backdrop: true,
    smartPlacement: true,
    keyboard: true,
    storage: window.localStorage,
    debug: false,
    autoscroll: false,
    backdropPadding: 0,
    redirect: true,
    template: '<div class="popover tour" role="tooltip"> <div class="arrow"></div> <h3 class="popover-title"></h3> <div class="popover-content"></div> <div class="popover-navigation"> <div class="btn-group"> <button class="btn btn-sm btn-prev" data-role="prev">Prev</button> <button class="btn btn-sm btn-next" data-role="next">Next</button> <button class="btn btn-sm btn-secondary" data-role="pause-resume" data-pause-text="Pause" data-resume-text="Resume">Pause</button> </div> <button class="btn btn-sm end" data-role="end">End tour</button> </div> </div>',
  });

  var tourEng = new Tour({
    steps: [{
        element: "#gallery",
        title: "Video & Photo Gallery",
        content: "Take a look of Lexa & Tomy’s Pre-Wedding, Engagement and Wedding Ceremony photos and videos here",
        placement: "right",
      },
      {
        element: "#idPlanet",
        title: "The Aisle",
        content: "Take a peak of who are currently meeting the bride & groom. You can also see who’s up in the line to meet them soon!",
        placement: "top",
      },
      {
        element: "#angpao",
        title: "Show your support here",
        content: "We have provided ways on how you can support Tomy & Lexa’s in their next season.",
        placement: "right",
      },
      {
        element: "#souvenir",
        title: "Wedding Souvenir",
        content: "As a thank you, Tomy & Lexa have a special little something for you to remember this precious moment with them",
        placement: "top",
      },
      {
        element: "#live-mc",
        content: "MC (name) will accompany the guests during the event but we’re sorry he/she will only use Bahasa",
        placement: "top",
      },
      {
        element: "#info",
        title: "Instructions",
        content: "You can click this icon if you want to repeat the instructions",
        placement: "left",
      }
    ],
    container: 'body',
    backdrop: true,
    smartPlacement: true,
    keyboard: true,
    storage: window.localStorage,
    debug: false,
    autoscroll: false,
    backdropPadding: 0,
    redirect: true,
    template: '<div class="popover tour" role="tooltip"> <div class="arrow"></div> <h3 class="popover-title"></h3> <div class="popover-content"></div> <div class="popover-navigation"> <div class="btn-group"> <button class="btn btn-sm btn-prev" data-role="prev">Prev</button> <button class="btn btn-sm btn-next" data-role="next">Next</button> <button class="btn btn-sm btn-secondary" data-role="pause-resume" data-pause-text="Pause" data-resume-text="Resume">Pause</button> </div> <button class="btn btn-sm end" data-role="end">End tour</button> </div> </div>',
  });


  $("#info").click(function() {
    if (toggleLang.checked) {
      tourEng.restart();
    } else {
      tour.restart();
    }
  });

  // login localStorage
  var dirPath = dirname(location.href);

  function dirname(path) {
    return path.replace(/\\/g, '/').replace(/\/[^\/]*$/, '');
  }


  // $("#test").click(function() {
  //   console.log($.cookie("token"));
  // });

  //
  // var div = $("#welcome-name")[0];
  // jQuery.data(div, "test", {
  //   first: 16,
  //   last: "pizza!"
  // });

  // LOGIN
  // $("#btn-login").click(function(){
  //   var inputID = $("#idNumber").val();
  //   if(inputID === "hai123"){
  //     var fullPath = dirPath + "/homepage.html";
  //     window.location=fullPath;
  //     return false;
  //   } else {
  //     alert("inputID sala");
  //   }
  // });


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

  // On page load
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

  if (welcomeState != 'shown') {

    $("#welcomeModal").css('display', 'block');
    localStorage.setItem('welcomeState', 'shown');

    $("#checkbox-ind").click(function() {
      checkboxValues["toggleLang"] = false;
      localStorage.setItem("checkboxValues", JSON.stringify(checkboxValues));
    });

    $("#checkbox-eng").click(function() {
      checkboxValues["toggleLang"] = true;
      localStorage.setItem("checkboxValues", JSON.stringify(checkboxValues));
    });
  }


  $("#toggleLang").on('change', function() {
    var tog = $("#toggleLang").prop('checked');
    toggleLanguange(tog);
  });

  // Angpao Modal, when the user clicks on the angpao-button, open the modal
  $("#angpao").click(function() {
    $("#angpaoModal").css("display", "block");
  });

  $("#faq").click(function() {
    $("#faqModal").css("display", "block");
  });


  // When the user clicks on (x), close the modal
  $("span").click(function() {
    $("#angpaoModal").css("display", "none");
    $("#faqModal").css("display", "none");
  });

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

  // When the user clicks next button, close it & init web tour
  $("#btn-next").click(function() {
    $("#earlyBird").css("display", "none");
    if (toggleLang.checked) {
      tourEng.restart();
    } else {
      tour.restart();
    }
  });
  $("#btn-next-2").click(function() {
    $("#karetModal").css("display", "none");
    if (toggleLang.checked) {
      tourEng.restart();
    } else {
      tour.restart();
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
