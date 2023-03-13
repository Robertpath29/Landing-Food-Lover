$(window).on("load", function () {

    const swiper = new Swiper(".swiper", {

        touchMoveStopPropagation: true,
        simulateTouch: false,

        speed: 1500,

        slidesPerView: 3,
        spaceBetween: 14,
        
        // autoplay: {
        //     delay: 2000,
        //     disableOnInteraction: false,
        // },

        direction: 'horizontal',
        loop: true,


        scrollbar: {
            el: '.swiper-scrollbar',
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });
})