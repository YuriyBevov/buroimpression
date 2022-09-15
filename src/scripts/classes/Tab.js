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

  #initActiveTab = (id = 1) => {
    this.#switchers.forEach(switcher => {
      if(switcher.dataset.id != id && switcher.parentNode.classList.contains('active-tab') ) {
        switcher.parentNode.classList.remove('active-tab');
      } else if (switcher.dataset.id == id && !switcher.parentNode.classList.contains('active-tab') ) {
        switcher.parentNode.classList.add('active-tab');
      }
    })

    this.#fields.forEach(field => {
      if( field.dataset.tab != id && !field.classList.contains('collapsed') ) {
        field.classList.add('collapsed');
      } else if (field.dataset.tab == id && field.classList.contains('collapsed')) {
        field.classList.remove('collapsed')
      }
    })
  };

  #onClickHandler = (evt) => {
    evt.preventDefault();

    this.#initActiveTab( evt.target.dataset.id );
  }

  #init() {
    this.#switchers.forEach(switcher => {
      switcher.addEventListener('click', this.#onClickHandler);
    })

    this.#initActiveTab();
  }
}
