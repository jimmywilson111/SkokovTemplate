jQuery(document).ready(function () {

    var $grid = $('.grid').masonry({
        itemSelector: '.grid-item',
        percentPosition: true,
        columnWidth: '.grid-sizer'
    });

    $grid.imagesLoaded().progress(function () {
        $grid.masonry();
    });

    jQuery("#owl-carousel").owlCarousel({
        loop: true,
        nav: false,
        margin: 25,
        dots: false,
        autoplay: true,
        autoplaySpeed: 400,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 5
            },
            1000: {
                items: 9
            }
        }
    });
})