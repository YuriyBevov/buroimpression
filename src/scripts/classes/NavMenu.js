import { debounce, setDebounce } from "../modules/debounce";
import { burgerLinesAnimationIn, burgerLinesAnimationOut } from "../modules/burgerAnimation";
import { focusTrap, bodyLocker } from "../utils/functions";
import {gsap} from 'gsap';

export class NavMenu {
  #container = null;
  #opener = null;
  #openNavTl = gsap.timeline({ onComplete: () => { this.#debounce = false; } });
  #closeNavTl = gsap.timeline({ onComplete: () => { this.#debounce = false; this.#isNavOpened = false; } });
  #isNavOpened = false;
  #debounce = false;

  constructor( container, opener ) {
    this.#container = container;
    this.#opener = opener;

    this.#init();
  }

  #openNav = () => {
    console.log('DEBOUNCE:', this.#debounce);

    if(!this.#debounce) {
      this.#debounce = true;
      this.#isNavOpened = true;

      gsap.set(this.#container, {opacity: 0, display: 'block'});

      burgerLinesAnimationIn();
      bodyLocker(true);
      focusTrap(this.#container);
      this.#addListeners();

      this.#openNavTl
        .to(this.#container, {
          opacity: 1,
          duration: 0.7
        })
        .fromTo('.main-nav__list', {x: '100vw'}, {
          x: 0,
          duration: 0.7,
          ease: 'power2'
        }, "-=0.5")
        .fromTo('.main-nav__list-item', {
          y: 50,
          opacity: 0
        }, {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.2,
          ease: 'ease-in'
        }, "-=0.3");
    }
  }

  #closeNav = () => {
    console.log('DEBOUNCE:', this.#debounce);

    if(!this.#debounce) {
      this.#debounce = true;

      burgerLinesAnimationOut();
      bodyLocker(false);
      this.#removeListeners();

      this.#closeNavTl
        .to(this.#container, {
          opacity: 0,
          duration: 0.7
        })
        .to(this.#container, {
          display: 'none',
          delay: .1
        });
    }
  }

  #removeListeners = () => {
    document.removeEventListener('keydown', this.#onKeyPressHandler);
    document.removeEventListener('click', this.#onOverlayClickHandler);
  }

  #addListeners = () => {
    document.addEventListener('keydown', this.#onKeyPressHandler);
    document.addEventListener('click', this.#onOverlayClickHandler);
  }

  #onClickHandler = () => {
    if(!this.#isNavOpened) {
      this.#openNav();
    } else if(this.#isNavOpened){
      this.#closeNav();
    }
  }

  #onOverlayClickHandler = (evt) => {
    if(evt.target === this.#container) {
      this.#closeNav();
    }
  }

  #onKeyPressHandler = (evt) => {
    if(evt.key === 'Esc' || evt.key === 'Escape') {
      this.#closeNav();
    }
  }

  #init() {
    this.#opener.addEventListener('click', this.#onClickHandler);
  }
}
