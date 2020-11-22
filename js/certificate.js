$(function () {
    const list = $(".certificate__list");
    const listPrev = $(".certificate__list .arrows__prev");
    const listNext = $(".certificate__list .arrows__next");
    const progressBar = $(".certificate__progress .bar");
    let progressBarWidth = $(".certificate__progress").width();
    let potion;

    list.slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        fade: false,
        cssEase: 'linear',
        slide: ".items",
        customPaging: function (s, c) {
            potion = parseInt(s.slideCount);
        }
    })

    progressBar.css({
        width: (progressBarWidth / potion) + "px"
    })

    list.on("afterChange", function (e, s, c) {
        progressBar.css({
            width: (progressBarWidth / potion) * (c + 1) + "px"
        })
    })

    


    listPrev.on("click", function () {
        list.slick("slickPrev");
    })

    listNext.on("click", function () {
        list.slick("slickNext");
    })

    const popup = $(".dim, .certificate__popup");
    const popupClose = $(".dim, .certificate__popup>.popup__close");

    list.find(".items").on("click", function(){
        let imgSrc = $(this).attr("data-img");
        
        $(".certificate__popup>img").attr("src", imgSrc);

        popup.show().stop().animate({
            opacity: 1
        }, 250);
    })

    popupClose.on("click", function(){
        popup.stop().animate({
            opacity: 0
        }, 250, function(){
            $(this).hide();
        });
    })
})