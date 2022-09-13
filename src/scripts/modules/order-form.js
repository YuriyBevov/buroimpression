import { FormType } from "../utils/const";
import { render } from "../utils/render";
import { OrderFormView } from "../utils/order-form-view";
import addFile from "./add-file";

const form = document.getElementById('order-form');

if(form) {
  const options = form.querySelectorAll('.custom-select-option');
  const submitBtn = document.querySelector('.order-form__btn');

  let prevType = null;
  let currentType = null;
  let prevView = null;
  let currentView = null;

  const onClickHandler = (evt) => {
    currentType = evt.target.dataset.value;

    if(currentType === prevType) {
      return;
    };

    prevType = currentType;
    prevView = form.querySelector('[data-field]');

    if(prevView !== null) {
      prevView.remove();
    };

    if(currentType !== FormType.DEFAULT) {
      currentView = OrderFormView(currentType);

      render(form, currentView);
      addFile(form, currentType);
    };
  };

  options.forEach(option => {
    option.addEventListener('click', onClickHandler);
  });

  submitBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    console.log('SUBMIT ORDER FORM');
  })
};
