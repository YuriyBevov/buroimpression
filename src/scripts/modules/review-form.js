import { formValidation } from "./form/formValidation";

const form = document.getElementById('review-form');

const onClickSendForm = (evt) => {
  evt.preventDefault();
  formValidation(form);
}

if(form) {
  const submit = form.querySelector('[type="submit"]');
  submit.addEventListener('click', onClickSendForm);
}
