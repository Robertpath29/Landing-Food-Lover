$(window).on("load", function () {
    const heroImg = $(".hero-img");
    heroImg.css("display", "block");

    $(document).on("scroll", animationImg);


});




function animationImg() {
    const header = $(".header");
    const heroImg = $(".hero-img");
    const aboutUsImg = $(".aboutUs-img");
    const foodQualityImg1 = $(".imgFood1");
    const foodQualityImg2 = $(".imgFood2");
    const foodQualityImg3 = $(".imgFood3");
    const bestMeal = $(".enjoyBestMeal-img");


    let scrollPages = Math.floor($(document).scrollTop());
    let scrollPagesBottom = scrollPages + $(window).height();


    if (scrollPages > 66) {
        header.css({
            "background-color": "rgba(29, 29, 35, 0.8)",
            "padding-top": "10px"
        });
        heroImg.css("backgroundPosition", 0);

    } else {
        header.css({
            "background-color": "transparent",
            "padding-top": "37px"
        });
    }

    if (scrollPagesBottom > Math.floor(aboutUsImg.offset().top) + aboutUsImg.height() * 0.75) {
        aboutUsImg.css("backgroundPosition", 0);
    }

    if (scrollPagesBottom > Math.floor(foodQualityImg1.offset().top + foodQualityImg1.height() * 0.75)) {
        foodQualityImg1.css("backgroundPosition", "0");
    }
    if (scrollPagesBottom > Math.floor(foodQualityImg2.offset().top + foodQualityImg2.height() * 0.75)) {
        foodQualityImg2.css("backgroundPosition", "0");
    }
    if (scrollPagesBottom > Math.floor(foodQualityImg3.offset().top + foodQualityImg3.height() * 0.75)) {
        foodQualityImg3.css("backgroundPosition", "0");
    }
    if (scrollPagesBottom > Math.floor(bestMeal.offset().top + bestMeal.height() * 0.75)) {
        bestMeal.css("backgroundPosition", "0");
    }


}