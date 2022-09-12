const form = document.getElementById('order-form');

if(form) {
  const options = form.querySelectorAll('.custom-select-option');
  const hidden = form.querySelectorAll('fieldset.hidden');

  let type = null;

  const onClickHandler = (evt) => {
    current = evt.target.dataset.value;

    if(current === type) {
      return;
    }

    type = current;

    hidden.forEach(el => {
      !el.classList.contains('hidden') ?
      el.classList.add('hidden') : null;

      if(el.dataset.field === type) {
        el.classList.contains('hidden') ?
        el.classList.remove('hidden') : null;
      }
    });
  }

  options.forEach(option => {
    option.addEventListener('click', onClickHandler);
  });
};
