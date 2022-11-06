import { gsap } from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const section = document.querySelector('.hero');

if(section) {
  const service = document.querySelector('.service');
  const stepList = document.querySelector('.ordinal-list ul');
  const infoBanner = document.querySelector('.info-banner');

  window.addEventListener('load', () => {

    if(service) {
      const items = document.querySelectorAll('.service__list-item');

      items.forEach((item,i) => {
        gsap.fromTo(item, {opacity: 0, y: 100 }, {
          scrollTrigger: item,
          opacity: 1,
          y: 0,
          duration: .6,
          delay: 0.35,
        });
      });
    }

    if(infoBanner) {
      const infoBannerTL = gsap.timeline({
        scrollTrigger: {
          trigger: infoBanner,
          start: "top bottom",
          onLeaveBack: () => infoBannerTL.reverse() }
      });

      infoBannerTL.fromTo(infoBanner, {opacity: 0, scale: 0}, {
        opacity: 1,
        duration: 1,
        scale: 1
      });
    }

    if(stepList) {
      const stepListTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".ordinal-list ul",
          start: "top bottom",
          onLeaveBack: () => stepListTl.reverse() }
      });

      stepListTl.fromTo('.ordinal-list ul > li', {opacity: 0, x: 150}, {
        opacity: 1,
        duration: 0.6,
        x: 0,
        stagger: 0.25
      });
    }
  });
}
