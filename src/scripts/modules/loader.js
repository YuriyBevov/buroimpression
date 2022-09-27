import {gsap} from 'gsap';
import { bodyLocker } from '../utils/functions';

const logo = document.querySelector('.main-logo');
const logoTopPos = logo.getBoundingClientRect().top;
const logoLeftPos = logo.getBoundingClientRect().left;
bodyLocker(true);
window.addEventListener('load', () => {
  bodyLocker(false);
  let tl = gsap.timeline();

  tl
    .to('.loader svg', {
      top: `${logoTopPos}px`,
      left: `${logoLeftPos}px`,
      opacity: 0,
      duration: .6,
      ease: 'ease-in'
    })
    .to('.loader', {
      opacity: 0,
      duration: .6,
      ease: 'linear',
    })
    .to('.loader', {
      display: 'none'
    });
})
