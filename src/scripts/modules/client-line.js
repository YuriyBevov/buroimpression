import {gsap} from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {ScrollSmoother} from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const section = document.querySelector('.client');

if(section) {
  const clients = section.querySelector(".client__list");

  let width = clients.getBoundingClientRect().width;
  let windowWidth = window.innerWidth;
  let to = `${windowWidth - width}px`;
  let tl = gsap.timeline();

  tl.fromTo(clients, {x: '0'}, timelineOptions(to));

  function timelineOptions(to) {
    return {
      repeat: -1,
      repeatDelay: 2,
      x: to,
      ease: 'linear',
      yoyo: true,
      duration: 10,
    }
  }

  window.addEventListener('resize', () => {
    width = clients.getBoundingClientRect().width;
    windowWidth = window.innerWidth;
    to = `${windowWidth - width}px`;

    tl.kill();
    tl = null;
    tl = gsap.timeline();

    tl.fromTo(clients, {x: '0'}, timelineOptions(to));
  });
};
