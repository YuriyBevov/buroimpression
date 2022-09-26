import {gsap} from 'gsap';
import {ScrollToPlugin} from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin);

const anchors = document.querySelectorAll('.anchor-link');

if(anchors) {

  const onClickScrollToAnchor = (evt) => {
    evt.preventDefault();
    const anchor = evt.currentTarget.dataset.scrollTo;
    const target = document.querySelector('#' + anchor);

    gsap.to(window, {duration: 1.5, scrollTo: {y: target, offsetY: 80, autoKill: true}, ease: "power0.easeNone"});
  }

  anchors.forEach(anchor => {
    anchor.addEventListener('click', onClickScrollToAnchor);
  });
}
