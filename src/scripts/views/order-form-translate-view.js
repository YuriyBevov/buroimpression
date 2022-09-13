import { FormType } from '../utils/const.js';
import AbstractView from './abstract-view';
//import AddFileView from './add-file-view.js';
//import { render } from '../utils/render.js';
import { limitStr } from '../utils/functions';

const createOrderFormView = (type) => {
  if(type === FormType.TRANSLATE) {
    return `<fieldset data-field="translate">
      <div class="order-form__field">
        <input class="main-input" type="text" placeholder="Язык оригинала" id="translate_from">
      </div>
      <div class="order-form__field">
        <input class="main-input" type="text" placeholder="Язык перевода" id="translate_to">
      </div>
      <div class="order-form__field">
        <span class="order-form__field-desc">Текст для перевода</span>

        <div class="main-input-file-container">
          <input class="main-input--file main-input" type="file" id="user_translate_files">
          <label class="add-file-label" for="user_translate_files" tabindex="0">
            <svg width="16" height="16">
              <use xlink:href="./assets/sprite.svg#icon-file"></use>
            </svg><span>Прикрепить</span>
          </label>
        </div>

      </div>

      <div class="order-form__field">
        <div class="main-checkbox">
          <input type="checkbox" id="translate_notarized_translation_required" checked="">
          <label class="checkbox-label" for="translate_notarized_translation_required" tabindex="0">Требуется нотариальное заверение перевода</label>
        </div>

        <div class="main-checkbox">
          <input type="checkbox" id="office_stamp_required" checked="">
          <label class="checkbox-label" for="office_stamp_required" tabindex="0">Требуется заверение печатью бюро</label>
        </div>
      </div>

    </fieldset>`
  }

  if(type === FormType.RECLAMATION) {
    return `<fieldset data-field="reclamation">
      <div class="order-form__field">
        <input class="main-input" type="text" placeholder="Какой документ необходимо получить" id="reclamation_translate_from">
      </div>
      <div class="order-form__field">
        <input class="main-input" type="text" placeholder="Место выдачи" id="reclamation_place">
      </div>
      <div class="order-form__field">
        <span class="order-form__field-desc">Текст для перевода</span>

        <div class="main-input-file-container">
          <input class="main-input--file main-input" type="file" id="user_reclamation_files">
          <label class="addfile-label" for="user_reclamation_files" tabindex="0">
            <svg width="16" height="16">
              <use xlink:href="./assets/sprite.svg#icon-file"></use>
            </svg><span>Прикрепить</span>
          </label>
        </div>
      </div>
      <div class="order-form__field">
        <div class="main-checkbox">
          <input type="checkbox" id="reclamation_notarized_translation_required" checked="">
          <label class="checkbox-label" for="reclamation_notarized_translation_required" tabindex="0">Требуется нотариальное заверение перевода</label>
        </div>
      </div>
    </fieldset>`
  }

  if(type === FormType.APOSTIL) {
    return `<fieldset data-field="apostil">
      <div class="order-form__field">
        <input class="main-input" type="text" placeholder="Страна, для которой легализуются документы" id="apostil_country_for">
      </div>
      <div class="order-form__field">
        <input class="main-input" type="text" placeholder="Вид документа" id="apostil_document_type">
      </div>
      <div class="order-form__field">
        <span class="order-form__field-desc">Копии документа(ов)</span>
        <div class="main-input-file-container">
          <input class="main-input--file main-input" type="file" id="user_apostil_files">
          <label class="addfile-label" for="user_apostil_files" tabindex="0">
            <svg width="16" height="16">
              <use xlink:href="./assets/sprite.svg#icon-file"></use>
            </svg><span>Прикрепить</span>
          </label>
        </div>
      </div>
      <div class="order-form__field">
        <div class="main-checkbox">
          <input type="checkbox" id="apostil_is_original" checked="">
          <label class="checkbox-label" for="apostil_is_original" tabindex="0">Легализуются оригиналы ?</label>
        </div>
        <div class="main-checkbox">
          <input type="checkbox" id="apostil_translation_required" checked="">
          <label class="checkbox-label" for="apostil_translation_required" tabindex="0">Требуется ли перевод?</label>
        </div>
        <input class="main-input" type="text" placeholder="Язык перевода" id="apostil_translation_lang">
      </div>
    </fieldset>`
  }

  if(type === FormType.LEGALIZATION) {
    return `<fieldset data-field="legalization">
      <div class="order-form__field">
        <input class="main-input" type="text" placeholder="Страна, для которой легализуются документы" id="legalization_country_for">
      </div>
      <div class="order-form__field">
        <input class="main-input" type="text" placeholder="Вид документа" id="legalization_document_type">
      </div>
      <div class="order-form__field">
        <span class="order-form__field-desc">Копии документа(ов)</span>

        <div class="main-input-file-container">
          <input class="main-input--file main-input" type="file" id="user_legalization_files">
          <label class="addfile-label" for="user_legalization_files" tabindex="0">
            <svg width="16" height="16">
              <use xlink:href="./assets/sprite.svg#icon-file"></use>
            </svg><span>Прикрепить</span>
          </label>
        </div>
      </div>
      <div class="order-form__field">
        <div class="main-checkbox">
          <input type="checkbox" id="legalization_is_original" checked="">
          <label class="checkbox-label" for="legalization_is_original" tabindex="0">Легализуются оригиналы ?</label>
        </div>

        <div class="main-checkbox">
          <input type="checkbox" id="legalization_translation_required" checked="">
          <label class="checkbox-label" for="legalization_translation_required" tabindex="0">Требуется ли перевод?</label>
        </div>

        <input class="main-input" type="text" placeholder="Язык перевода" id="legalization_translation_lang">
      </div>
    </fieldset>`
  }
}

export default class OrderFormView extends AbstractView {
  #currentFormType = null;

  constructor(currentFormType) {
    super();
    this.#currentFormType = currentFormType;
  }

  get template() {
    return createOrderFormView(this.#currentFormType);
  }

  setAddFileHandler = () => {
    const opener = this.element.querySelector('.add-file-label');
    console.log(opener)
    opener.addEventListener('click', this.#addFileHandler);
  }

  #addFileHandler = (evt) => {
    console.log(evt.currentTarget);

    //загрузить файл
    //показать название
    //показать кнопку удаления
    //повесить обработчик на удаление файла
    //показать новую кнопку добавления, при условии что их не больше пяти
    //повесить обработчик на кнопку добавления


  }

  /*setAddFileHandler = (callback) => {
    //this._callback.addFile = callback;
    const openers = this.element.querySelectorAll('.addfile-label');
    const containers = document.querySelectorAll('.main-input-file-container');

    openers.forEach(( opener, i ) => {
      const control = opener.previousElementSibling;

      control.addEventListener('change', (evt) => {
        const files = [...evt.target.files];

        opener.querySelector('span').textContent = ` ${ limitStr(files[0].name, 20) } `;

        if( i + 1 !== containers.length ) {
          containers[i+1].classList.remove('hidden');
        }
      });
    })
  }*/
}
