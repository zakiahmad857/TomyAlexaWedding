/* =================================
MAGNIFIC POPUP
=================================== */

$(document).ready(function(){
  $('.foto1').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false
    });
    function noScroll() {
  window.scrollTo(0, 0);
}

// add listener to disable scroll
window.addEventListener('scroll', noScroll);


  $('.foto1').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0,1]
    },
    image: {
    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    }
  });
});
