

$('.season-tickets-content').not('.slick-initialized').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    infinite: false,
    arrows: false,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                dots: true,
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 801,
            settings: {
                dots: true,
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 401,
            settings: {
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]
});

$('.certificates-content').not('.slick-initialized').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    infinite: false,
    arrows: false,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 801,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 401,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]
});