// lOADER

// $('html, body').css({
//   overflow: 'hidden',
//   height: '100%'
// });
//
// $(window).on('load', function() {
//
//   $('html, body').css({
//     overflow: 'hidden',
//     height: 'auto'
//   })
//
//   $("#loading").addClass("loader-hidden");
//
// });

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
    // Pelaminan
    'in-pelaminan': "Who's in:",
    'next-pelaminan': "Up next:",
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
    'norek': 'No rekening',
    // Pelaminan
    'in-pelaminan': "Sedang di pelaminan:",
    'next-pelaminan': "Selanjutnya:",
  }
};

/* Detect-zoom
 * -----------
 * Cross Browser Zoom and Pixel Ratio Detector
 * Version 1.0.4 | Apr 1 2013
 * dual-licensed under the WTFPL and MIT license
 * Maintained by https://github/tombigel
 * Original developer https://github.com/yonran
 */

//AMD and CommonJS initialization copied from https://github.com/zohararad/audio5js
(function (root, ns, factory) {
    "use strict";

    if (typeof (module) !== 'undefined' && module.exports) { // CommonJS
        module.exports = factory(ns, root);
    } else if (typeof (define) === 'function' && define.amd) { // AMD
        define("detect-zoom", function () {
            return factory(ns, root);
        });
    } else {
        root[ns] = factory(ns, root);
    }

}(window, 'detectZoom', function () {

    /**
     * Use devicePixelRatio if supported by the browser
     * @return {Number}
     * @private
     */
    var devicePixelRatio = function () {
        return window.devicePixelRatio || 1;
    };

    /**
     * Fallback function to set default values
     * @return {Object}
     * @private
     */
    var fallback = function () {
        return {
            zoom: 1,
            devicePxPerCssPx: 1
        };
    };
    /**
     * IE 8 and 9: no trick needed!
     * TODO: Test on IE10 and Windows 8 RT
     * @return {Object}
     * @private
     **/
    var ie8 = function () {
        var zoom = Math.round((screen.deviceXDPI / screen.logicalXDPI) * 100) / 100;
        return {
            zoom: zoom,
            devicePxPerCssPx: zoom * devicePixelRatio()
        };
    };

    /**
     * For IE10 we need to change our technique again...
     * thanks https://github.com/stefanvanburen
     * @return {Object}
     * @private
     */
    var ie10 = function () {
        var zoom = Math.round((document.documentElement.offsetHeight / window.innerHeight) * 100) / 100;
        return {
            zoom: zoom,
            devicePxPerCssPx: zoom * devicePixelRatio()
        };
    };

	/**
	* For chrome
	*
	*/
    var chrome = function()
    {
    	var zoom = Math.round(((window.outerWidth) / window.innerWidth)*100) / 100;
        return {
            zoom: zoom,
            devicePxPerCssPx: zoom * devicePixelRatio()
        };
    }

	/**
	* For safari (same as chrome)
	*
	*/
    var safari= function()
    {
    	var zoom = Math.round(((document.documentElement.clientWidth) / window.innerWidth)*100) / 100;
        return {
            zoom: zoom,
            devicePxPerCssPx: zoom * devicePixelRatio()
        };
    }


    /**
     * Mobile WebKit
     * the trick: window.innerWIdth is in CSS pixels, while
     * screen.width and screen.height are in system pixels.
     * And there are no scrollbars to mess up the measurement.
     * @return {Object}
     * @private
     */
    var webkitMobile = function () {
        var deviceWidth = (Math.abs(window.orientation) == 90) ? screen.height : screen.width;
        var zoom = deviceWidth / window.innerWidth;
        return {
            zoom: zoom,
            devicePxPerCssPx: zoom * devicePixelRatio()
        };
    };

    /**
     * Desktop Webkit
     * the trick: an element's clientHeight is in CSS pixels, while you can
     * set its line-height in system pixels using font-size and
     * -webkit-text-size-adjust:none.
     * device-pixel-ratio: http://www.webkit.org/blog/55/high-dpi-web-sites/
     *
     * Previous trick (used before http://trac.webkit.org/changeset/100847):
     * documentElement.scrollWidth is in CSS pixels, while
     * document.width was in system pixels. Note that this is the
     * layout width of the document, which is slightly different from viewport
     * because document width does not include scrollbars and might be wider
     * due to big elements.
     * @return {Object}
     * @private
     */
    var webkit = function () {
        var important = function (str) {
            return str.replace(/;/g, " !important;");
        };

        var div = document.createElement('div');
        div.innerHTML = "1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>0";
        div.setAttribute('style', important('font: 100px/1em sans-serif; -webkit-text-size-adjust: none; text-size-adjust: none; height: auto; width: 1em; padding: 0; overflow: visible;'));

        // The container exists so that the div will be laid out in its own flow
        // while not impacting the layout, viewport size, or display of the
        // webpage as a whole.
        // Add !important and relevant CSS rule resets
        // so that other rules cannot affect the results.
        var container = document.createElement('div');
        container.setAttribute('style', important('width:0; height:0; overflow:hidden; visibility:hidden; position: absolute;'));
        container.appendChild(div);

        document.body.appendChild(container);
        var zoom = 1000 / div.clientHeight;
        zoom = Math.round(zoom * 100) / 100;
        document.body.removeChild(container);

        return{
            zoom: zoom,
            devicePxPerCssPx: zoom * devicePixelRatio()
        };
    };

    /**
     * no real trick; device-pixel-ratio is the ratio of device dpi / css dpi.
     * (Note that this is a different interpretation than Webkit's device
     * pixel ratio, which is the ratio device dpi / system dpi).
     *
     * Also, for Mozilla, there is no difference between the zoom factor and the device ratio.
     *
     * @return {Object}
     * @private
     */
    var firefox4 = function () {
        var zoom = mediaQueryBinarySearch('min--moz-device-pixel-ratio', '', 0, 10, 20, 0.0001);
        zoom = Math.round(zoom * 100) / 100;
        return {
            zoom: zoom,
            devicePxPerCssPx: zoom
        };
    };

    /**
     * Firefox 18.x
     * Mozilla added support for devicePixelRatio to Firefox 18,
     * but it is affected by the zoom level, so, like in older
     * Firefox we can't tell if we are in zoom mode or in a device
     * with a different pixel ratio
     * @return {Object}
     * @private
     */
    var firefox18 = function () {
        return {
            zoom: firefox4().zoom,
            devicePxPerCssPx: devicePixelRatio()
        };
    };

    /**
     * works starting Opera 11.11
     * the trick: outerWidth is the viewport width including scrollbars in
     * system px, while innerWidth is the viewport width including scrollbars
     * in CSS px
     * @return {Object}
     * @private
     */
    var opera11 = function () {
        var zoom = window.top.outerWidth / window.top.innerWidth;
        zoom = Math.round(zoom * 100) / 100;
        return {
            zoom: zoom,
            devicePxPerCssPx: zoom * devicePixelRatio()
        };
    };

    /**
     * Use a binary search through media queries to find zoom level in Firefox
     * @param property
     * @param unit
     * @param a
     * @param b
     * @param maxIter
     * @param epsilon
     * @return {Number}
     */
    var mediaQueryBinarySearch = function (property, unit, a, b, maxIter, epsilon) {
        var matchMedia;
        var head, style, div;
        if (window.matchMedia) {
            matchMedia = window.matchMedia;
        } else {
            head = document.getElementsByTagName('head')[0];
            style = document.createElement('style');
            head.appendChild(style);

            div = document.createElement('div');
            div.className = 'mediaQueryBinarySearch';
            div.style.display = 'none';
            document.body.appendChild(div);

            matchMedia = function (query) {
                style.sheet.insertRule('@media ' + query + '{.mediaQueryBinarySearch ' + '{text-decoration: underline} }', 0);
                var matched = getComputedStyle(div, null).textDecoration == 'underline';
                style.sheet.deleteRule(0);
                return {matches: matched};
            };
        }
        var ratio = binarySearch(a, b, maxIter);
        if (div) {
            head.removeChild(style);
            document.body.removeChild(div);
        }
        return ratio;

        function binarySearch(a, b, maxIter) {
            var mid = (a + b) / 2;
            if (maxIter <= 0 || b - a < epsilon) {
                return mid;
            }
            var query = "(" + property + ":" + mid + unit + ")";
            if (matchMedia(query).matches) {
                return binarySearch(mid, b, maxIter - 1);
            } else {
                return binarySearch(a, mid, maxIter - 1);
            }
        }
    };

    /**
     * Generate detection function
     * @private
     */
    var detectFunction = (function () {
        var func = fallback;
        //IE8+
        if (!isNaN(screen.logicalXDPI) && !isNaN(screen.systemXDPI)) {
            func = ie8;
        }
        // IE10+ / Touch
        else if (window.navigator.msMaxTouchPoints) {
            func = ie10;
        }
		//chrome
		else if(!!window.chrome && !(!!window.opera || navigator.userAgent.indexOf(' Opera') >= 0)){
			func = chrome;
		}
		//safari
		else if(Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0){
			func = safari;
		}
        //Mobile Webkit
        else if ('orientation' in window && 'webkitRequestAnimationFrame' in window) {
            func = webkitMobile;
        }
        //WebKit
        else if ('webkitRequestAnimationFrame' in window) {
            func = webkit;
        }
        //Opera
        else if (navigator.userAgent.indexOf('Opera') >= 0) {
            func = opera11;
        }
        //Last one is Firefox
        //FF 18.x
        else if (window.devicePixelRatio) {
            func = firefox18;
        }
        //FF 4.0 - 17.x
        else if (firefox4().zoom > 0.001) {
            func = firefox4;
        }

        return func;
    }());


    return ({

        /**
         * Ratios.zoom shorthand
         * @return {Number} Zoom level
         */
        zoom: function () {
            return detectFunction().zoom;
        },

        /**
         * Ratios.devicePxPerCssPx shorthand
         * @return {Number} devicePxPerCssPx level
         */
        device: function () {
            return detectFunction().devicePxPerCssPx;
        }
    });
}));

