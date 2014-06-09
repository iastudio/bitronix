var isScrolling = false;
var easing = 'easeInOutQuad';
var duration = 1000;
var offset = -130;

$(document).on('replace', function () {
    onReplace();
});

//Foundation.set_namespace = function() {};

$(document).foundation(); // Foundation init

$(function() {

    // Chosen

    $(".chosen-select").chosen().change( function(){
        //$('.section-content').flexVerticalCenter({ cssAttribute: 'padding-top' });
    });

    // Phone dropdown
    $('.phone-dropdown li a').on('click', function(e) {
        e.preventDefault();
        var number = $(this).data('phone');
        var city = $(this).html();
        $('.phone-dropdown ul li a.active').removeClass('active');
        $(this).addClass('active');
        $('.phone-number').html(number);
        $('.city-name').html(city);
    });


    // Google Maps
    mapInit();

    // Vertical centering of sections content
    // $('.section-content').flexVerticalCenter({ cssAttribute: 'padding-top' });

    // Snap scroll init
    if (!Modernizr.touch && ($(window).height() > 750)) {
         $('#fullpage').fullpage({
            verticalCentered: true,
            resize : true,
            // slidesColor : ['#ccc', '#fff'],
            anchors: ['slide-slider', 'slide-company', 'slide-projects', 'slide-news', 'slide-partners', 'slide-contacts'],
            scrollingSpeed: 700,
            //easing: 'easeInOut',
            menu: '#mainMenu',
            navigation: true,
            navigationPosition: 'right',
            // navigationTooltips: ['firstSlide', 'secondSlide'],
            // slidesNavigation: true,
            // slidesNavPosition: 'bottom',
            // loopBottom: false,
            // loopTop: false,
            // loopHorizontal: true,
            // autoScrolling: true,
            // scrollOverflow: false,
            css3: false,
            paddingTop: '130px',
            // paddingBottom: '10px',
            // fixedElements: '#element1, .element2',
            // normalScrollElements: '#element1, .element2',
            keyboardScrolling: true,
            touchSensitivity: 15,
            // continuousVertical: false,
            // animateAnchor: true,

            //events
            onLeave: function(index, nextIndex, direction){
                if (nextIndex == 6)
                    $('.copyright').animate({bottom: 0});
                else
                    $('.copyright').animate({bottom: -100});
            },
            afterLoad: function(anchorLink, index){},
            afterRender: function(){},
            afterResize: function(){},
            afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
            onSlideLeave: function(anchorLink, index, slideIndex, direction){}
        });
    } else {
        // Nav ScrollTo
        $('nav.top-bar .menu a').on('click', function(e) {
            e.preventDefault();
            var $link = $(this);
            var hash = $link.attr('href').split('#')[1]-1;
            var $target = $('section[data-index=' + hash + ']')
            $.scrollTo($target, 400, { offset:-400 });
        });
    }

    if ($(window).height() < 750) {
        $('body').css({'overflow': 'auto'});
    }

    //Datepicker
    $.datepicker.regional['ru'] = {
                closeText: 'Выбрать',
                prevText: '&#x3c;Пред',
                nextText: 'След&#x3e;',
                currentText: 'Этот год',
                monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
                'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
                monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
                'Июл','Авг','Сен','Окт','Ноя','Дек'],
                dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
                dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
                dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
                weekHeader: 'Не',
                dateFormat: 'dd.mm.yy',
                firstDay: 1,
                isRTL: false,
                showMonthAfterYear: false,
                yearSuffix: ''};
    $.datepicker.setDefaults($.datepicker.regional['ru']);

    var $dp = $( "#datepicker" ).datepicker({
        changeMonth: false,
        changeYear: true,
        showButtonPanel: true,
        dateFormat: 'yy',
        onClose: function(dateText, inst) { 
            //var month = $("#ui-datepicker-div .ui-datepicker-month :selected").val();
            var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
            $(this).datepicker('setDate', new Date(year, 1));

            //var date = year;
            $(".date-select a").html(year);
        },
        onChangeMonthYear: function(year, month, inst) {
            //var date = $.datepicker.regional['ru'].monthNames[parseInt(month)-1] + ' ' + year;
            $(".date-select a").html(year);
        },
        beforeShow: function (event, ui) {
            var $link = $(".date-select a");
            if (!Modernizr.touch) {
                ui.dpDiv.css({
                    marginLeft: -170 + 'px'
                });
            }
        }
    });

    $(".date-select a").on('click', function(e) {
        e.preventDefault();
        $dp.datepicker("show");
    });

    /////////////////////
    /// Quotes-slider ///
    /////////////////////

    $('.quote-container .nav a').on('click', function(e) {
        e.preventDefault();

        var toggleInfo = function(that, quote, delay) {
            $(quote).fadeTo( delay, 0, function() {
                $(this).fadeTo( delay, 1);
            });
            $(that).parents('.quote-container').find('.avatar').fadeTo( delay, 0, function() {
                $(this).attr('src', $(quote).find('p').eq(0).attr('data-avatar')).fadeTo( delay, 1);
            });
            $(that).parents('.quote-container').find('.name').fadeTo( delay, 0, function() {
                $(this).html($(quote).find('p').eq(0).attr('data-name')).fadeTo( delay, 1);
            });
            $(that).parents('.quote-container').find('.state').fadeTo( delay, 0, function() {
                $(this).html($(quote).find('p').eq(0).attr('data-state')).fadeTo( delay, 1);
            });
        };

        var quote = $(this).parents('.quote-container').find('.quote');
        var that = $(this);
        var delay = 500;

        if ($(that).hasClass('next')) {
            toggleInfo(that, quote, delay);
            setTimeout( function() {
                var current = $(quote).find('p').eq(0).hide();
                $(quote).find('p').eq(0).remove();
                $(quote).append(current);
                $(quote).find('p').eq(0).show();
            }, delay/2);
        } else {
            toggleInfo(that, quote, delay);
            setTimeout( function() {
                var current = $(quote).find('p:last').hide();
                $(quote).find('p:last').remove();
                $(quote).find('p').eq(0).hide();
                $(quote).prepend(current);
                $(quote).find('p').eq(0).show();
            }, delay/2);
        }

    });

});

