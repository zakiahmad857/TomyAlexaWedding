
// Website tour
// $(function () {
//   $('[data-toggle="tooltip"]').tooltip()
// })
//
// $(function () {
//   $('[data-toggle="popover"]').popover()
// })

$(document).ready(function(){
  var tour = new Tour({
    steps: [
      {
          element: "#idBulan",
          title: "Bulan",
          content: "lalalallalalalalallalalalalalalalallalalalalla",
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
    template:'<div class="popover tour" role="tooltip"> <div class="arrow"></div> <h3 class="popover-title"></h3> <div class="popover-content"></div> <div class="popover-navigation"> <div class="btn-group"> <button class="btn btn-sm btn-secondary" data-role="prev">&laquo; Prev</button> <button class="btn btn-sm btn-secondary" data-role="next">Next &raquo;</button> <button class="btn btn-sm btn-secondary" data-role="pause-resume" data-pause-text="Pause" data-resume-text="Resume">Pause</button> </div> <button class="btn btn-sm btn-secondary" data-role="end">End tour</button> </div> </div>',
  });

  tour.init();
  // tour.start();
  $("#info").click(function(){
    tour.restart();
  });

});
