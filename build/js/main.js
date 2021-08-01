"use strict";

var burger = document.querySelector('.menu__btn');
var burgerMenu = document.querySelector('.menu__inner');
burger.addEventListener('click', function () {
  burger.classList.toggle('menu__btn-active');
  burgerMenu.classList.toggle('menu__inner-show');
});
$(".slider").slick({
  infinite: false,
  arrows: false,
  dots: true,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 1,
      infinite: true
    }
  }, {
    breakpoint: 768,
    settings: "unslick"
  }]
});
$(window).resize(function () {
  if ($(window).width() === 768) {
    console.log('reload');
    return location.reload();
  }
});