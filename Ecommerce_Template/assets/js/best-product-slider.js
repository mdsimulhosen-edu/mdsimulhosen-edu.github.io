$('.best-product').owlCarousel({
    loop: true,
    autoplay: true,
    autoplaySpeed: 80,
    dots:true,
    animateIn:'fadeIn',
    animateOut: 'fadeOut',
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: false,
        }
    }
})