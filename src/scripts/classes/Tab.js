import { gsap } from "gsap";
import {ScrollToPlugin} from 'gsap/ScrollToPlugin';
import { header, tabSwitchers } from "../utils/nodesHelper";

gsap.registerPlugin(ScrollToPlugin);

export class Tab {
  #container = null;
  #switchers = null;
  #fields = null;

  constructor(container) {
    this.#container = container;
    this.#switchers = this.#container.querySelectorAll('.tab-switcher');
    this.#fields = this.#container.querySelectorAll('.tab-content-field');
    this.#init();
  }

  #initActiveTab = (id = 1, preload = true) => {
    this.#switchers.forEach(switcher => {
      if(switcher.dataset.id != id && switcher.classList.contains('active-tab') ) {
        switcher.classList.remove('active-tab');
      } else if (switcher.dataset.id == id && !switcher.classList.contains('active-tab') ) {
        switcher.classList.add('active-tab');
      }
    })

    this.#fields.forEach(field => {
      if( field.dataset.tab != id && !field.classList.contains('collapsed') ) {
        field.classList.add('collapsed');
      } else if (field.dataset.tab == id && field.classList.contains('collapsed')) {
        field.classList.remove('collapsed');

        if(!preload) {
          if(window.innerWidth > 768) {
            gsap.to(window, {duration: 0, scrollTo: {y: field, offsetY: header.getBoundingClientRect().height}});
          } else {
            gsap.to(window, {duration: 0, scrollTo: {y: field, offsetY: header.getBoundingClientRect().height + tabSwitchers.getBoundingClientRect().height }});
          }
        }
      }
    });
  };

  #onClickHandler = (evt) => {
    evt.preventDefault();

    this.#initActiveTab( evt.target.dataset.id, false );
  }

  #init() {
    this.#switchers.forEach(switcher => {
      switcher.addEventListener('click', this.#onClickHandler);
    })

    this.#initActiveTab();
  }
}
