$(document).ready(function () {
  var mySwiper = new Swiper('.swiper-container', {
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
/*
    navigation: {
        nextE1: ".swiper-button-next",
        prevE1: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
*/
  })
});

