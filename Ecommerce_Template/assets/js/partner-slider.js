$('.partner').owlCarousel({
    loop: true,
    autoplay: true,
    autoplaySpeed: 80,
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
            items: 3,
            nav: false
        },
        1000: {
            items: 6,
            nav: false,
        }
    }
})