$(document).ready(function() {
    $('.price__link').click(function(e) {
        e.preventDefault();
        $('.price__tab.active').removeClass('active');
        $('.price__content--active').removeClass('price__content--active');
        $(this).parent().addClass('active');
        $($(this).attr('href')).addClass('price__content--active');
    });

    $('.header__menu-button').click(function(e) {
        e.preventDefault();
        $(this).next().slideToggle();
    });

    $('.billboard-slider').slick({
        arrows: false,
        dots: true
    });

    $('.reviews__wrap').slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.tel-input').inputmask({
        "mask": "+7 (999) 999-99-99"
        , "placeholder": "_"
        , showMaskOnHover: false
        , showMaskOnFocus: true
    });
});