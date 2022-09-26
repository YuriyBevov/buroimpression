import { bodyLocker } from "../utils/functions";

const images = document.querySelectorAll('.zoomable');

if(images) {
  class Modal {
    #target = null;
    #container = null;
    #img  = null;
    #closer = null;

    constructor(target) {
      this.#target = target;
      this.#container = document.querySelector('.zoom-modal');
      this.#img = this.#container.querySelector('img');
      this.#closer = this.#container.querySelector('button');
      this.#init();
    }

    #init() {
      bodyLocker(true);
      this.#container.classList.add('active');
      this.#img.setAttribute('src', this.#target.getAttribute('src'));

      this.#addEventListeners();
    }

    #closeModal() {
      this.#container.classList.remove('active');
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

  const onClickHandler = (evt) => {
    evt.stopPropagation();
    const target = evt.target;

    new Modal(target);
  }

  images.forEach(image => {
    image.addEventListener('click', onClickHandler);
  });
}
