/*
        SERVICES
*/

$(function () {
    new WOW().init();
});

/*
        ABOUT
*/

$(function () {
    $('#work').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

/*
        TEAM
*/

$(function () {
    $('.team-members').owlCarousel({
        items: 3,
        smartSpeed: 700,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        lazyLoad: true
    });
});

/*
        STATS   
*/

$(function () {
    $('.counter').counterUp({
        time: 1600,
        delay: 10
    });
});

/*        CLIENTS   
*/


$(function () {
    $('#clients-list').owlCarousel({
        items: 5,
        smartSpeed: 700,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
    });
});

/*
        NAVIGATION   
*/

$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 50) {
            console.log("if");
            $('nav').addClass('obrn-nav');
        } else {
            $('nav').removeClass('obrn-nav');
        }
    });
});


/*
https://github.com/kswedberg/jquery-smooth-scroll
*/

//Smooth Scroll Effect

$(function () {
    $('#nav-menu a').click(function (event) {
        event.preventDefault();
        let section = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1300, "easeInOutExpo");
    })
});