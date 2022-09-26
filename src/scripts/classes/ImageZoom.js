import { bodyLocker } from "../utils/functions";
import { gsap } from 'gsap';

export class ImageZoom {
  #target = null;
  #container = null;
  #img  = null;
  #closer = null;

  constructor(target) {
    this.#target = target;
    this.#container = document.querySelector('.zoom-popup');
    this.#img = this.#container.querySelector('img');
    this.#closer = this.#container.querySelector('button');
    this.#openModal();
  }

  #openModal() {
    bodyLocker(true);
    gsap.set(this.#container, {opacity: 0, display: 'block'});

    gsap.to(this.#container, {
      opacity: 1,
      duration: 0.8,
      ease: 'ease-in'
    });

    this.#img.setAttribute('src', this.#target.getAttribute('src'));

    this.#addEventListeners();
  }

  #closeModal() {
    gsap.to(this.#container, {
      opacity: 0,
      duration: 0.8,
      ease: 'ease-out',
      onComplete: () => {
        gsap.set(this.#container, {display: 'none'});
      }
    });
    this.#removeListeners();
    bodyLocker(false);
  }

  #addEventListeners = () => {
    this.#closer.addEventListener('click', this.#onClickCloseHandler);
    document.addEventListener('click', this.#onOverlayClickHandler);
    document.addEventListener('keydown', this.#onKeypressHandler);
  }

  #removeListeners = () => {
    this.#closer.removeEventListener('click', this.#onClickCloseHandler);
    document.removeEventListener('click', this.#onOverlayClickHandler);
    document.removeEventListener('keydown', this.#onKeypressHandler);
  }

  #onClickCloseHandler = () => {
    this.#closeModal();
  }

  #onOverlayClickHandler = (evt) => {
    if(evt.target === this.#container) {
      this.#closeModal();
    }
  }

  #onKeypressHandler = (evt) => {
    if(evt.key === 'Esc' || evt.key === 'Escape') {
      this.#closeModal();
    }
  }
}
