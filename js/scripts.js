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

    $('.tel-input').inputmask({
        "mask": "+7 (999) 999-99-99"
        , "placeholder": "_"
        , showMaskOnHover: false
        , showMaskOnFocus: true
    });

    $('.open-modal').click(function(e) {
        e.preventDefault();
        $('body').addClass('modal-opened');
        $('.modal').addClass('modal--opened');
    });

    $('.modal').click(function() {
        $('.modal').removeClass('modal--opened');
        $('body').removeClass('modal-opened');
    });

    $('.modal__block').click(function(e) {
        e.stopPropagation();
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
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.services-slider').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});