var onReplace = function() {
    $(document).foundation('orbit', { // Foundation Orbit Slider settings
        animation: 'fade',
        timer_speed: 6000,
        animation_speed: 400,
        stack_on_small: false,
        navigation_arrows: true,
        slide_number: false,
        pause_on_hover: false,
        resume_on_mouseout: false,
        bullets: true,
        timer: true,
        variable_height: true,
        swipe: true
      });

    $("#slider-spinner").appendTo(".orbit-bullets li.active");

    setInterval(function() { //Animating spinner
        var val = parseInt($('.orbit-progress').width());
        var $circle = $('#svg #bar');

        if (isNaN(val)) {
            val = 100; 
        }
        else {
            var r = $circle.attr('r');
            var c = Math.PI*(r*2);

            if (val < 0) { val = 0;}
            if (val > 100) { val = 100;}

            var pct = ((100-val)/100)*c;

            $circle.css({ strokeDashoffset: pct});

            //$('#cont').attr('data-pct', val);
        }
    }, 100);

    $("#bit-orbit-slider").on("after-slide-change.fndtn.orbit", function(event, orbit) { // Append spinner div onSlideChanges
      $("#slider-spinner").appendTo(".orbit-bullets li.active");
    });

    $('.slide-inner').flexVerticalCenter({ cssAttribute: 'top', verticalOffset: '360px'  }); // Slide inner content vertical centering

    var v = new Array();

    v[0] = [
            "video/1.webm",
            "video/1.ogv",
            "video/1.mp4"
            ];

    v[1] = [
            "video/2.webm",
            "video/2.ogv",
            "video/2.mp4"
            ];

    v[2] = [
            "video/3.webm",
            "video/3.ogv",
            "video/3.mp4"
            ];

    v[3] = [
            "video/4.webm",
            "video/4.ogv",
            "video/4.mp4"
            ];

    v[4] = [
            "video/5.webm",
            "video/5.ogv",
            "video/5.mp4"
            ];

    v[5] = [
            "video/6.webm",
            "video/6.ogv",
            "video/6.mp4"
            ];

    var vid = document.getElementsByTagName('video');

    for (var i = 0; i < vid.length; ++i) {

        if (Modernizr.video && Modernizr.video.webm) {
            vid[i].setAttribute("src", v[i][0]);
        } else if (Modernizr.video && Modernizr.video.ogg) {
            vid[i].setAttribute("src", v[i][1]);
        } else if (Modernizr.video && Modernizr.video.h264) {
            vid[i].setAttribute("src", v[i][2]);
        }

        vid[i].load();
        vid[i].play();
    }
    // preloader();

    // Slider links click
    $('#slider a.button').on('click', function(e) {
        e.preventDefault();
        scrollToSection('projects');
    });
};

