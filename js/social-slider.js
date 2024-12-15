 $('.social-slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        appendArrows: $(".social-slider-nav"),
        nextArrow: '<button class="right-arrow"><i class="fas fa-angle-right"></i></button>',
        prevArrow: '<button class="left-arrow"><i class="fas fa-angle-left"></i></button>',
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.tesi-slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        appendArrows: $(".tesi-slider-nav"),
        nextArrow: '<button class="right-arrow"><i class="fas fa-angle-right"></i></button>',
        prevArrow: '<button class="left-arrow"><i class="fas fa-angle-left"></i></button>'
    });
    $(document).ready(function() {
        // Header Sticky
        if ($(window).width() > 991) {
            $(window).on('scroll', function() {
                if ($(this).scrollTop() > 120) {
                    $('#login .navbar-default').addClass("is-sticky");
                } else {
                    $('#login .navbar-default').removeClass("is-sticky");
                }
            });
        }
    });
