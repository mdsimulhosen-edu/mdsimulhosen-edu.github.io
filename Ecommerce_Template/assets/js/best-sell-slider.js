$('.best-sell').owlCarousel({
    loop: false,
    autoplay: true,
    autoplaySpeed: 150,
    margin: 10,
    smartSpeed:450,
    nav:true,
    singleItem:true,
    dots:false,
    animateOut: 'fadeOut',
    animateIn: 'flipInX',
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            
        },
        600: {
            items: 3,
            
        },
        1000: {
            items: 4,
            
        }
    }
})