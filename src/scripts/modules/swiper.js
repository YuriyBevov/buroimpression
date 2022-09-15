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

const tabs = document.querySelectorAll('.tab-header-slider');

if(tabs) {
  tabs.forEach(slider => {
    new Swiper(slider, {
      modules: [Navigation],

      slidesPerView: 'auto',
      //loop: true,
      slideToClickedSlide: true,
      //centeredSlides: true,
      //centeredSlidesBounds: true,
      watchOverflow: true,

      navigation: {
        nextEl: '.tab-header-slider-button-next',
        prevEl: '.tab-header-slider-button-prev'
      },
    })
  })
}
