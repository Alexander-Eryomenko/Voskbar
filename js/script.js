$(document).ready(function(){
  $('.promo__slider').slick({
    pauseOnFocus: false,
    pauseOnHover: false,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    prevArrow: false,
    nextArrow: false,
    dots: false,
    fade: true,
    speed: 2000,
  });
});
$(document).ready(function(){
  $('.masters__slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    fade: true,
    speed: 2000,
    prevArrow: false,
    nextArrow: false,
  });
});

new WOW().init()

const btn = document.querySelector('.hamburger')
const overlay = document.querySelector('.overlay')
const menu = document.querySelector('.menu')
const btnClose = document.querySelector('.btn-close')

btn.addEventListener('click', (event) => {
  overlay.classList.add('active')
  menu.classList.add('active')
})

// btnClose.addEventListener('click', (event) => {
//   overlay.classList.remove('active')
//   menu.classList.remove('active')
// })

overlay.addEventListener('click', (event) => {
  overlay.classList.remove('active')
  menu.classList.remove('active')
})
