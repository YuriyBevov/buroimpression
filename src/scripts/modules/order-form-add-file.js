import { limitStr } from "../utils/functions";
import { render } from "../utils/render";
import { OrderFormAddFileView } from "../utils/order-form-view";

let _lang = "ru";
let _count = null;
let _container = null;
let _type = null;

const maxCountrolLength = 3;

function createAddFileNode(_container, _count) {
  render(_container, OrderFormAddFileView(_type, _count, _lang));
  addEventListeners(_container);
}

function addEventListeners(_container) {
  const control = _container.querySelector('input[type="file"]:not(.active)');
  control.addEventListener('change', onChangeHandler);
}

const onClickRemoveHandler = (evt) => {
  evt.currentTarget.parentNode.remove();

  const controls = _container.querySelectorAll('input[type="file"]');
  const activeControls = _container.querySelectorAll('input[type="file"].active');

  if(!controls.length) {
    createAddFileNode(_container, _count);
  }

  if(activeControls.length === maxCountrolLength - 1) {
    createAddFileNode(_container, _count);
  }
}

const onChangeHandler = (evt) => {

  const files = [...evt.target.files];
  const opener = evt.target.nextElementSibling;
  const controls = _container.querySelectorAll('input[type="file"]');
  evt.target.classList.add('active');

  if(files.length) {
    opener.querySelector('span').textContent = `${ limitStr(files[0].name, 28) }`;
  }

  let closer = opener.nextElementSibling
  closer.addEventListener('click', onClickRemoveHandler);

  if(controls.length >= maxCountrolLength) {
    return;
  }

  _count++;
  createAddFileNode(_container, _count);
}

export default function initFileAdd(form, type, lang) {
  _count = 1;
  _type = type;
  _lang = lang;
  _container = form.querySelector('[data-field] > .order-form__field--file');

  addEventListeners(_container);
}
