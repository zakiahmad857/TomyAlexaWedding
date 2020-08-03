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

  // login localStorage
  var dirPath = dirname(location.href);

  // LOGIN
  $("#btn-login").click(function(){
    var inputID = $("#idNumber").val();
    if(inputID === "haloha123"){
      var fullPath = dirPath + "/homepage.html";
      window.location=fullPath;
      return false;
    } else {
      alert("inputID sala");
    }
  });

  function dirname(path){
   return path.replace(/\\/g,'/').replace(/\/[^\/]*$/, '');
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

  if(welcomeState != 'shown'){

      $("#welcomeModal").css('display', 'block');
      localStorage.setItem('welcomeState','shown');

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
    if ((e.target.id == "angpaoModal") || (e.target.id == "earlyBird")) {
      $("#angpaoModal").css("display", "none");
      $("#earlyBird").css("display", "none");
    }
  });

  // When the user press escape button, close it
  $("body").keydown(function(e) {
    if (e.key == "Escape") {
      $("#angpaoModal").css("display", "none");
    }
  });

  $("body").keydown(function(e) {
    if (e.key == "Escape") {
      $("#earlyBird").css("display", "none");
      $("#karetModal").css("display", "none");
      $("#faqModal").css("display", "none");
      tour.init();
    }
  });

  // When the user clicks next button, close it & init web tour
  $("#btn-next").click(function(){
    $("#earlyBird").css("display", "none");
    tour.init();
  });
  $("#btn-next-2").click(function(){
    $("#karetModal").css("display", "none");
    tour.init();
  });

  // WEB TOUR
  var tour = new Tour({
    steps: [{
        element: "#idBulan",
        title: "Bulan",
        content: "Here is the ‘pelaminan’ live streaming area. You can see Who’s in the pelaminan, also the next guest names.",
        placement: "right",
      },
      {
        element: "#idAstronaut",
        title: "Astronaut",
        content: "lalalallalalalalallalalalalalalalallalalalalla",
        placement: "top",
      },
      {
        element: "#idPlanet",
        title: "Planet",
        content: "Here is the ‘pelaminan’ live streaming area. You can see Who’s in the pelaminan, also the next guest names.",
      },
      {
        element: "#idRocket",
        title: "Rocket",
        content: "lalalallalalalalallalalalalalalalallalalalalla",
        placement: "left",
      },
      {
        element: "#angpao",
        title: "Angpao gift for the newly wed",
        content: "Don’t worry you can still send your gift, see more info here ;)",
        placement: "right",
      },
      {
        element: "#info",
        title: "Instructions",
        content: "If you want to re-read these instructions again just click this icon",
        placement: "left",
      }
    ],
    container: 'body',
    backdrop: true,
    smartPlacement: true,
    keyboard: true,
    storage: window.localStorage,
    debug: false,
    backdropPadding: 0,
    redirect: true,
    template: '<div class="popover tour" role="tooltip"> <div class="arrow"></div> <h3 class="popover-title"></h3> <div class="popover-content"></div> <div class="popover-navigation"> <div class="btn-group"> <button class="btn btn-sm btn-prev" data-role="prev">Prev</button> <button class="btn btn-sm btn-next" data-role="next">Next</button> <button class="btn btn-sm btn-secondary" data-role="pause-resume" data-pause-text="Pause" data-resume-text="Resume">Pause</button> </div> <button class="btn btn-sm end" data-role="end">End tour</button> </div> </div>',
  });


  $("#info").click(function() {
    tour.restart();
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
