$(document).ready(function () {
  var mySwiper = new mySwiper('.swiper-container', {
    direction: 'vertical',
    loop: true,


    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
        nextE1: ".swiper-button-next",
        prevE1: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
  })
});