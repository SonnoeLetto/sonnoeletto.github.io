$(document).ready(function() {

const burger = $('.menu__btn');
const burgerMenu = $('.menu__inner');
burger.on('click', ()=> {
    burger.toggleClass('menu__btn-active');
    burgerMenu.toggleClass('menu__inner-show');
})

$(".slider").slick({
 
    infinite: false,
    arrows: false,
    dots: true,
    responsive: 
    [

        {
   
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          infinite: true
          
        }
   
      },
      {
   
        breakpoint: 768,
        settings: "unslick"
    },
    ]
  });

  $(window).resize(() => {
      if($(window).width() === 768 && 769 && 770 && 771){
          console.log('reload') 
          return location.reload()
      }
  })
});