import { FormType } from '../utils/const.js';
import AbstractView from './abstract-view';
import { limitStr } from '../utils/functions';

const createAddFileView = (id) => (
  `<div class="main-input-file-container">

    <input class="main-input--file main-input" type="file" id=${id} multiple="">
    <label class="addfile-label" for=${id} tabindex="0">
      <svg width="16" height="16">
        <use xlink:href="./assets/sprite.svg#icon-file"></use>
      </svg><span>Прикрепить еще</span>
    </label>
  </div>`
)

export default class AddFileView extends AbstractView {
  #id = null;

  constructor(id) {
    super();
    this.#id = id;
  }

  get template() {
    console.log(this.#id)
    return createAddFileView(this.#id);
  }

  /*setAddFileHandler = (callback) => {
    this._callback.addFile = callback;
    this.element.querySelector('.addfile-label').addEventListener('click', this.#addFileHandler);
  }

  //вся логика должна быть в презентере this._callback.addFile();
  #addFileHandler = (evt) => {
    const opener = evt.currentTarget;
    const control = this.element.querySelector('input[type="file"]');

    control.addEventListener('change', (evt) => {
      const files = [...evt.target.files];
      const count = [...evt.target.files].length;

      opener.querySelector('span').textContent = ` ${ limitStr(files[0].name, 20)} ${count - 1 > 0 ? 'и еще ' + (count - 1) : ''}`;
    });
  }*/
}
