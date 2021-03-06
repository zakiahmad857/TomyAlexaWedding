// // LANGUAGE
var arrLang = {

  'ind': {
    // welcoming modal
    'welcome': 'Selamat Datang',
    'language': 'Pilih Bahasa',
    // welcoming modal - early bird
    'earlyBird_1': 'Pertemuan Dengan Mempelai',
    'earlyBird_2': 'Kamu akan bertemu dengan mempelai dalam waktu:',
    'earlyBird_3': 'Jika hitungan mundur sudah habis kamu akan mendapatkan informasi untuk bertemu dengan mempelai dan keluarga.',
    'earlyBird_4': 'Mohon persiapkan penampilan terbaik anda sebelum waktu video call dimulai',
    'earlyBird_5': 'Selagi menunggu, mari kami tunjukkan apa saja yang ada di sekitar Resepsi Tomy & Lexa',
    // welcoming modal - jam Karet
    'sorry_1': 'Pesan dari tomy & lexa',
    'sorry_2': 'Kamu tidak bisa bertemu mempelai karena melewat waktu yang ditentukan. Play video di bawah ini untuk melihat pesan dari Tomy dan Lexa',
    // video call pop-up
    'vcall_0': 'Mari Bersiap!',
    'vcall_1': 'Sebentar lagi kamu akan bertemu dengan mempelai.',
    'vcall_2': 'Sambil menunggu mempelai datang, host video call akan memandu tata cara video call. ',
    // Pelaminan
    'in-pelaminan': "Di pelaminan:",
    // button
    'next': 'Lanjut',
    'next-karet': 'Lihat Resepsi',
    // Countdown
    'countdown': 'Bertemu mempelai dalam',
    // faq
    'que1': 'Jika saya telat masuk video call apakah bisa bertemu dengan mempelai lagi?',
    'ans1': 'Mohon maaf karena waktu yang terbatas tidak bisa untuk video call ulang',
    'que2': 'Apakah bisa mengubah jam video call?',
    'ans2': 'Karena keterbatasan waktu, jam untuk bertemu mempelai sudah ditentukan',
    'que3': 'Jika saya tidak sempat foto bersama mempelai apakah bisa foto lagi?',
    'ans3': 'Sayangnya tidak bisa, karena hanya bisa foto di dalam pelaminan',
    'que4': 'Siapa saja yang ada di balik pembuatan kondangan virtual Tomy & Lexa?',
    'footerfaq': 'Pertanyaan menyangkut teknis?',
    // angpao
    'amplopTitle': 'Amplop Digital',
    'amplopText1': 'Jangan kuatir, kamu tetap bisa memberikan amplop digital untuk Tomy & Lexa dengan cara di bawah ini:',
    'amplopHp': 'Nomor Telfon 081316660643',
    'amplopRek': 'Nomor Rekening',
    'amplopText2': 'Kamu juga bisa mengirimkan kado pernikahan ke alamat di bawah ini:',
    // souvenir
    'souvenir1': 'Cinderamata digital ini dibuat sendiri oleh Alexa & Tomy spesial untuk kamu.',
    'souvenir2': 'Yang merupakan sebuah album musik yang telah dikerjakan oleh Alexa & Tomy sejak tahun 2019. Mereka menggunakan nama Antadoux untuk projek musik ini.',
    'souvenir3': 'Selamat mendengarkan',
    'download': 'Download Cinderamata',
    // entertainment
    'backHiburan': 'Kembali ke Hiburan',
    'musicVideo': 'This is the first music video from Antadoux, taken from their first single “Emotion in Motion”.',
    'musicStream': 'RAYKA & OFRI dari OFFSET.TV akan menemanimu selama resepsi dengan suguhan nada-nada pilihan',
    'lokasi': 'Lokasi: Bandung, Jawa Barat',
    // Gallery - akad
    'backGallery': 'Kembali ke Galeri',
    'akad_1': 'berlangsung 5 September 2020',
    'akad_2': 'jam 15:00-17:00,',
    'akad_3': 'di Pendopo Kemang, Jakarta Selatan.',
    'akad_4': 'Alexa dan Tomy mengenakan pakaian adat Lampung, Sumatera dari keluarga nenek dari Bundanya Alexa',
    // Gallery - lamaran
    'lamaran_1': 'Merupakan salah satu rangkaian acara dalam sebuah pernikahan. Dalam acara ini Tomy dan keluarga datang ke rumah Alexa',
    'lamaran_2': 'untuk bertemu keluarga Alexa dan melamarnya, dengan membawa seserahan. Acara ini berlangsung satu hari sebelum pernikahan.',
    // vcall
    'kamera': 'Kamera',
    'mic': 'Mikrofon',
    'vcall': 'Silakan pilih dan pastikan kamera dan mikrofon yang akan digunakan menyala',
    'mulaiVcall': 'Mulai Video Call',
    'endCall': 'Foto akan dikirim ke Whatsapp yang telah terdaftar setelah acara selesai.',
    'endCallButton': 'Kembali ke Resepsi',
    // LOGIN
    'login': 'Masukkan ID tamu yang didapatkan dari chat Whatsapp',
    'idSalah': 'ID tamu salah. Coba periksa kembali dan pastikan ID tidak ada spasi dan akurat',
    'login-btn': 'Masuk',
    'lupaId': 'Klik di sini jika lupa ID tamu',
    'popLupa': 'Lupa ID Tamu',
    'popLupa2': 'Mohon hubungi Customer Service',
    'popLupa3': 'melalui Whatsapp +62 811-1605-090',
    // prewed
    'prewed1': 'Sebuah visualisasi dari perjalanan dua entitas.',
    'prewed2': 'Bagaimana mereka bertemu, berpisah, hingga akhirnya dipertemukan kembali, untuk menjalani bahtera rumah tangga',
    'prewed3': 'Fotografer dan pengarah gaya',
    'prewed4': 'oleh Eandaru Kusumaatmadja',
    'prewed5': 'Kostum dan stylist',
    'prewed6': 'oleh Timami Yestha',
    'prewed7': 'Tata rias',
    'prewed8': 'oleh Raydinda Karina',
    'prewed9': 'Studio Foto',
    'prewed10': 'FH Studio, Lebak Bulus',
  }
};

