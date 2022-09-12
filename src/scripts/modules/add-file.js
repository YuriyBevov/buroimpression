import { limitStr } from "../utils/functions";
import { orderForm } from "../utils/nodesHelper";

if(orderForm) {
  const fileOpener = orderForm.querySelector('.addfile-label');
  const control = orderForm.querySelector('input[type="file"]');

  /*function createOpener() {

    const fileOpenerView = (
      `<div><input class="main-input--file main-input" type="file" id="user_files" multiple>
        <label class="addfile-label" for="user_translation_file" tabindex="0">
          <svg width="16" height="16">
            <use xlink:href="./assets/sprite.svg#icon-file"></use>
          </svg>
          <span>Прикрепить еще</span>
        </label></div>`
    );

    const createElement = (template) => {
      const newElement = document.createElement('div');
      newElement.innerHTML = template;
      console.log(newElement)
      return newElement.firstChild;
    };

    fileOpener.parentNode.append(createElement(fileOpenerView));
  }*/

  control.addEventListener('change', (evt) => {
    const files = [...evt.target.files];
    const count = [...evt.target.files].length;

    fileOpener.querySelector('span').textContent = ` ${ limitStr(files[0].name, 20)} ${count - 1 > 0 ? 'и еще ' + (count - 1) : ''}` ;
  })
}
