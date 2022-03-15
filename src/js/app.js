import * as flsFunctions from './modules/functions.js';

flsFunctions.isWebp();

// import Swiper JS
import Swiper, { Navigation } from 'swiper';
// import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';

Swiper.use([Navigation]);

const swiper = new Swiper('.blog-slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },
  breakpoints: {
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 1080px
    1080: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

const navController = document.querySelector('[data-nav-controller]');
const nav = document.querySelector('.nav');
navController.addEventListener('click', () => {
  nav.classList.toggle('active');
});
