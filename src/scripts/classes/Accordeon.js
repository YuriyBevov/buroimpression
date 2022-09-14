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
  }

  #init() {
    this.#headers.forEach(header => {
      header.addEventListener('click', this.#onClickHandler);
    })
  }
}
