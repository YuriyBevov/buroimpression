import { formValidation } from "./form/formValidation";
import { FormType } from "../utils/const";
import { render } from "../utils/render";
import { OrderFormView } from "../utils/order-form-view";
import initFileAdd from "./order-form-add-file";

const form = document.getElementById('order-form');

if(form) {
  const options = form.querySelectorAll('.custom-select-option');
  const submitBtn = document.querySelector('.order-form__btn');

  let _prevType = null;
  let _currentType = null;
  let _prevView = null;
  let _currentView = null;

  const initAddictFields = (form) => {
    const controls = form.querySelectorAll('input[data-addict]');
    if(controls.length) {
      controls.forEach(control => {
        control.addEventListener('change', () => {
          const field = form.querySelector(`#${control.dataset.addict}`);

          !control.checked ?
            field.setAttribute('disabled', true):
            field.removeAttribute('disabled');
        });
      });
    }
  }

  const onClickHandler = (evt) => {
    _currentType = evt.target.dataset.value;

    _prevType = _currentType;
    _prevView = form.querySelector('[data-field]');

    if(_prevView !== null) {
      _prevView.remove();
    };

    if(_currentType !== FormType.DEFAULT) {

      _currentView = OrderFormView(_currentType);

      render(form, _currentView);
      initAddictFields(form);
      initFileAdd(form, _currentType);
    };
  };

  options.forEach(option => {
    option.addEventListener('click', onClickHandler);
  });

  submitBtn.addEventListener('click', (evt) => {
    evt.preventDefault();

    form.querySelectorAll('input[type="checkbox"]').forEach(control => {
      if(control.value === 'on') control.value = 'Да';
    })
    formValidation(form);
  })
};