// Disable Zoom
$(document).keydown(function(event) {
if (event.ctrlKey==true && (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109'  || event.which == '187'  || event.which == '189'  ) ) {
        event.preventDefault();
     }
    // 107 Num Key  +
    // 109 Num Key  -
    // 173 Min Key  hyphen/underscor Hey
    // 61 Plus key  +/= key
});

$(window).bind('mousewheel DOMMouseScroll', function (event) {
       if (event.ctrlKey == true) {
       event.preventDefault();
       }
});

/* Detect-zoom
 * -----------
 * Cross Browser Zoom and Pixel Ratio Detector
 * Version 1.0.4 | Apr 1 2013
 * dual-licensed under the WTFPL and MIT license
 * Maintained by https://github/tombigel
 * Original developer https://github.com/yonran
 */

//AMD and CommonJS initialization copied from https://github.com/zohararad/audio5js
(function(root, ns, factory) {
  "use strict";

  if (typeof(module) !== 'undefined' && module.exports) { // CommonJS
    module.exports = factory(ns, root);
  } else if (typeof(define) === 'function' && define.amd) { // AMD
    define("detect-zoom", function() {
      return factory(ns, root);
    });
  } else {
    root[ns] = factory(ns, root);
  }

}(window, 'detectZoom', function() {

  /**
   * Use devicePixelRatio if supported by the browser
   * @return {Number}
   * @private
   */
  var devicePixelRatio = function() {
    return window.devicePixelRatio || 1;
  };

  /**
   * Fallback function to set default values
   * @return {Object}
   * @private
   */
  var fallback = function() {
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
  var ie8 = function() {
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
  var ie10 = function() {
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
  var chrome = function() {
    var zoom = Math.round(((window.outerWidth) / window.innerWidth) * 100) / 100;
    return {
      zoom: zoom,
      devicePxPerCssPx: zoom * devicePixelRatio()
    };
  }

  /**
   * For safari (same as chrome)
   *
   */
  var safari = function() {
    var zoom = Math.round(((document.documentElement.clientWidth) / window.innerWidth) * 100) / 100;
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
  var webkitMobile = function() {
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
  var webkit = function() {
    var important = function(str) {
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

    return {
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
  var firefox4 = function() {
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
  var firefox18 = function() {
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
  var opera11 = function() {
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
  var mediaQueryBinarySearch = function(property, unit, a, b, maxIter, epsilon) {
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

      matchMedia = function(query) {
        style.sheet.insertRule('@media ' + query + '{.mediaQueryBinarySearch ' + '{text-decoration: underline} }', 0);
        var matched = getComputedStyle(div, null).textDecoration == 'underline';
        style.sheet.deleteRule(0);
        return {
          matches: matched
        };
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
  var detectFunction = (function() {
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
    else if (!!window.chrome && !(!!window.opera || navigator.userAgent.indexOf(' Opera') >= 0)) {
      func = chrome;
    }
    //safari
    else if (Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0) {
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
    zoom: function() {
      return detectFunction().zoom;
    },

    /**
     * Ratios.devicePxPerCssPx shorthand
     * @return {Number} devicePxPerCssPx level
     */
    device: function() {
      return detectFunction().devicePxPerCssPx;
    }
  });
}));

//-----------------------
// debouncing plugin by Paul Irish https://www.paulirish.com/2009/throttled-smartresize-jquery-event-handler/
//-----------------------
(function($, sr) {
  var debounce = function(func, threshold, execAsap) {
    var timeout;

    return function debounced() {
      var obj = this,
        args = arguments;

      function delayed() {
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
  jQuery.fn[sr] = function(fn) {
    return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr);
  };

})(jQuery, 'smartresize');


//-----------------------
// Custom functions
//-----------------------

var aZoom = $('.a-zoom');
var dZoom = $('.d-zoom');
var $body = $("body");
var browserZoom;

function getZoomValues() {
  var zoom = detectZoom.zoom();
  var device = detectZoom.device();
  var newZoomVal = parseFloat(zoom, 10).toFixed(2);
  var newDeviceVal = parseFloat(device, 10).toFixed(2);
  aZoom.text(newZoomVal);
  dZoom.text(newDeviceVal);

  browserZoom = parseFloat(newZoomVal);

  console.log("newZoomVal " + newZoomVal);
  console.log("newDeviceVal " + newDeviceVal);

}

// Detect Mobile Device
var isMobile = false; //initiate as false
// device detection
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
  /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
  isMobile = true;
}

console.log("isMobile " + isMobile);

if (isMobile) {
  $(".desktop-content").css("display", "none");
  $(".mobile-content").css("display", "block");
}


$(document).ready(function() {

  /// Inject YouTube API script
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var player;

  function onYouTubePlayerAPIReady() {
    // create the global player from the specific iframe (#video)
    player = new YT.Player('videoMC', {
      events: {
        // call this function when player is ready to use
        'onReady': onPlayerReady
      }
    });
  }

  function onPlayerReady(event) {
    event.target.mute();
  }

  function toggleSound() {
    // if (player.isMuted()) {
    //   player.unMute();
    // } else {
    //   player.mute();
    // }
  }

  // Off MC

  $(".on").click(function() {
    $("#videoMC").css("display", "none");
    $(".screen-wrapper").css("display", "block");
    $(".on").css("display", "none");
    $(".off").css("display", "block")
    toggleSound();
    $("#videoMC").remove()
  });

  $(".off").click(function() {
    //$("#videoMC").css("display", "block");
    $(".screen-wrapper").css("display", "none");
    $(".on").css("display", "block");
    $(".off").css("display", "none")
    toggleSound();
    $("<iframe/>",{
      id:"videoMC",
      src:"https://www.youtube.com/embed/hxuBd7VOGvY?enablejsapi=1&autoplay=1",
      frameborder:"0",
      allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    }).appendTo(".video-wrapper")
  });

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
    $("#btn-welcome").css("display", "block");
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

  $("#faq").click(function() {
    $("#faqModal").css("display", "block");
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

    buttonNamingInd();
  }

  if (check.id === "checkbox-eng" && check.checked) {
    var lang = "eng";
    $("#toggleLang").prop('checked', true);
    $(".lang").each(function(index, element) {
      $(this).text(arrLang[lang][$(this).attr('key')]);
    });

    buttonNamingEng();
  }
}

function toggleLanguange(tog) {
  if (tog) {
    var lang = "eng";
    $(".lang").each(function(index, element) {
      $(this).text(arrLang[lang][$(this).attr('key')]);
    });
    $(".ball").delay(100).queue(function(next) {
      $(this).css("background-image", "url(images/uk.png)");
      $(".flag-left").addClass("flag-left-off");
      $(".flag-right").removeClass("flag-right-off");
      $(".loginIndo").css("display", "none");
      $(".loginEnglish").css("display", "block");
      next();
    });


  } else {
    var lang = "ind";
    $(".lang").each(function(index, element) {
      $(this).text(arrLang[lang][$(this).attr('key')]);
    });

    $(".ball").delay(100).queue(function(next) {
      $(this).css("background-image", "url(images/indo.png)");
      $(".flag-right").addClass("flag-right-off");
      $(".flag-left").removeClass("flag-left-off");
      $(".loginIndo").css("display", "block");
      $(".loginEnglish").css("display", "none");
      next();
    });

  }
}
