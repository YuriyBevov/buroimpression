import Swiper, { Navigation, Pagination } from 'swiper';

const sliders = document.querySelectorAll('.main-slider');

if(sliders) {
  sliders.forEach(slider => {
    const btnNext = slider.closest('section').querySelector('.main-slider-button-next');
    const btnPrev = slider.closest('section').querySelector('.main-slider-button-prev');
    const pagination = slider.parentNode.querySelector('.main-slider-pagination');

    new Swiper(slider, {
      modules: [Navigation, Pagination],

      slidesPerView: 'auto',
      spaceBetween: 40,
      preloadImages: true,

      slidesOffsetAfter: 15,
      slidesOffsetBefore: 15,

      navigation: {
        nextEl: btnNext ? btnNext : null,
        prevEl: btnPrev ? btnPrev : null,
      },

      pagination: {
        el: pagination ? pagination : null,
        type: 'bullets',
        dynamicBullets: true,
        dynamicMainBullets: 5,
        clickable: true
      },

      breakpoints: {
        635: {
          slidesOffsetAfter: 30,
          slidesOffsetBefore: 30,
        }
      }
    });
  });
};

const serviceSlider = document.querySelector('.service-slider');

if(serviceSlider) {
  new Swiper(serviceSlider, {
    modules: [Navigation, Pagination],

    slidesPerView: 'auto',
    spaceBetween: 25,
    preloadImages: true,

    navigation: {
      nextEl: '.service-slider-button-next',
      prevEl: '.service-slider-button-prev',
    },
  });
}
