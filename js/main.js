function isOnScreen(elem) {
    // if the element doesn't exist, abort
    if( elem.length == 0 ) {
        return;
    }
    var $window = $(window);
    var viewport_top = $window.scrollTop();
    var viewport_height = $window.height() - 200;
    var viewport_bottom = viewport_top + viewport_height;
    var $elem = $(elem);
    var top = $elem.offset().top;
    var height = $elem.height();
    var bottom = top + height;

    return (top >= viewport_top && top < viewport_bottom) || (bottom > viewport_top && bottom <= viewport_bottom) || (height > viewport_height && top <= viewport_top && bottom >= viewport_bottom);
}

$( document ).ready( function() {
    window.addEventListener('scroll', function(e) {
        // first section
        if(isOnScreen($('.section-grow-left'))) {
            $('.section-grow-left').addClass('fadeInLeft');
        }
        if(isOnScreen($('.section-grow-right'))) {
            $('.section-grow-right').addClass('fadeInRight');
        }
        // second section
        if(isOnScreen($('.section-conversation-left'))) {
            $('.section-conversation-left').addClass('fadeInLeft');
        }
        if(isOnScreen($('.section-conversation-right'))) {
            $('.section-conversation-right').addClass('fadeInRight');
        }
        // third section
        if(isOnScreen($('.section-users-left'))) {
            $('.section-users-left').addClass('fadeInLeft');
        }
        if(isOnScreen($('.section-users-right'))) {
            $('.section-users-right').addClass('fadeInRight');
        }
    });
});

