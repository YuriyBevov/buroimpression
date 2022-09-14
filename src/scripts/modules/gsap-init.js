import {gsap} from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {ScrollSmoother} from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollTrigger.config({ ignoreMobileResize: true });

let smoothScroller = ScrollSmoother.create({
  smooth: 2.5,
  //effects: true
});


/*gsap.fromTo('.hero__content h1', {
  opacity: 0,
  y: 150,
}, {
  opacity: 1,
  y: 0,
  duration: 1,
  delay: 0.4,
  ease: 'ease-in'
})

gsap.fromTo('.hero__content h1 > span', {
  x: 300,
  opacity: 0,
}, {
  x: 0,
  opacity: 1,
  duration: 1,
  delay: 1,
  ease: 'ease-in'
});

gsap.fromTo('.hero__content p', {
  opacity: 0,
}, {
  opacity: 1,
  duration: 1,
  delay: 1.2,
  ease: 'ease-in'
})

gsap.fromTo('.hero__content a', {
  opacity: 0,
}, {
  opacity: 1,
  duration: 1,
  delay: 1.4,
  ease: 'ease-in'
})*/
