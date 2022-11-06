import { FormType } from "./const";
import { cstSel } from "../modules/custom-select";

const RenderPosition = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend',
};

const createElement = (template) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;

  return newElement.firstElementChild;
};

const render = (container, template, place = 'beforeend') => {
  const child = createElement(template);

  switch (place) {
    case RenderPosition.BEFOREBEGIN:
      container.before(child);
      break;
    case RenderPosition.AFTERBEGIN:
      container.prepend(child);
      break;
    case RenderPosition.BEFOREEND:
      container.append(child);
      break;
    case RenderPosition.AFTEREND:
      container.after(child);
      break;
  }
};

const refresh = (container) => {

  const current = container.querySelector('[data-field]');
  if(current && current.dataset.field !== FormType.DEFAULT) {
    current.remove();
    cstSel[0].value = 'callback';
  }
}


export {RenderPosition, createElement, render, refresh };
