/* global api_key */
(function ($) {
  "use strict";

  jQuery(document).ready(function () {
    'use strict';





    // =======================================================================================
    // Main Menu + Search
    // =======================================================================================

    var getNav = $("nav.main-menu.navbar");

    var navSticky = getNav.hasClass("navbar-sticky");

    if (navSticky) {

      getNav.wrap("<div class='wrap-sticky'></div>");
    }

    if (navSticky) {

      // Set Height Navigation
      var getHeight = getNav.height();
      $(".wrap-sticky").height(getHeight);

      // Windown on scroll
      var getOffset = $(".wrap-sticky").offset().top;
      $(window).on("scroll", function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > getOffset) {
          getNav.addClass("sticked");
        } else {
          getNav.removeClass("sticked");
        }
      });
    }


    var i = 25;


    function o(n) {
      var e = "#main-menu-mobile #main-menu-mobile-" + n,
        i = "#main-menu-mobile .title-" + n;
      $("#main-menu-mobile #main-menu-mobile-main").hide(), $(e).show(),
        $("#main-menu-mobile .btn-close").hide(),
        $("#main-menu-mobile .country-selection-group").hide(),
        $("#main-menu-mobile .btn-back").show(), $(i).show()
    }
    var timer;
    var delay = 1000;
    $(".main-menu .dropdown").hover(function () {
      var $this = $(this);
      timer = setTimeout(function () {
        $(".main-menu .navbar-toggle").is(":visible") || $this.toggleClass("open", !0)
      }, 100);
    }, function () {
      clearTimeout(timer);
      $(".main-menu .navbar-toggle").is(":visible") || $(this).toggleClass("open", !1)
    }), $(".main-menu .dropdown a").click(function () {
      $(".main-menu .navbar-toggle").is(":visible") || "#" == $(this).attr("href") ||
      ($(this).toggleClass("open", !1), window.location = $(this).attr("href"))
    }), $(".main-menu").on("click", ".burger-menu-icon", function () {
      $(".burger-menu-icon");
      $(".navbar-mobile").show(), $(".navbar-mobile-submenu").hide(),
        $("#main-menu-mobile-main").show(), $("#main-menu-mobile .btn-back").hide(),
        $("#main-menu-mobile .btn-close").show(), $("#main-menu-mobile .country-selection-group").show(),
        $("body").addClass("noscroll")
    }), $(document).on("mouseup touchstart", function (n) {
      var e = $("#main-menu-mobile");
      e.is(n.target) || 0 !== e.has(n.target).length || (e.hide(), $("body").removeClass("noscroll"),
        $(".navbar-mobile-submenu").hide(), $("#main-menu-mobile-main").show(), $("#main-menu-mobile .btn-back").hide(),
        $("#main-menu-mobile .btn-close").show(), $("#main-menu-mobile .country-selection-group").show(),
        $("#main-menu-mobile .title-text").hide())
    }), $("#main-menu-mobile .btn-menu-icon.btn-close").click(function () {
      $(".navbar-mobile").hide(), $("body").removeClass("noscroll")
    }), $("#main-menu-mobile .btn-menu-icon.btn-back").click(function () {
      $(".navbar-mobile-submenu").hide(), $("#main-menu-mobile-main").show(),
        $("#main-menu-mobile .btn-back").hide(), $("#main-menu-mobile .btn-close").show(),
        $("#main-menu-mobile .country-selection-group").show(),
        $("#main-menu-mobile .title-text").hide()
    }), $("#main-menu-mobile #menu-link-what-is-vpn").click(function (n) {
      return n.preventDefault(), o("what-is-vpn"), !1
    }), $("#main-menu-mobile #menu-link-features").click(function (n) {
      return n.preventDefault(), o("features"), !1
    }), $("#main-menu-mobile #menu-link-servers").click(function (n) {
      return n.preventDefault(), o("servers"), !1
    }), $("#main-menu-mobile #menu-link-apps").click(function (n) {
      return n.preventDefault(), o("apps"), !1

    }), $("#main-menu-mobile #menu-link-item-1").click(function (n) {
      return n.preventDefault(), o("item-1"), !1

    }), $("#main-menu-mobile #menu-link-item-2").click(function (n) {
      return n.preventDefault(), o("item-2"), !1

    }), $("#main-menu-mobile #menu-link-item-3").click(function (n) {
      return n.preventDefault(), o("item-3"), !1

    }), $("#main-menu-mobile #menu-link-item-4").click(function (n) {
      return n.preventDefault(), o("item-4"), !1
    }), $("#main-menu-mobile #menu-link-item-5").click(function (n) {
      return n.preventDefault(), o("item-5"), !1

    }), $("#main-menu-mobile #menu-link-item-6").click(function (n) {
      return n.preventDefault(), o("item-6"), !1

    }), $("#main-menu-mobile #menu-link-item-7").click(function (n) {
      return n.preventDefault(), o("item-7"), !1

    }), $("#main-menu-mobile #menu-link-item-8").click(function (n) {
      return n.preventDefault(), o("item-8"), !1

    }), $("#main-menu-mobile #menu-link-item-9").click(function (n) {
      return n.preventDefault(), o("item-9"), !1

    }), $("#main-menu-mobile #menu-link-item-10").click(function (n) {
      return n.preventDefault(), o("item-10"), !1


    }), $("#menu-link-country-sel").click(function (n) {
      return n.preventDefault(), o("countries"), !1
    })


    $(".search-icon, .mobile-search-icon").on("click", function (n) {
      n.preventDefault();

      $("#search-container").slideToggle("fast");

    });


    $(".search-btn").click(function () {
      return $("#search").val() == "" ? !1 : !0
    });
    $("div, html").on("click", function (n) {
      setTimeout(function () {
        if (($(window).width() < 1261 || $(".navbar-toggle").is(":visible")) && n.target.className != "menu-item dropdown-toggle" && n.target.className != "navbar-toggle" && n.target.className != "caret") {
          var t = $(".navbar-toggle").hasClass("collapsed");
          t == !1 && $(".menu-list").css("display", "none")
        }
      }, 100)
    });


    $(".tabbed-content").each(function () {
      $(this).append('<ul class="content"></ul>')
    }), $(".tabs li").each(function () {
      var a = $(this),
        b = "";
      a.is(".tabs>li:first-child") && (b = ' class="active"');
      var c = a.find(".tab-content").detach().wrap("<li" + b + "></li>").parent();
      a.closest(".tabbed-content").find(".content").append(c)
    }), $(".tabs li").click(function () {
      $(this).closest(".tabs").find("li").removeClass("active"), $(this).addClass("active");
      var a = $(this).index() + 1;
      $(this).closest(".tabbed-content").find(".content>li").removeClass("active"),
        $(this).closest(".tabbed-content").find(".content>li:nth-of-type(" + a + ")").addClass("active")
    });


    $(".accordion.accordion-1 li,.accordion.accordion-2 li ").click(function () {
      $(this).closest(".accordion.accordion-1, .accordion.accordion-1 ").hasClass("one-open") ? ($(this).closest(".accordion").find("li").removeClass("active"), $(this).addClass("active")) :
        $(this).toggleClass("active"), "undefined" != typeof window.mr_parallax && setTimeout(mr_parallax.windowLoad, 500)
    });


    $.js = function (el) {
      return $('[data-js=' + el + ']')
    };



    // =======================================================================================
    // niceScroll
    // =======================================================================================


    $.js('custom-scroll').find("#t-1,#t-2").mCustomScrollbar({
      theme: "dark-thin",

      scrollButtons: {
        enable: true,
        scrollType: "stepped"
      }

    });

    $('#recent-widget-block').mCustomScrollbar({
      theme:"dark",
      scrollButtons: {
        enable: true,
        scrollType: "stepped"
      }
    });

    $("#lightgallery").lightGallery();
    $('#html5-videos').lightGallery();
    $('#video-gallery').lightGallery({
      youtubePlayerParams: {
        modestbranding: 1,
        showinfo: 0,
        rel: 0,
        controls: 0,
        autoplay: 1
      },
      autoplayFirstVideo: true,
      videoMaxWidth : '1300px',
      download: false,
      share: false,
      pager:false,
      zoom:false,
      hash:false,
      rotate:false,
    });
    $('#video-play').lightGallery({
      youtubePlayerParams: {
        modestbranding: 1,
        showinfo: 0,
        rel: 0,
        controls: 0,
        autoplay: 1
      },
      autoplayFirstVideo: true,
      videoMaxWidth : '1300px',
      download: false,
      share: false,
      pager:false,
      zoom:false,
      hash:false,
      rotate:false,
    });


    $(".close-btn").click(function () {

      $(this).parent().fadeOut("slow", function () {
        console.log('is gone ')
      });
    });

    //
    // var $vmap = $('#vmap-africa'),
    //
    //   vmapBgColor = 'none',
    //   vmapHoverColor = '#CEC19B',
    //   vmapSelectedColor = '#bea56a',
    //   vmapColor = '#d0d2d3',
    //
    //   selectedStates = [],
    //   regions = {
    //     amu: {
    //       status: false,
    //       states: [{
    //         code: 'DZ',
    //         name: 'Algeria'
    //       },
    //         {
    //           code: 'LY',
    //           name: 'Libya'
    //         },
    //         {
    //           code: 'MR',
    //           name: 'Mauritania'
    //         },
    //         {
    //           code: 'MA',
    //           name: 'Morocco'
    //         },
    //         {
    //           code: 'TN',
    //           name: 'Tunisia'
    //         },
    //       ]
    //
    //     },
    //     ecowas: {
    //       status: false,
    //       states: [{
    //         code: 'BJ',
    //         name: 'Benin'
    //       },
    //         {
    //           code: 'BF',
    //           name: 'Burkina Faso'
    //         },
    //         {
    //           code: 'SL',
    //           name: 'Sierra Leone'
    //         },
    //         {
    //           code: 'WA',
    //           name: 'Cape Verde'
    //         },
    //         {
    //           code: 'CI',
    //           name: 'CÃ´te dIvoire'
    //         },
    //         {
    //           code: 'GM',
    //           name: 'Gambia'
    //         },
    //         {
    //           code: 'GH',
    //           name: 'Ghana'
    //         },
    //         {
    //           code: 'GN',
    //           name: 'Guinea'
    //         },
    //         {
    //           code: 'GW',
    //           name: 'Guinea-Bissau'
    //         },
    //         {
    //           code: 'LR',
    //           name: 'Liberia'
    //         },
    //         {
    //           code: 'ML',
    //           name: 'Mali'
    //         },
    //         {
    //           code: 'NE',
    //           name: 'Niger'
    //         },
    //         {
    //           code: 'NG',
    //           name: 'Nigeria'
    //         },
    //         {
    //           code: 'SN',
    //           name: 'Senegal'
    //         },
    //         {
    //           code: 'TG',
    //           name: 'Togo'
    //         },
    //
    //       ]
    //
    //     }
    //   };
    //
    // function toggleRegion(event) {
    //   var action,
    //     region = event.data;
    //   region.status = !region.status;
    //   action = region.status ? 'select' : 'deselect';
    //
    //   region.states.forEach(function (state) {
    //     if (action === 'select' || stateSelected(state.name)) {
    //       $vmap.vectorMap(action, state.code);
    //     }
    //   });
    //
    //   addOrRemoveStates(region.states, action);
    //   console.log(selectedStates)
    // }
    //
    // function stateSelected(stateName) {
    //   return selectedStates.findIndex(x => x.name === stateName) >= 0;
    //
    // }
    //
    // function toggleState(state, code) {
    //   console.log(selectedStates);
    //   selectedStates = [];
    //   $("#country").val(code.toUpperCase()).trigger("chosen:updated.chosen");
    //   if (stateSelected(state)) {
    //     disableState(state);
    //     console.log('exist deja')
    //   } else {
    //     enableState(state);
    //     selectedStates.push({
    //       code: code.toUpperCase(),
    //       name: state
    //     });
    //     console.log('ajouter' + code + ' ' + state);
    //   }
    //   selectedStates.splice(0, 1);
    //   console.log(selectedStates)
    // }
    //
    // function disableState(stateName) {
    //   if (stateSelected(stateName)) {
    //     var index = selectedStates.findIndex(x => x.name === stateName);
    //     selectedStates.splice(index, 1);
    //   }
    // }
    //
    // function enableState(stateName, stateCode) {
    //   var index = selectedStates.indexOf(stateName);
    //   if (index < 0) {
    //     selectedStates.push({
    //       code: stateCode,
    //       name: stateName
    //     });
    //
    //   }
    // }
    // /*
    //     function disableState(stateName) {
    //     if (stateSelected(stateName)) {
    //       var index = selectedStates.indexOf(stateName);
    //       selectedStates.splice(index, 1);
    //     }
    //   }
    //
    //   function enableState(stateName) {
    //     var index = selectedStates.indexOf(stateName);
    //     if (index < 0) {
    //       selectedStates.push(stateName);
    //     }
    //   }
    // */
    //
    // function addOrRemoveStates(states, action) {
    //   if (action === 'select') {
    //     addStates(states);
    //   } else {
    //     removeStates(states);
    //   }
    // }
    //
    // function addStates(states) {
    //   states.forEach(function (state) {
    //     enableState(state.name, state.code);
    //   });
    // }
    //
    // function removeStates(states) {
    //   states.forEach(function (state) {
    //     if (stateSelected(state.name)) {
    //       var index = selectedStates.findIndex(x => x.name === state.name);
    //       selectedStates.splice(index, 1);
    //     }
    //   });
    // }
    //
    // function countryChange() {
    //
    //   console.log('ca vien chez moi');
    //   selectedStates.forEach(function (state) {
    //     console.log(state);
    //     $vmap.vectorMap('deselect', state.code);
    //
    //
    //   });
    //   removeStates(selectedStates);
    //   console.log(selectedStates);
    //   $vmap.vectorMap('select', $(this).val());
    //   selectedStates.push({
    //     code: $(this).val(),
    //     name: $('#country').find(":selected").text()
    //   });
    //   console.log(selectedStates);
    //
    //
    // }
    //
    // if ($vmap.length > 0) {
    //   $vmap.vectorMap({
    //     map: 'africa_en',
    //     multiSelectRegion: false,
    //     backgroundColor: vmapBgColor,
    //     borderColor: vmapBgColor,
    //     hoverColor: vmapHoverColor,
    //     enableZoom: true,
    //     showTooltip: true,
    //     normalizeFunction: 'polynomial',
    //     selectedColor: vmapSelectedColor,
    //     color: vmapColor,
    //     onLoad: function () {
    //
    //       $(document).on('click', '.region_amu', regions.amu, toggleRegion);
    //       $(document).on('click', '.region_ecowas', regions.ecowas, toggleRegion);
    //       $('#country').change(countryChange);
    //     },
    //     onRegionClick: function (event, code, stateName) {
    //       toggleState(stateName, code);
    //     }
    //   });
    // }


    /*function loaddocinmodal(title, file) {

        jQuery('#myModalLabel').html('Document : '+title);
        jQuery('#file_body').html('<div style="height: 1000px; overflow: hidden;"><iframe src="" style="width:100%;height:100%" frameborder="0" id="preview-frame"></iframe></div>');
        jQuery('#preview-frame').attr('src', 'https://docs.google.com/viewerng/viewer?url='+file+'&embedded=true&widget=true&headers=true&rm=full');
        jQuery('#dwld-btn').attr('href', file);
        jQuery('#dwld-btn').attr('data-downloadurl', file);

      }*/


    $(".doc-preview").click(function () {
      var para1 = this.dataset['title'];
      var para2 = this.dataset['file'];
      loaddocinmodal(para1, para2);
    });

    function loaddocinmodal(title, file) {
      var h = jQuery(window).height() - 150;

      var extension = file.substr((file.lastIndexOf('.') + 1));

      console.log(extension);
      console.log(file);

      $("#file_body").css({
        'height': h
      });

      jQuery('#myModalLabel').html('Document : ' + title);
      if (extension == 'pdf') {
        PDFObject.embed(file, "#file_body");
      } else {
        jQuery('#file_body').html('<iframe src="https://view.officeapps.live.com/op/embed.aspx?src=' + file +
          '"width="100%" height="100%" style="border: none;"></iframe>');
      }


      jQuery('#dwld-btn').attr('href', file);
      jQuery('#dwld-btn').attr('data-downloadurl', file);

    }


      $("#pdf-viewer-container").css({
        'height': jQuery(window).height() - 100
      });

    //
    // $(".more-link").click(function (e) {
    //   $(this).closest(".document-list-item").toggleClass("show-more");
    //   e.preventDefault();
    // });

    (function ($) {
      $(document).ready(function() {
        $(".show-more-toggle").click(function(e){

          $(this).closest(".document-list-item").toggleClass("show-more");

          if ($(".document-list-item").hasClass("show-more")) {

            $(".show-more .show-more-toggle span").html("Show Less");
            $('.show-more .show-more-toggle i').removeClass('fal fa-angle-down fa-2x');
            $('.show-more .show-more-toggle i').removeClass('fal fa-angle-up fa-2x');
            $('.show-more .show-more-toggle i').addClass('fal fa-angle-up fa-2x');
          }
          else {
            $(".show-more-toggle span").html("Show More");
            $('.show-more-toggle i').removeClass('fal fa-angle-up fa-2x');
            $('.show-more-toggle i').addClass('fal fa-angle-down fa-2x');
          }
          e.preventDefault();
        });
      });
    })(jQuery);

    $(".event-agenda .tab_content").hide();
    $(".event-agenda .tab_content:first").show();


    $(".event-agenda ul.tabs li").click(function () {

      $(".event-agenda .tab_content").hide();
      var activeTab = $(this).attr("rel");
      $("#" + activeTab).fadeIn();

      $(".event-agenda ul.tabs li").removeClass("active");
      $(this).addClass("active");

      $(".event-agenda .tab_drawer_heading").removeClass("d_active");
      $(".event-agenda .tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");

    });

    $(".event-agenda .tab_drawer_heading").click(function () {

      $(".event-agenda .tab_content").hide();
      var d_activeTab = $(this).attr("rel");
      $("#" + d_activeTab).fadeIn();

      $(".event-agenda .tab_drawer_heading").removeClass("d_active");
      $(this).addClass(".event-agenda d_active");

      $(".event-agenda ul.tabs li").removeClass("active");
      $(".event-agenda ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
    });


    $('.event-agenda ul.tabs li').last().addClass("tab_last");


    // HIDE DIALOG BOX AT PAGE LOAD


    $('.twitter-widget').on('DOMSubtreeModified propertychange', "#twitter-widget-0", function () {
      // $(".twitter-timeline").contents().find(".timeline-Tweet-media").css("display", "none");
     $(".twitter-timeline").css("width", "100%");
      $(".twitter-timeline").contents().find(".timeline-Header").css("display", "none");
      $(".twitter-timeline").contents().find(".timeline-Footer").css("display", "none");
      $(".twitter-timeline").contents().find(".timeline-Body").css("border", "1px solid rgba(15,70,100,.12)");
      $(".twitter-timeline").contents().find(".timeline-Body").css("border-radius", "4px");


    });

    /*        $("#ODS-event-type").multiselect({
                    enableClickableOptGroups: true,
                    //includeSelectAllOption: true,
                    nonSelectedText: "Topics",
                    //selectAllText: "View all",
                    maxHeight: 400,
                    // button text test code
                    buttonText: function (options, select) {
                        if (
                            options.length === 0 ||
                            options.length === $("#ODS-event-type option").length)
                        {
                            return "Topics";
                        } else {
                            return "Topics (" + options.length + ")";
                        }
                    } });
*/

    // Reset all
    $("#clearer").on("click", function () {
      // remove selected options
      $(".ods-filter option").each(function (element) {
        $(this).removeAttr("selected").prop("selected", false);
      });

      //refresh multiselect
      $(".ods-filter").multiselect("refresh");
    });

    $('.ctf-header-video .plyr').wrapAll('<div class="col-md-8 col-sm-8 video-player"></div>');
    $('.ctf-header-video .chp__playlist').wrapAll('<div class="col-md-4 col-sm-4 pl-0 content"></div>');
    $(".video-playlist-inner .content").mCustomScrollbar({

      theme: "dark-thin",

      scrollButtons: {
        enable: true,
        scrollType: "stepped"
      },
      autoHideScrollbar: true,
    });


    $('.ctf-header-audio .plyr').wrapAll('<div class="col-md-8 audio-player"></div>');
    $('.ctf-header-audio .chp__playlist').wrapAll('<div class="col-md-4 pl-0 content"></div>');
    $(".audio-playlist-inner .content").mCustomScrollbar({

      theme: "dark-thin",

      scrollButtons: {
        enable: true,
        scrollType: "stepped"
      },
      autoHideScrollbar: true,
    });


    $(".photos-gallery-inner .content").mCustomScrollbar({

      theme: "dark-thin",

      scrollButtons: {
        enable: true,
        scrollType: "stepped"
      },
      autoHideScrollbar: true,


    });

    // $('.media-content .chp__playlist').wrapAll('<div class="media-list"> <div class="row"><div class="col-sm-12"><div class="panel_body media-list-caroussel"> </div></div></div></div>');
    $('.media-content .plyr').wrapAll('<div class="left-side col-md-8"></div>');
    $('.media-content .chp__playlist').wrapAll('<div class="media-list col-md-12"></div>');
    $('.media-content .chp__playlist').addClass('owl-carousel owl-theme  owl-loaded owl-drag');
    $('.media-content .chp__playlist').attr('id', 'media-list-caroussel');
    $('.media-content .right-side').insertAfter($(".media-content .col-md-8"));
    /*$('.media-player .chp__playlist').appendTo($(".media-list-caroussel"));*/
    $(".media-content .right-side").mCustomScrollbar({
      theme: "dark-thin",
      scrollButtons: {
        enable: true,
        scrollType: "stepped"
      },
      autoHideScrollbar: true,
    });


    $(".document-body").mCustomScrollbar({
      theme: "dark-thin",
      scrollButtons: {
        enable: true,

      }

    });


    $('.newItem').click(function () {
      alert($(this).attr('setid'));
    });


    var video_thumb = $(this).find('.cleanPlayer img').attr('src');
    $(".left-side .plyr--audio").css({
      'background': 'url(' + video_thumb + ')'
    });


    $(".ctf-header-audio .chp__playlist li").click(function () {

      var video_thumb = $(this).find('.video-thumb img').attr('src');
      $(".ctf-header-audio .plyr--audio").css({
        'background': 'url(' + video_thumb + ')'
      });
    });


    $(".chp__playlist li").click(function () {

      var video_thumb = $(this).find('figure img').attr('src');
      $(".left-side .plyr--audio").css({
        'background': 'url(' + video_thumb + ')'
      });
    });


    $('.tabs-wrapper .nav-tabs').responsiveTabs();

    //back to top
    $('body').append('<div id="toTop" class="btn back-top"><span class="fa fa-angle-up"></span></div>');
    $(window).on("scroll", function () {
      if ($(this).scrollTop() !== 0) {
        $('#toTop').fadeIn();
      } else {
        $('#toTop').fadeOut();
      }
    });
    $('#toTop').on("click", function () {
      $("html, body").animate({
        scrollTop: 0
      }, 600);
      return false;
    });
    //  page loader
    $(".se-pre-con").fadeOut("slow");

    $('#NewsTicker-rtl').owlCarousel({
      rtl: true,
      loop: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 5000, //Set AutoPlay to 5 seconds
      autoplayHoverPause: true,
      nav: true,
      navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
      items: 1
    });

    $("#NewsTicker").owlCarousel({

      loop: true,
      animateOut: 'slideOutDown',
      animateIn: 'flipInX',
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      nav: true,
      margin: 30,
      dots: false,
      mouseDrag: false,
      slideSpeed: 500,
      navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
      items: 1,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        }
      }

    });

    $('.main-content, .rightSidebar, .leftSidebar').theiaStickySidebar({
      additionalMarginTop: 30
    });

    $(".owl-slider").owlCarousel({
      loop: true,
      animateOut: 'slideOutUp',
      autoplay: true,
      autoHeight: true,
      lazyLoad: true,
      autoplayHoverPause: true,
      nav: true,
      margin: 0,
      dots: true,
      mouseDrag: true,
      touchDrag: true,
      autoplayTimeout:6000,
      navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
      items: 1,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        }
      }

    });

    $(".poster-with-blockquote-slider,.poster-without-blockquote-slider").owlCarousel({

      loop: true,
      animateOut: 'fadeOut',
      autoplay: false,
      autoplayHoverPause: true,
      nav: true,
      margin: 5,
      lazyLoad: true,
      autoHeight: true,
      dots: false,
      mouseDrag: true,
      touchDrag: true,
      slideSpeed: 500,
      navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
      items: 1,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        }
      }

    });

    $("#owl-slider-add-widget").owlCarousel({

      loop: false,
      animateOut: 'fadeOut',
      autoplay: false,
      autoplayHoverPause: true,
      nav: true,
      margin: 0,
      dots: true,
      mouseDrag: true,
      touchDrag: true,
      slideSpeed: 500,
      navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
      items: 1,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        }
      }

    });

    $(".owl-slider-team-header-rtl").owlCarousel({

      loop: true,
      rtl:true,
      animateOut: 'fadeOut',
      autoHeight: true,
      lazyLoad: true,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 8000,
      nav: true,
      margin: 0,
      dots: false,
      mouseDrag: true,
      touchDrag: true,
      slideSpeed: 1000,
      navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
      items: 1,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        }
      }

    });

    $(".owl-slider-team-header").owlCarousel({

      loop: true,
      animateOut: 'fadeOut',
      autoHeight: true,
      lazyLoad: true,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 8000,
      nav: true,
      margin: 0,
      dots: false,
      mouseDrag: true,
      touchDrag: true,
      slideSpeed: 1000,
      navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
      items: 1,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        }
      }

    });

    $(".testimonial-carousel-rtl").owlCarousel({

      loop: true,
      rtl:true,
      animateOut: 'fadeOut',
      center: false,
      autoHeight: true,
      lazyLoad: true,
      autoplay: true,
      autoplayHoverPause: true,
      nav: true,
      margin: 30,
      dots: false,
      mouseDrag: true,
      touchDrag: true,
      autoplayTimeout: 8500,
      smartSpeed: 450,
      navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
      items: 3,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        1170: {
          items: 3
        }
      }

    });

    $(".people-carousel").owlCarousel({

      loop: true,
      animateOut: 'fadeOut',
      center: false,
      autoHeight: true,

      autoplay: true,
      autoplayHoverPause: true,
      nav: true,
      dots: false,
      mouseDrag: true,
      touchDrag: true,
      autoplayTimeout: 8500,
      smartSpeed: 450,
      navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
      items: 4,
      responsive: {
        0: {
          items: 2
        },
        768: {
          items: 2
        },
        950: {
          items: 3
        },
        1170: {
          items: 4
        }
      }

    });

    $(".testimonial-carousel").owlCarousel({

      loop: true,
      animateOut: 'fadeOut',
      center: false,
      autoHeight: true,
      lazyLoad: true,
      autoplay: true,
      autoplayHoverPause: true,
      nav: true,
      margin: 30,
      dots: false,
      mouseDrag: true,
      touchDrag: true,
      autoplayTimeout: 8500,
      smartSpeed: 450,
      navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
      items: 3,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        1170: {
          items: 3
        }
      }

    });



    $("#media-list-caroussel").owlCarousel({

      loop: false,
      autoplay: false,
      autoplayHoverPause: true,
      autoplayTimeout: 8000,
      nav: true,
      margin: 10,
      dots: false,
      mouseDrag: true,
      lazyLoad: true,
      touchDrag: true,
      slideSpeed: 1000,
      navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
      items: 5,
      responsive: {
        0: {
          items: 2
        },
        479: {
          items: 3
        },
        768: {
          items: 3
        },
        980: {
          items: 5
        },
        1199: {
          items: 5
        }
      }
    });


    $(".leadership-carousel").owlCarousel({

      loop: false,
      animateIn: 'fadeInLeft',
      autoplay: false,
      autoplayHoverPause: true,
      nav: true,
      margin: 2,
      dots: false,
      lazyLoad: true,
      mouseDrag: false,
      slideSpeed: 500,
      navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
      items: 4,
      responsive: {
        0: {
          items: 2
        },
        479: {
          items: 2
        },
        768: {
          items: 3
        },
        980: {
          items: 3
        },
        1199: {
          items: 4
        }
      }

    });


    $('#owl-slider-rtl').owlCarousel({
      rtl: true,
      loop: true,
      autoplay: true,
      autoplayTimeout: 6000,
      autoplayHoverPause: true,
      nav: true,
      navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
      items: 1,
      responsive: {
        0: {
          items: 1
        },
        479: {
          items: 1
        },
        768: {
          items: 1
        },
        980: {
          items: 1
        },
        1199: {
          items: 1
        }
      }
    });

    $(".list-carousel-1").owlCarousel({

      loop: false,
      animateIn: 'fadeInLeft',
      autoplay: false,
      autoplayHoverPause: true,
      nav: true,
      margin: 15,
      dots: false,
      mouseDrag: false,
      slideSpeed: 500,
      navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
      items: 4,
      responsive: {
        0: {
          items: 2
        },
        479: {
          items: 2
        },
        768: {
          items: 2
        },
        980: {
          items: 2
        },
        1199: {
          items: 3
        }
      }

    });

    $(".list-carousel-logo").owlCarousel({

      loop: false,
      animateIn: 'fadeInLeft',
      autoplay: false,
      autoplayHoverPause: true,
      nav: true,
      margin: 15,
      lazyLoad: true,
      dots: false,
      mouseDrag: false,
      slideSpeed: 500,
      navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
      items: 5,
      responsive: {
        0: {
          items: 2
        },
        479: {
          items: 3
        },
        768: {
          items: 4
        },
        980: {
          items: 5
        },
        1199: {
          items: 5
        }
      }

    });

    $("#tabbed-carousel-1,#tabbed-carousel-2").owlCarousel({

      loop: false,
      animateIn: 'fadeIn',
      autoplay: false,
      autoplayHoverPause: true,
      nav: true,
      margin: 15,
      dots: false,
      lazyLoad: true,
      mouseDrag: true,
      slideSpeed: 500,
      navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
      items: 4,
      responsive: {
        0: {
          items: 1
        },
        479: {
          items: 1
        },
        768: {
          items: 2
        },
        980: {
          items: 3
        },
        1199: {
          items: 4
        }
      }

    });

    $('#featured-owl-rtl').owlCarousel({
      rtl: true,
      loop: true,
      dots: false,
      nav: false,
      items: 4,
      responsive: {
        0: {
          items: 1
        },
        479: {
          items: 1
        },
        768: {
          items: 2
        },
        980: {
          items: 3
        },
        1199: {
          items: 4
        }
      }
    });
    //Post carousel
    var owl = $("#post-slider");
    owl.owlCarousel({
      navigation: true,
      singleItem: true,
      lazyLoad: true,
      pagination: false,
      transitionStyle: "fade",
      navigationText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"]
    });
    //Post carousel
    var owl = $("#post-slider-2");
    owl.owlCarousel({
      navigation: true,
      singleItem: true,
      pagination: false,
      lazyLoad: true,
      transitionStyle: "fade",
      navigationText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"]
    });
    //Post carousel rtl
    $('.post-slider-rtl').owlCarousel({
      rtl: true,
      loop: true, //        lazyLoad: true,
      dots: false,
      lazyLoad: true,
      nav: true,
      navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
      items: 1,
      responsive: {
        0: {
          items: 1
        },
        479: {
          items: 1
        },
        768: {
          items: 1
        },
        980: {
          items: 1
        },
        1199: {
          items: 1
        }
      }
    });
    //Post carousel
    var owl = $("#post-slider-3");
    owl.owlCarousel({
      navigation: true,
      singleItem: true,
      lazyLoad: true,
      pagination: false,
      transitionStyle: "fade",
      navigationText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"]
    });


    $('.b-gallery-thumb').each(function () {

      var detail = $(this).children('.js-thumb-gallery-detail'),
        thumbs = $(this).children('.js-thumb-gallery-thumbs');
      thumbGallery(detail, thumbs);
    });

    function thumbGallery(nameDetail, nameThumbs) {
      /*
      Thumb Gallery
      */
      var thumbGalleryDetail = $(nameDetail),
        thumbGalleryThumbs = $(nameThumbs),
        flag = false,
        duration = 300;

      thumbGalleryDetail
        .owlCarousel({
          items: 1,
          margin: 10,
          nav: true,
          lazyLoad: true,
          dots: false,
          loop: false,
          navText: []
        })
        .on('changed.owl.carousel', function (e) {
          if (!flag) {
            flag = true;
            thumbGalleryThumbs.trigger('to.owl.carousel', [e.item.index - 1, duration, true]);
            flag = false;
            $('.current-no').empty().append(e.item.index + 1);
          }
        });

      $('.total-no').empty().append($('.b-gallery-thumb .owl-item:not(.cloned)').length);

      $('.gallery-carousel-control.left ').on('click', function () {
        thumbGalleryDetail.trigger('prev.owl.carousel')
      });
      $('.gallery-carousel-control.right').on('click', function () {
        thumbGalleryDetail.trigger('next.owl.carousel')
      });

      thumbGalleryThumbs
        .owlCarousel({
          margin: 10,
          items: 5,
          lazyLoad: true,
          nav: true,
          navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
          center: false,
          dots: false,

        })
        .on('click', '.owl-item', function (e) {
          e.preventDefault();
          thumbGalleryDetail.trigger('to.owl.carousel', [$(this).index(), duration, true]);
        })
        .on('changed.owl.carousel', function (e) {
          if (!flag) {
            flag = true;
            thumbGalleryDetail.trigger('to.owl.carousel', [e.item.index, duration, true]);
            flag = false;
          }
        });
    }


    //tab
    //calender
