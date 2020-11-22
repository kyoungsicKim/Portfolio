$(function () {
    let sideMenu = $(".sidebar__menu .menu__wrap");

    let aboutTop = $(".about__wrap").offset().top
    let aboutArea = aboutTop + $(".about__wrap").height();

    let skillTop = $(".skill__wrap").offset().top;
    let skillArea = skillTop + $(".skill__wrap").height();

    let certiTop = $(".certificate__wrap").offset().top;
    let certiArea = certiTop + $(".certificate__wrap").height();

    let portfolioTop = $(".portfolio__wrap").offset().top;

    let winPos = $(window).scrollTop();

    $(window).on("scroll", activeMenu);

    function activeMenu() {
        winPos = $(window).scrollTop();
        if (winPos < aboutArea) {
            addActive(0);
        } else if (winPos < skillArea) {
            addActive(1);
        } else if (winPos < certiArea) {
            addActive(2);
        } else {
            addActive(3);
        }
    }

    function addActive(index) {
        sideMenu.eq(index).addClass("on");
        sideMenu.not(sideMenu.eq(index)).removeClass("on");
    }


    sideMenu.on("click", function () {
        let idx = $(this).index();
        moveScroll(idx);
    })


    function moveScroll(idx) {
        let scrollPos;

        switch (idx) {
            case 0:
                scrollPos = aboutTop;
                break;
            case 1:
                scrollPos = skillTop;
                break;

            case 2:
                scrollPos = certiTop;
                break;

            case 3:
                scrollPos = portfolioTop;
                break;
        }

        $("html, body").stop().animate({
            scrollTop: scrollPos + "px"
        }, 500);
    }

    function init() {
        activeMenu();
    }

    init();
})