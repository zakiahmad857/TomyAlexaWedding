// PARALLAX
var scene = document.getElementById("scene");
var parallax = new Parallax(scene);

// LANGUAGE
var arrLang = {
  'eng': {
    'welcome': 'Welcome',
    'language': 'Choose Language',
    'gift': 'Send Gift with Ease :)',
    'bank': 'Via Bank Transfer',
    'norek': 'Account number'
  },

  'ind': {
    'welcome': 'Selamat Datang',
    'language': 'Pilih Bahasa',
    'gift': 'Kirim hadiah dengan mudah :) wkwk',
    'bank': 'Via Transfer Bank',
    'norek': 'No rekening'
  }
};


$(document).ready(function(){

  // LANGUAGE
  $(document).on('click', 'input[type="checkbox"]', function() {
    $('input[type="checkbox"]').not(this).prop('checked', false);
  });

  var checkboxValues = JSON.parse(localStorage.getItem("checkboxValues")) || {},
    $checkboxes = $("#checkbox-container :checkbox");

    // console.log($checkboxes);
  $checkboxes.on("change", function() {
    checkboxValues[this.id] = this.checked;

    localStorage.setItem("checkboxValues", JSON.stringify(checkboxValues));

    selectLanguage(this);
  });

  // On page load
  $.each(checkboxValues, function(key, value) {
    selectLanguage(this);
  });

  var $checkbox = $('input[type=checkbox]');
  $checkbox.change(function() {

    var checked = $(this).prop('checked');

    selectLanguage(this);
  });


  $("#toggleLang").on('change', function(){
    var tog = $("#toggleLang").prop('checked');
    toggleLanguange(tog);
    console.log(tog);
  });

  // MODALS
  // Welcoming and Angpao Modal
    $("#welcomeModal").css("display", "block");

  // Angpao Modal, when the user clicks on the angpao-button, open the modal
    $("#angpao").click(function(){
      $("#angpaoModal").css("display", "block");
    });

  // When the user clicks on (x), close the modal
    $("span").click(function(){
      $("#angpaoModal").css("display", "none");
      $("#welcomeModal").css("display", "none");
    });

    $("#checkbox-ind").click(function(){
      $("#welcomeModal").delay(1000).queue(function(next){
        $("#welcomeModal").css("display", "none")
      });
    });

    $("#checkbox-eng").click(function(){
      $("#welcomeModal").delay(1000).queue(function(next){
        $("#welcomeModal").css("display", "none")
      });
    });

  // When the user clicks anywhere outside of the modal, close it
    $(window).click(function(e){
      if ((e.target.id == "angpaoModal")||(e.target.id == "welcomeModal")) {
        $("#angpaoModal").css("display", "none");
        $("#welcomeModal").css("display", "none");
      }
    });

  // ANGPAO
  // Angpao Hover
  $("#angpao").hover(
    function(){
      $("#angpao").attr("src", "images/open-envelope.svg");
  },
    function(){
      $("#angpao").attr("src", "images/envelope.svg");
    }
  );


  // WEB TOUR
  var tour = new Tour({
    steps: [
      {
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
          content: "lalalallalalalalallalalalalalalalallalalalalla",
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
          placement: "bottom",
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
    template:'<div class="popover tour" role="tooltip"> <div class="arrow"></div> <h3 class="popover-title"></h3> <div class="popover-content"></div> <div class="popover-navigation"> <p class="steps">Step 1 of 7</p> <div class="btn-group"> <button class="btn btn-sm btn-secondary btn-prev" data-role="prev">&lt;</button> <button class="btn btn-sm btn-secondary btn-next" data-role="next">Next &gt;</button> <button class="btn btn-sm btn-secondary" data-role="pause-resume" data-pause-text="Pause" data-resume-text="Resume">Pause</button> </div> <button class="btn btn-sm btn-secondary" data-role="end">End tour</button> </div> </div>',
  });


  // tour.init();
  // tour.start();
  $("#info").click(function(){
    tour.restart();
  });

  $("#idPlanet").click(function(){
    console.log("masuk");
  });
});

// lANGUANGE FUNCTIONS
function selectLanguage(check){
  if(check.id === "checkbox-ind" && check.checked){
    var lang = "ind";
    $("#toggleLang").prop('checked', false);
    $(".lang").each(function(index, element) {
      $(this).text(arrLang[lang][$(this).attr('key')]);
    });
  }

  if(check.id === "checkbox-eng" && check.checked){
    var lang = "eng";
    $("#toggleLang").prop('checked', true);
    $(".lang").each(function(index, element) {
      $(this).text(arrLang[lang][$(this).attr('key')]);
    });
  }
}

function toggleLanguange(tog){
  console.log("func: " + tog);
  if(tog){
    var lang = "eng";
    $(".lang").each(function(index, element) {
      $(this).text(arrLang[lang][$(this).attr('key')]);
    });
  } else{
    var lang = "ind";
    $(".lang").each(function(index, element) {
      $(this).text(arrLang[lang][$(this).attr('key')]);
    });
  }
}