/*    $("#datepicker").datepicker();*/

    //panel tab
    $('.collapse.in').prev('.panel-heading').addClass('active');
    $('#accordion').on('show.bs.collapse', function (a) {
      $(a.target).prev('.panel-heading').addClass('active');
    }).on('hide.bs.collapse', function (a) {
      $(a.target).prev('.panel-heading').removeClass('active');
    });
    //progresber
    var el = document.getElementsByClassName('progressber'),
      l = el.length;
    for (var i = 0; i < l; i++) {
      var options = {
        percent: el[i].getAttribute('data-percent'),
        size: el[i].getAttribute('data-size') || 60,
        lineWidth: el[i].getAttribute('data-line') || 4
      };
      var canvas = document.createElement('canvas');
      var span = document.createElement('span');
      span.textContent = options.percent + '%';
      if (typeof (G_vmlCanvasManager) !== 'undefined') {
        G_vmlCanvasManager.initElement(canvas);
      }
      var ctx = canvas.getContext('2d');
      canvas.width = canvas.height = options.size;
      el[i].appendChild(span);
      el[i].appendChild(canvas);
      ctx.translate(options.size / 2, options.size / 2); // change center
      var radius = (options.size - options.lineWidth) / 2;
      var drawCircle = function (color, lineWidth, percent) {
        percent = Math.min(Math.max(0, percent || 1), 1);
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
        ctx.strokeStyle = color;
        ctx.lineCap = 'round';
        ctx.lineWidth = lineWidth;
        ctx.stroke();
      };
      drawCircle('transparent', options.lineWidth, 100 / 100);
      drawCircle('#eb0254', options.lineWidth, options.percent / 100);
    }


  });

  $('.fb-share').click(function(e) {
    e.preventDefault();
    window.open($(this).attr('href'), 'fbShareWindow', 'height=450, width=550, top=' + ($(window).height() / 2 - 275) + ', left=' + ($(window).width() / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
    return false;

  });

  $(".js-social-share").on("click", function(e) {
    e.preventDefault();

    windowPopup($(this).attr("href"), 500, 300);
  });

  function windowPopup(url, width, height) {
    // Calculate the position of the popup so
    // itâ€™s centered on the screen.
    let left = (screen.width / 2) - (width / 2),
      top = (screen.height / 2) - (height / 2);

    window.open(
      url,
      "",
      "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=" + width + ",height=" + height + ",top=" + top + ",left=" + left
    );
  }

  // Tooltip

  $('#share-link').tooltip({
    trigger: 'click',
    placement: 'bottom'
  });

  function setTooltip(message) {
    $('#share-link').tooltip('hide')
      .attr('data-original-title', message)
      .tooltip('show');
  }

  function hideTooltip() {
    setTimeout(function() {
      $('button').tooltip('hide');
    }, 1000);
  }

  var clipboard = new ClipboardJS('#share-link');

  clipboard.on('success', function(e) {
    setTooltip('Copied!');
    hideTooltip();
  });

  clipboard.on('error', function(e) {
    setTooltip('Failed!');
    hideTooltip();
  });
  Sharect.
  config
  ({
    selectableElements: ['.pg--editor', '.post_details_block'],
  }).
  init
  ();
  Drupal.behaviors.facets = {
    'attach': function (context, settings) {
      var $context = $(context);
      $("[data-drupal-selector=\"edit-field-topics-target-id\"]").multiselect({

        enableClickableOptGroups: true,
        buttonWidth: '100%',
        nonSelectedText: "Topics",
        maxHeight: 400,
        // button text test code
        buttonText: function (options, select) {
          if (
            options.length === 0 ||
            options.length === $("[data-drupal-selector=\"edit-field-topics-target-idlist-carousel-1\"] option").length) {
            return "Topics";
          } else {
            return "Topics (" + options.length + ")";
          }
        }
      });


      $("[data-drupal-selector=\"edit-field-category-target-id\"]").multiselect({

        enableClickableOptGroups: true,
        buttonWidth: '100%',
        includeSelectAllOption: true,
        nonSelectedText: "Types",
        selectAllText: "All",
        maxHeight: 400,
        // button text test code
        buttonText: function (options, select) {
          if (
            options.length === 0 ||
            options.length === $("[data-drupal-selector=\"edit-field-category-target-id\"] option").length) {
            return "Types";
          } else {
            return "Types (" + options.length + ")";
          }
        }
      });

      $("[data-drupal-selector=\"edit-type\"]").multiselect({

        enableClickableOptGroups: true,
        buttonWidth: '100%',
        includeSelectAllOption: true,
        nonSelectedText: "Types",
        selectAllText: "All",
        maxHeight: 400,
        // button text test code
        buttonText: function (options, select) {
          if (
            options.length === 0 ||
            options.length === $("[data-drupal-selector=\"edit-type\"] option").length) {
            return "Types";
          } else {
            return "Types (" + options.length + ")";
          }
        }
      });


      $("[data-drupal-selector=\"edit-reset\"]").appendTo("#filter-reset");


    }
  };


  $(".expand-filter-toolbar").click(function (e) {
    $(this).closest(".filter-toolbar").toggleClass("show-more");

    if ($(".filter-toolbar").hasClass("show-more")) {


      $(".show-more .expand-filter-toolbar span").html("Show Less");
      $('.show-more .expand-filter-toolbar i').removeClass('fal fa-angle-down fa-2x');
      $('.show-more .expand-filter-toolbar i').removeClass('fal fa-angle-up fa-2x');
      $('.show-more .expand-filter-toolbar i').addClass('fal fa-angle-up fa-2x');
    } else {
      $(".expand-filter-toolbar span").html("Show More");
      $('.expand-filter-toolbar i').removeClass('fal fa-angle-up fa-2x');
      $('.expand-filter-toolbar i').addClass('fal fa-angle-down fa-2x');
    }
    e.preventDefault();
  });



  $(".media-content").find(".views-element-container").contents().unwrap();
  $(".owl-carousel").find(".views-element-container").contents().unwrap();


  $(".dropdown-menu-left .mobile-and-tablet").remove();
  $(".navbar-mobile-submenu  .desktop-only").remove();


  $('#tab-1-more').insertAfter('.news-list');

  /*  Hot Fix Paragraph Multifield comma delimiter*/

  $('.row, div').each(function () {
    var string = $(this).html();
    $(this).html(string.replace(/      ,           /g, ' '));
  });



  $('.auo-tabs-views-ajax ul[data-load="ajax"] a').on('click', function () {
    var $href = $(this).data('panel');
    var self = $(this);
    var main = $($href);
    var main_elements = $($href);
    var view = [];

    view[0] = main.data('target');
    view[1] = main.data('display');


    self.parents('.nav-tabs').find('li').removeClass('active');
    self.parent('li').addClass('active');
    if (main.length > 0) {
      if (main_elements.data('loaded') == false) {
        self.parents('.auo-tabs-views-ajax').addClass('ajaxloadding');
        $.ajax({
          url: drupalSettings.auorgan_load_ajax_view,
          type: 'POST',
          dataType: 'html',
          data: 'view=' + view[0] + '----' + view[1]
        }).done(function (reponse) {
          main_elements.html(reponse);

          main.data('loaded', 'true');
          self.parents('.auo-tabs-views-ajax').find('.tab-pane').removeClass('active');
          $($href).addClass('active');

          Drupal.attachBehaviors(document);
          self.parents('.auo-tabs-views-ajax').removeClass('ajaxloadding');
        });

        return true;
      } else {
        self.parents('.auo-tabs-views-ajax').find('.tab-pane').removeClass('active');
        $($href).addClass('active');

      }
    }
  });


  Drupal.behaviors.checkifworks = {
    attach: function (){

      if (window.is_rendered !== 1) {

        $(".ctf-header-audio .chp__playlist li").click(function () {

          var video_thumb = $(this).find('.video-thumb img').attr('src');
          $(".ctf-header-audio .plyr--audio").css({'background': 'url(' + video_thumb + ')'});
        });

        $('.ctf-header-audio .plyr').wrapAll('<div class="col-md-8 audio-player"></div>');
        $('.ctf-header-audio .chp__playlist').wrapAll('<div class="col-md-4 pl-0 content"></div>');
        $(".audio-playlist-inner .content").mCustomScrollbar({

          theme: "dark-thin",

          scrollButtons: {
            enable: true,
            scrollType: "stepped"
          },
          autoHideScrollbar: true,
        });

        window.is_rendered = 1
      }
    }
  };

  Drupal.behaviors.tabowl = {

    attach: function (){

      $("#tabbed-carousel-1,#tabbed-carousel-2").owlCarousel({

        loop: false,
        animateIn: 'fadeInLeft',
        autoplay: false,
        autoplayHoverPause: true,
        nav: true,
        margin: 15,
        dots: false,
        mouseDrag: true,
        slideSpeed: 500,
        navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
        items: 4,
        responsive: {
          0: {
            items: 1
          },
          479: {
            items: 1
          },
          768: {
            items: 2
          },
          980: {
            items: 3
          },
          1199: {
            items: 4
          }
        }

      });
    }
  };
  let $table = $('table');
  $table.removeAttr("border cellpadding cellspacing style" );
  $table.addClass("table table-striped table-bordered table-hover");


  Drupal.behaviors.facet_chosen = {

    attach: function (){

      $(".facets-widget-dropdown select").chosen({
        disable_search_threshold: 5,
        inherit_select_classes: true,
        no_results_text: "No results",
      });
      // $(".chosen-select-2").chosen({
      //   disable_search_threshold: 100,
      //   inherit_select_classes: true,
      //   width: '100%'
      // }).on('chosen:showing_dropdown', function (evt, params) {
      //   $(this).parent().addClass('is-active');
      //   $.js('custom-scroll').find(".chosen-results").mCustomScrollbar({
      //     theme: "dark-thin",
      //
      //     scrollButtons: {
      //       enable: true,
      //       scrollType: "stepped"
      //     }
      //   });
      // }).on('chosen:hiding_dropdown', function (evt, params) {
      //   $(this).parent().removeClass('is-active');
      // });
    }
  };

  $(".flip-box-bio").mCustomScrollbar({
    theme: "white",
    advanced: {
      autoScrollOnFocus: false,
    },
    scrollButtons: {
      enable: true
    }
  });


  $("#edit-items-per-page").chosen({
    disable_search_threshold: 5,
    width: "100%"

  });
  $('.more-link').on('click', function(event){
    event.preventDefault();
    window.location = $(this).find("a").attr("href");
    return false;
  });

  Drupal.behaviors.lozad = {
    attach: function () {
      if (typeof window.lozad === 'function') {
        Drupal.behaviors.lozad.observer = lozad('.lozad',
          {
            load: function(el) {
              el.src = el.dataset.src;
              el.onload = function() {
                el.classList.add('lazy-fade')
              }
            },
          loaded: function(el) {
            // Custom implementation on a loaded element
            el.classList.add('loaded');
          }
        });
        Drupal.behaviors.lozad.observer.observe();
      }
    }
  };

  // =======================================================================================
  // Defer videos (Youtube, Vimeo)
  // Note: When you have embed videos in your webpages it causes your page to load slower.
  // Deffering will allow your page to load quickly.
  // Source: https://www.feedthebot.com/pagespeed/defer-videos.html
  // =======================================================================================
  function init() {
    var vidDefer = document.getElementsByTagName('iframe');
    for (var i = 0; i < vidDefer.length; i++) {
      if (vidDefer[i].getAttribute('data-src')) {
        vidDefer[i].setAttribute('src', vidDefer[i].getAttribute('data-src'));
      }
    }
  }
  Drupal.behaviors.defer = {
    attach: function () {
      window.onload = init;
    }
  };

    $(".embed-code iframe").width("100%");
    $(".embed-code iframe").height(460);

  // Drupal.behaviors.faq = {
  //   attach: function () {
  //     var options = {
  //       valueNames: [ 'faq-question', 'faq-answer' ]
  //     };
  //     var userList = new List('faqs', options);
  //   }
  // };

  $( ".with-red-arrow a" ).addClass("link link--arrowed");

  $( ".with-red-arrow a" ).append( "<svg width='17' height='17' class=\"arrow-icon\" viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "<path class=\"arrow-icon--arrow\"  d=\"M8 256c0 137 111 248 248 248s248-111 248-248S393 8 256 8 8 119 8 256zM256 40c118.7 0 216 96.1 216 216 0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216zm86.6 224.5l-115.1 115c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L303 256l-99.5-99.5c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l115.1 115c4.6 4.8 4.6 12.4-.1 17.1z\"/>\n" +
    "</svg>" );

  $(".firstWord").html(function (i, html) {
    return html.replace(/&nbsp;/g, ' ');
  });

  $(".firstWord").html(function(){
    var text= $(this).text().trim().split(" ");
    var first = text.shift();
    return (text.length > 0 ? "<small><span class='red'>"+ first + "</span> " : first) + "<span class='blue'>"+ text.join(" ")+ "</span></small> ";
  });

  $(".getFirstWord small span").html(function(){
    var text= $(this).text().trim().split(" ");
    var first = text.shift();
    return (text.length > 0 ? "<span class='title-first'>"+ first + "</span> " : first)+ text.join(" ");
  });


  $(document).ready(function(){
        var box_index = 2;
        var box_details_index =1;
        var dataId = 'right';
    $('.section').hover(
      function(){

        // var box_index = parseInt($(this).children("a").css("z-index"), 10);
        // var box_details_index = parseInt($(this).children("div").css("z-index"), 10);
        // $(".section:not(:hover)").children("div").css({'opacity' : '0'});
        // $(".section:not(:hover)").children("div").css({'z-index' : '1'});
        // $(".section:not(:hover)").children("a").css({'z-index' : '2'});
        console.log($(this).attr("data-position"));

        if (dataId !== $(this).attr("data-position")) {
          box_details_index = box_details_index +3;
          box_index = box_index +3;
          dataId = $(this).attr("data-position");
        }

        $(this).children("a").css({'z-index' : (box_index).toString()});
        // $(this).children("div").css({'opacity' : '1'});
        $(this).children("div").css({'z-index' : (box_details_index).toString()});
        console.log(box_index);
        $(this).addClass('animate');
       },
      function(){
        // $(this).children("div").css({'z-index' : '1'});
        // $(this).children("a").css({'z-index' : '2'});
        $(this).removeClass('animate') }
    );
  });

  $('.section .mural-card-details .close-button').click(function(e){
    $(this).closest('.section.animate').removeClass('animate');
    e.stopPropagation();
  });

  // $(function() {
  //   $('nav ul li a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('is-active');
  // });

  $('#smooth-scroll-menu >li > a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top-70
        }, 1000);
        return false;
      }
    }
  });

  $(document).ready(function(){
    $("a.b-gallery-thumbs__item").click(function() {
      $('a.b-gallery-thumbs__item img').removeClass('current');
      $(this).children('img').addClass('current');
    });
  });

  (function($) {
    $('.accordion > li:eq(0) a').addClass('active').next().slideDown();

    $('.accordion a').click(function(j) {
      var dropDown = $(this).closest('li').find('.accordion-content');

      $(this).closest('.accordion').find('.accordion-content').not(dropDown).slideUp();

      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
      } else {
        $(this).closest('.accordion').find('a.active').removeClass('active');
        $(this).addClass('active');
      }

      dropDown.stop(false, true).slideToggle();

      j.preventDefault();
    });
  })(jQuery);

})(jQuery);


