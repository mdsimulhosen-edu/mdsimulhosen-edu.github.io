
$('.top-news').owlCarousel({
    loop: true,
    autoplay: true,
    autoplaySpeed: 150,
    smartSpeed:50,
    dots:false,
    animateIn:'fadeIn',
    animateOut: 'fadeOut',
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 1,
            nav: false
        },
        1000: {
            items: 1,
            nav: false,
        }
    }
})