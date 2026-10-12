const swiper = new Swiper(".carrusel", {

    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    spaceBetween: 30,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },

        768: {
            slidesPerView: 2
        },

        991: {
            slidesPerView: 3
        }
    }

});