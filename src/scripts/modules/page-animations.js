import { gsap } from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const section = document.querySelector('.hero');

if(section) {
  //const feature = document.querySelector('.feature');
  const service = document.querySelector('.service');
  const order = document.querySelector('.order');
  const stepList = document.querySelector('.order-step-list');
  const apostille = document.querySelector('.apostille-info');

  window.addEventListener('load', () => {

    /*if(feature) {
      const items = document.querySelectorAll('.feature__list-item p');

      items.forEach((item,i) => {
        gsap.fromTo(item, {opacity: 0, y: 50 }, {
          scrollTrigger: item,
          opacity: 1,
          y: 0,
          duration: .6,
          delay: 0.35,
        });
      });
    }*/

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

    /*if(order) {
      const orderTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".order",
          start: "top bottom",
          onLeaveBack: () => orderTl.reverse() }
      });

      orderTl.fromTo('.order-form', {opacity: 0}, {
        opacity: 1,
        duration: 1
      });
    }*/

    if(apostille) {
      const apostilleTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".apostille-info__banner",
          start: "top bottom",
          onLeaveBack: () => apostilleTl.reverse() }
      });

      apostilleTl.fromTo('.apostille-info__banner', {opacity: 0, scale: 0}, {
        opacity: 1,
        duration: 1,
        scale: 1
      });
    }

    if(stepList) {
      const stepListTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".order-step-list",
          start: "top bottom",
          onLeaveBack: () => stepListTl.reverse() }
      });

      stepListTl.fromTo('.order-step-list li', {opacity: 0, x: 150}, {
        opacity: 1,
        duration: 0.6,
        x: 0,
        stagger: 0.25
      });
    }

  });
}
