import {gsap} from 'gsap';

const logo = document.querySelector('.main-nav__logo');
const logoTopPos = logo.getBoundingClientRect().top;
const logoLeftPos = logo.getBoundingClientRect().left;


window.addEventListener('load', () => {
  gsap.to('.loader svg', {
    top: `${logoTopPos}px`,
    left: `${logoLeftPos}px`,
    opacity: 0,
    duration: .5,
    ease: 'ease-in'
  });

  gsap.to('.loader', {
    opacity: 0,
    duration: .5,
    ease: 'linear'
  });

  gsap.fromTo('body', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'linear'})

  setTimeout(() => {
    document.querySelector('.loader').classList.add('hidden');
  }, 500);
})
