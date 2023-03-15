import { animationImg } from "./animImg.js";
import { navigation } from "./nav.js";
import { moveToElem } from "./nav.js"


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