jQuery(document).ready(function(){
    $(".slider").slick({
        autoplay: false,
        autoplaySpeed: 1000,
        dots: true,
        prevArrow: "<span><button class='slick-prev'><img src='/src/assets/img/arrow-left.png' alt='Previous'></button></span>",
        nextArrow: "<span class='right-arrow'><button class='slick-prev'><img src='/src/assets/img/arrow-right.png' alt='Previous'></button></span>"
    })
})