window.addEventListener('load', function () {
  var spacing = 30;
  var shareButton = document.getElementById('share-button');

  if (shareButton) {
    var shareWrapper = document.getElementById('share-wrapper');
    var socialShareWrapper = document.querySelector('.social-share-wrapper');
    var socialShareDimensions = socialShareWrapper.getBoundingClientRect();
    var socialShareOffset = -socialShareDimensions.width - spacing + 'px';
    var socialclass = shareWrapper.querySelector('.sr-only');

    shareButton.setAttribute('aria-expanded', 'false');
    socialShareWrapper.style.marginRight = socialShareOffset;

    shareButton.addEventListener('click', function () {
      var isExpanded = shareWrapper.classList.toggle('expanded');

      socialShareWrapper.style.marginRight = isExpanded ? 0 : socialShareOffset;
      shareButton.setAttribute('aria-expanded', isExpanded);
      if (isExpanded) {
        socialclass.classList.remove('sr-only');
        socialclass.className += 'hidden';
      } else if (socialclass.classList.contains('hidden')) {
        socialclass.classList.remove('hidden');
        socialclass.className += 'sr-only';
      }
    });
  }


});







function initializeYoutubeVideos(context) {
  var contextUsed = (typeof context !== 'undefined' && context !== document ? context : document);
  // If we have a jQuery object, extract the DOM element.
  if (typeof context !== 'undefined' && typeof context[0] !== 'undefined') {
    contextUsed = context[0];
  }
  var youtubeVideos = contextUsed.querySelectorAll('video source');
  for (var i = 0; i < youtubeVideos.length; i++) {
    if (youtubeVideos[i].getAttribute('data-src')) {
      var source = youtubeVideos[i].getAttribute('data-src');
      // Remove the data-src attribute in order to avoid to do it several times.
      youtubeVideos[i].removeAttribute('data-src');
      youtubeVideos[i].setAttribute('src', source);
    }
  }
}

(function ($) {

  /**
   * Set the src attributes of the Youtube videos.
   */
  Drupal.behaviors.scaldYoutubePlayer = {
    attach: function (context, settings) {
      // Initialize the Youtube videos.
      initializeYoutubeVideos(context);
    }
  };
}(jQuery));