//-----------------------
// debouncing plugin by Paul Irish https://www.paulirish.com/2009/throttled-smartresize-jquery-event-handler/
//-----------------------
(function($,sr){
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  }
  // smartresize
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');


//-----------------------
// Custom functions
//-----------------------

var aZoom = $('.a-zoom');
var dZoom = $('.d-zoom');
var $body = $("body");
var browserZoom;

function getZoomValues () {
  var zoom = detectZoom.zoom();
  var device = detectZoom.device();
  var newZoomVal = parseFloat(zoom,10).toFixed(2);
  var newDeviceVal = parseFloat(device,10).toFixed(2);
  aZoom.text(newZoomVal);
  dZoom.text(newDeviceVal);

  browserZoom = parseFloat(newZoomVal);

  console.log("newZoomVal " + newZoomVal);
  console.log("newDeviceVal " + newDeviceVal);

}


console.log("window screen");
console.log(window.screen.width);

var browserWidth = $(window).width();
var browserHeight = $(window).height();
var screenWidth = window.screen.width;
var screenHeight = window.screen.height;
var perfectWidth = 0.85 * screenWidth;
var perfectHeight = 0.7 * screenHeight;

console.log("masuk js utama");
console.log("screenWidth awal " + screenWidth);
console.log("screenHeight awal " + screenHeight);
console.log("browserWidth awal " + browserWidth);
console.log("browserHeight awal " + browserHeight);
console.log("perfectWidth awal " + perfectWidth);
console.log("perfectHeight awal " + perfectHeight);

if ((browserZoom > 1.1)){
  $(".browserZoomOut").css('display', 'block');
  $(".browserZoomIn").css('display', 'none');
  $(".browser-resize").css('display', 'none');
  $(".mobile-content").css('display', 'none');
  $(".desktop-content").css('display', 'none');
  console.log("masuk 1");
} else if ((browserZoom < 0.8)){
  $(".browserZoomIn").css('display', 'block');
  $(".browserZoomOut").css('display', 'none');
  $(".browser-resize").css('display', 'none');
  $(".mobile-content").css('display', 'none');
  $(".desktop-content").css('display', 'none');
  console.log("masuk 2");
} else if ((browserWidth < perfectWidth) || (browserHeight < perfectHeight)) {
  $(".browser-resize").css('display', 'block');
  $(".browserZoomOut").css('display', 'none');
  $(".browserZoomIn").css('display', 'none');
  $(".mobile-content").css('display', 'none');
  $(".desktop-content").css('display', 'none');
  console.log("masuk 3");
} else {
  $(".desktop-content").css('display', 'block');
  console.log("CONTENT MUNCUL");
  $(".browser-resize").css('display', 'none');
  $(".browserZoomOut").css('display', 'none');
  $(".browserZoomIn").css('display', 'none');
  $(".mobile-content").css('display', 'none');
}




$(window).resize(function() {
  getZoomValues();

  browserWidth = $(window).width();
  browserHeight = $(window).height();

  console.log('window was resized');

  console.log("screenWidth " + screenWidth);
  console.log("screenHeight " + screenHeight);
  console.log("browserWidth " + browserWidth);
  console.log("browserHeight " + browserHeight);
  console.log("perfectWidth " + perfectWidth);
  console.log("perfectHeight " + perfectHeight);

  console.log("browserZoom " + browserZoom);

  if ((browserZoom > 1.1)){
    $(".browserZoomOut").css('display', 'block');
    $(".browserZoomIn").css('display', 'none');
    $(".browser-resize").css('display', 'none');
    $(".mobile-content").css('display', 'none');
    $(".desktop-content").css('display', 'none');
    console.log("masuk 1");
  } else if ((browserZoom < 0.8)){
    $(".browserZoomIn").css('display', 'block');
    $(".browserZoomOut").css('display', 'none');
    $(".browser-resize").css('display', 'none');
    $(".mobile-content").css('display', 'none');
    $(".desktop-content").css('display', 'none');
    console.log("masuk 2");
  } else if ((browserWidth < perfectWidth) || (browserHeight < perfectHeight)) {
    $(".browser-resize").css('display', 'block');
    $(".browserZoomOut").css('display', 'none');
    $(".browserZoomIn").css('display', 'none');
    $(".mobile-content").css('display', 'none');
    $(".desktop-content").css('display', 'none');
    console.log("masuk 3");
  } else {
    $(".desktop-content").css('display', 'block');
    console.log("CONTENT MUNCUL");
    $(".browser-resize").css('display', 'none');
    $(".browserZoomOut").css('display', 'none');
    $(".browserZoomIn").css('display', 'none');
    $(".mobile-content").css('display', 'none');
  }


});



$(document).ready(function() {



  // getZoomValues();
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
  $("#btn-welcome").click(function() {
    localStorage.setItem('welcomeState', 'shown');
  });


  $("#toggleLang").on('change', function() {
    var tog = $("#toggleLang").prop('checked');
    toggleLanguange(tog);
  });

  // Angpao-Faq Modal, when the user clicks on the button, open the modal
  // $("#angpao").click(function() {
  //   $("#angpaoModal").css("display", "block");
  // });

  $("#faq").click(function() {
    $("#faqModal").css("display", "block");
  });

  // Exit button, go to homepage
  $(".home-button").click(function() {
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
