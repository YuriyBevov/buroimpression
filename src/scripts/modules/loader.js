import {gsap} from 'gsap';
import { bodyLocker } from '../utils/functions';

const logo = document.querySelector('.main-logo');
const logoTopPos = logo.getBoundingClientRect().top;
const logoLeftPos = logo.getBoundingClientRect().left;

bodyLocker(true);

window.addEventListener('load', () => {
  bodyLocker(false);

  const tl = gsap.timeline({onComplete: () => {
    gsap.to('.loader', {
      display: 'none',
      duration: 0
    });

    gsap.to('.loader svg', {
      top: '50%',
      left: '50%',
      duration: 0
    });

    gsap.to('.page-overlay', {
      display: 'none',
      duration: 0
    });
  }});

  tl
    .to('.loader svg', {
      top: `${logoTopPos}px`,
      left: `${logoLeftPos}px`,
      opacity: 0,
      duration: .7,
      ease: 'ease-in'
    })
    .to('.page-overlay', {
      opacity: 0,
      duration: 1.2
    }, "-=.2");
});
