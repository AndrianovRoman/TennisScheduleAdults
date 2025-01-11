
// ------------------------ Карусель для Абонементов ------------------------

$('.season-tickets-content').not('.slick-initialized').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                dots: false,
                arrows: true,
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

// ------------------------ Карусель для Сертификатов ------------------------

$('.certificates-content').not('.slick-initialized').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    arrows: true,
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
                dots: true,
                arrows: false,
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 401,
            settings: {
                dots: true,
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]
});

// ------------------------ Закрытие всех details ------------------------

// const closeAllDetails = document.getElementById('close-all-details');
//
// closeAllDetails.onclick = () => {
//     let allDetails = document.querySelectorAll('.details');
//     allDetails.forEach((item) => {
//         item.removeAttribute('open');
//     })
// }


// ------------------------ Открытие информационных блоков на кнопку i ------------------------

// let selectedBox;
// document.onclick = function (e) {
//     let target = e.target;
//     if (target.className === 'details-content-title-info-button-iks'
//         || target.className === 'details-content-title-info-button') {
//         openBox(target);
//     }
// }
//
// function openBox(target) {
//     // if (selectedBox) {
//     //     selectedBox.classList.toggle('openBox');
//     // }
//     if (target.className === 'details-content-title-info-button-iks') {
//         selectedBox = target.nextElementSibling;
//     } else if (target.className === 'details-content-title-info-button') {
//         selectedBox = target.lastElementChild;
//     }
//     selectedBox.classList.toggle('openBox');
// }