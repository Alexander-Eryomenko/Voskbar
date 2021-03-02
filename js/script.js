// Слайдер акции

$(document).ready(function(){
  $('.promo__slider, .masters__slider').slick({
    arrows: true,
    dots: true,
    speed: 1000,
    pauseOnFocus: true,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 3000,

    responsive: [
      {
      breakpoint: 770,
      settings: {
      }
    }, 
    {
      breakpoint: 576,
      settings: {
        arrows: false,
      }
    },]
  });
});


// wow js

new WOW().init()

const btn = document.querySelector('.hamburger')
const overlay = document.querySelector('.overlay')
const menu = document.querySelector('.menu')
const btnClose = document.querySelector('.btn-close')

btn.addEventListener('click', (event) => {
  overlay.classList.add('active')
  menu.classList.add('active')
})


overlay.addEventListener('click', (event) => {
  overlay.classList.remove('active')
  menu.classList.remove('active')
})
