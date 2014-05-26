/*
    SCROLLER START
*/

$(function () {
    var $TLScroller = $('#tl-scroller')
    var $itemsContainer = $TLScroller.find('.tl-container');
    var $itemsScroller = $TLScroller.find('.tl-inner-scroller');
  
    var $sliderWrapper = $TLScroller.find('.slider-wrapper');
    var $slider = $sliderWrapper.find('.slider');
  
    var $nextBtn = $TLScroller.find('.next-btn');
    var $prevBtn = $TLScroller.find('.prev-btn');
  
    var nmb_images = 0; //total number of images
    var current = 0; //current image being viewed

    openGallery();
  
    function openGallery() {
        //current gets reseted
        current = 0;
        $itemsContainer.show();
        //total number of images
        nmb_images = $itemsContainer.find('.item').length;
        //calculate width,
        //padding left 
        //and padding right for content wrapper
        var w_width = 0;
        var padding_l = 0;
        var padding_r = 0;
        //center of screen
        var center = $(window).width() / 2;
        var one_divs_w = 0;
        /*
                    Note:
                    the padding left is the center minus half of the width of the first content div
                    the padding right is the center minus half of the width of the last content div
                    */
        $itemsScroller.find('.item').each(function (i) {
            var $div = $(this);
            var div_width = $div.width();
            w_width += div_width+30;
            //if first one, lets calculate the padding left
            if (i == 0) padding_l = center - (div_width / 2);
            //if last one, lets calculate the padding right
            if (i == (nmb_images - 1)) {
                padding_r = center - (div_width / 2);
                one_divs_w = div_width;
            }
        }).end().css({
            'width': w_width + 'px',
                'padding-left': padding_l/2 + 'px',
                'padding-right': padding_r/2 + 'px'
        });

        //scroll all left;
        $itemsContainer.scrollLeft(w_width);

        //innitialize the slider
        $slider.slider({
            orientation: 'horizontal',
            max: w_width - one_divs_w, //total width minus one content div width
            min: 0,
            value: 0,
            slide: function (event, ui) {
                $itemsContainer.scrollLeft(ui.value);
            },
            stop: function (event, ui) {
                checkClosest();
            }
        });
        //open the gallery and show the slider
        $itemsContainer.animate({
            'height': '240px'
        }, 200);

        //scroll all right;
        $itemsContainer.stop()
            .animate({
            'scrollLeft': (padding_l/2)+'px'
        }, 2000, 'easeInOutExpo');
    }

    //while the gallery scrolls we want that the slider scrolls as well
    $itemsContainer.scroll(function () {
        $slider.slider('value', parseInt($itemsContainer.scrollLeft(), 10));
    });

    //User clicks next button (thumbs)
    $nextBtn.click(function () {
        slideThumb(1);
    });

    //User clicks previous button (thumbs)
    $prevBtn.click(function () {
        slideThumb(0);
    });

    //centers an image and opens it if open is true
    function centerImage($obj, speed) {
        //the offset left of the element
        var obj_left = $obj.offset().left;
        //the center of the element is its offset left plus 
        //half of its width
        var obj_center = obj_left + ($obj.width() / 2);
        //the center of the window
        var center = $(window).width() / 2;
        //how much the scroller has scrolled already
        var currentScrollLeft = parseFloat($itemsContainer.scrollLeft(), 10);
        //so we know that in order to center the image,
        //we must scroll the center of the image minus the center of the screen,
        //and add whatever we have scrolled already
        var move = currentScrollLeft + (obj_center - center);
        if (move != $itemsContainer.scrollLeft())
          $itemsContainer.stop()
              .animate({
              scrollLeft: move
          }, speed);
    }

    //slides the scroller one picture 
    //to the right or left
    function slideThumb(way) {
        if (way == 1) {
            ++current;
            var $next = $itemsScroller.find('.item:nth-child(' + parseInt(current + 1) + ')');
            if ($next.length > 0) centerImage($next, 600);
            else {
                --current;
                return;
            }
        } else {
            --current;
            var $prev = $itemsScroller.find('.item:nth-child(' + parseInt(current + 1) + ')');
            if ($prev.length > 0) centerImage($prev, 600);
            else {
                ++current;
                return;
            }
        }
    }

    //when we stop sliding 
    //we may want that the closest picture to the center 
    //of the window stays centered
    function checkClosest() {
        var center = $(window).width() / 2;
        var current_distance = 99999999;
        var idx = 0;
        $container = $itemsScroller;
        $container.find('.item').each(function (i) {
            var $obj = $(this);
            //the offset left of the element
            var obj_left = $obj.offset().left;
            //the center of the element is its offset left plus 
            //half of its width
            var obj_center = obj_left + ($obj.width() / 2);
            var distance = Math.abs(center - obj_center);
            if (distance < current_distance) {
                current_distance = distance;
                idx = i;
            }
        });
        var $new_current = $container.find('.item:nth-child(' + parseInt(idx + 1) + ')');
        current = $new_current.index();
        centerImage($new_current, 200);
    }
});

/*
    SCROLLER END
*/