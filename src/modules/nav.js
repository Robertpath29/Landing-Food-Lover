export function navigation(scrollPages) {
    $("a").removeClass("active");
    const sectionHero = $(".hero");
    const sectionAboutUs = $(".aboutUs");
    const sectionFoodQuality = $(".foodQuality");
    const sectionFoodGallery = $(".foodGallery");
    const sectionEnjoyOurFood = $(".enjoyOurFood");
    const sectionOurMenu = $(".ourMenu");
    const sectionEnjoyBestMeal = $(".enjoyBestMeal");



    if (scrollPages < sectionHero.height() * 0.80) {
        $("#home").addClass("active");
    } else if (scrollPages > sectionHero.height() * 0.80 && scrollPages < sectionAboutUs.offset().top + sectionAboutUs.height() * 0.80) {
        $("#about").addClass("active");
    } else if (scrollPages > sectionHero.height() * 0.80 && scrollPages < sectionFoodQuality.offset().top + sectionFoodQuality.height()) {
        $("#offers").addClass("active");
    } else if (scrollPages > sectionFoodQuality.offset().top + sectionFoodQuality.height() * 0.80 && scrollPages < sectionFoodGallery.offset().top + sectionFoodGallery.height() * 0.80) {
        $("#gallery").addClass("active");
    } else if (scrollPages > sectionFoodGallery.offset().top + sectionFoodGallery.height() * 0.80 && scrollPages < sectionEnjoyOurFood.offset().top + sectionEnjoyOurFood.height() * 0.80) {
        $("#blog").addClass("active");

    } else if (scrollPages > sectionEnjoyOurFood.offset().top + sectionEnjoyOurFood.height() * 0.80 && scrollPages < sectionOurMenu.offset().top + (sectionOurMenu.height() + sectionEnjoyBestMeal.height()) * 0.80) {
        $("#menus").addClass("active");
    } else {
        $("#contact").addClass("active");

    }




}

export function moveToElem(e) {
    let elem = e.target.id
    let windowHeight = Math.floor($(window).scrollTop());

    switch (elem) {

        case "home":
            if (windowHeight == 0)
                break;
            $("html,body").stop();
            scrollTo(0);
            break;

        case "about":
            let aboutPos = $(".aboutUs").offset().top
            if (windowHeight == Math.floor(aboutPos))
                break;
            console.log(1);
            $("html,body").stop();
            scrollTo(aboutPos);
            break;

        case "menus":
            let menuPos = $(".ourMenu").offset().top
            if (windowHeight == Math.floor(menuPos))
                break;
            $("html,body").stop();
            scrollTo(menuPos);
            break;

        case "offers":
            let offersPos = $(".foodQuality").offset().top
            if (windowHeight == Math.floor(offersPos))
                break;
            $("html,body").stop();
            scrollTo(offersPos);
            break;

        case "gallery":
            let galleryPos = $(".foodGallery").offset().top
            if (windowHeight == Math.floor(galleryPos))
                break;
            $("html,body").stop();
            scrollTo(galleryPos);
            break;

        case "contact":
            if (Math.floor(windowHeight + $(window).height()) == Math.floor($("body").height() - 1))
                break;
            $("html,body").stop();
            scrollTo($("body").height());
            break;

        case "blog":
            let blogPos = $(".enjoyOurFood").offset().top
            if (windowHeight == Math.floor(blogPos))
                break;
            $("html,body").stop();
            scrollTo(blogPos);
            break;
    }
}

function scrollTo(positionElem) {
    $("html,body").animate({
        scrollTop: positionElem
    }, 1000);
}