import { animationImg } from "./animImg.js";
import { navigation } from "./nav.js";
import { moveToElem } from "./nav.js"
loadHeroBanner();

$(window).on("load", function () {
    let scrollPages = Math.floor($(document).scrollTop());
    animationImg(scrollPages);
    navigation(scrollPages);

    $(document).on("scroll", function () {
        scrollPages = Math.floor($(document).scrollTop());
        animationImg(scrollPages);
        navigation(scrollPages);
    });

    $(".header").on("click", moveToElem);

});

function loadHeroBanner() {
    if ($(window).width() > 856) {
        $(".hero-banner").html(`<video src="./video/heroBanner.mp4" width="100%" autoplay playsinline loop muted></video>`);
    }

}