var snapScroll = function() {

};

var scrollNext = function() {
    isScrolling = true;
    $next = $(document).find('section.active').next('section');
    if (typeof $next !== 'undefined' && $next.length > 0) {
        $(window).scrollTo($next, {
            offset: offset,
            duration: duration,
            easing: easing,
            onAfter: function () {
                isScrolling = false;
                $(document).find('section.active').removeClass('active');
                $next.addClass('active');
            }
        });
    } else
        isScrolling = false;
};

var scrollPrev = function() {
    isScrolling = true;
    $prev = $(document).find('section.active').prev('section')
    if (typeof $prev !== 'undefined' && $prev.length > 0) {
        $(window).scrollTo($prev, {
            offset: offset,
            duration: duration,
            easing: easing,
            onAfter: function () {
                isScrolling = false;
                $(document).find('section.active').removeClass('active');
                $prev.addClass('active');
            }
        });
    } else
        isScrolling = false;
};

var scrollToSection = function(section) {
    var $section = $('#'+section);
    var localOffset = -350;
    if (!Modernizr.touch)
        localOffset = offset;
    $(window).scrollTo($section, {
        offset: localOffset,
        duration: duration,
        easing: easing,
        onAfter: function () {
            isScrolling = false;
            $('section.active').removeClass('active');
            $section.addClass('active');
            $('nav.top-bar a.active').removeClass('active');
            $('a[href$="' + section + '"]').addClass('active');
        }
    });
};

var preloader = function() {
    // Preloader
    var $progress = $('#progress').text('0 / 100'), 
    loader = new PxLoader();
    var videos = [];

    $('video').each(function(i, el) {
        videos[i] = $(el).attr('src');
    });

    for(var i=0; i < videos.length; i++) { 

        var pxImage = new PxLoaderVideo(videos[i]); 
        pxImage.imageNumber = i + 1;
        loader.add(pxImage);
    }

    loader.addProgressListener(function(e) {
        $progress.text(e.completedCount + ' / ' + e.totalCount); 
    }); 
     
    loader.start();
};

var mapInit = function() {
    var myLatlng = new google.maps.LatLng(43.127654, 131.886923);
    var mapOptions = {
        zoom: 16,
        center: myLatlng
      };
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map
    });

    // Map Expand
    $('a.map-expand').on('click', function(e) {
        e.preventDefault();
        $('#map-canvas').addClass('expanded');
        $('.map-close').show();
        mapInit();
    });

    $('.map-close').on('click', function(e) {
        e.preventDefault();
        $('#map-canvas').removeClass('expanded');
        $('.map-close').hide();
        mapInit();
    });
};