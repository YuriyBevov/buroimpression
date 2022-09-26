import { gsap } from "gsap";
import {ScrollToPlugin} from 'gsap/ScrollToPlugin';

import { header } from "../utils/nodesHelper";
gsap.registerPlugin(ScrollToPlugin);

export class Accordeon {
  #container = null;
  #headers = null;

  constructor(container) {
    this.#container = container;
    this.#headers = this.#container.querySelectorAll('.accordeon-item-header');
    this.#init();
  }

  #onClickHandler = (evt) => {
    const target = evt.currentTarget;
    const body = target.parentNode;

    body.classList.contains('collapsed') ?
    body.classList.remove('collapsed') : body.classList.add('collapsed')

    gsap.to(window, {duration: 0, scrollTo: {y: target, offsetY: header.getBoundingClientRect().height}});
  }

  #init() {
    this.#headers.forEach(header => {
      header.addEventListener('click', this.#onClickHandler);
    })
  }
}
