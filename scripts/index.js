$(document).ready(function() {

    // Control The Time Between The Slider And THe Nother

    $('.carousel').carousel({
        interval: 6000
    })

});

// Show The Box-Option When Click On Gear Setting

$('.option-box i.fa-cog').on('click', function() {

    let parentOfIt = $(this).parent('.option-box');

    if (parentOfIt.hasClass('none')) {

        parentOfIt.animate({
            left: 0
        }, 600);

        parentOfIt.toggleClass('none');

    } else {

        parentOfIt.animate({
            left: -200
        }, 600);

        parentOfIt.toggleClass('none');

    }

});

// Change The Color Of The Site

$('.option-box ul li').on('click', function() {

    $('link[href*="theme"]').attr('href', $(this).data('theme'));

});

// Overlay Loading

// $(window).load(function() {

//     $('.overlay-loading .spinner').fadeOut(1500, function() {

//         $(this).parent().fadeOut(1500);

//     });

// });

$(document).ready(function() {
    $('.overlay-loading .spinner').fadeOut('slow', function() {

        $('body').css('overflow', 'auto');

        $(this).parent().fadeOut('slow', function() {

            $(this).remove();

        });

    });
});

// Scrolled To Top

let scrolled = $('.scrolled-top');

$(window).scroll(function() {

    if ($(this).scrollTop() >= 700) {

        if (scrolled.is(':hidden')) {

            scrolled.fadeIn('slow');

        }

    } else {

        scrolled.fadeOut('slow');

    }

});

scrolled.click(function() {

    $('html, body').animate({
        scrollTop: 0
    }, 500)

});

$('.panel-default > .panel-heading i').click(function() {

    if ($($(this).hasClass('fa-arrow-right'))) {

        $($(this).toggleClass('fa-arrow-right fa-arrow-down'))

    };

});