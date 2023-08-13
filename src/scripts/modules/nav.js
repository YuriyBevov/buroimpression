//import { NavMenu } from '../classes/NavMenu';
/*if(nav && burger) {
  new NavMenu(nav, burger, closer);
}*/

/*const nav = document.querySelector('.main-nav');
const opener = document.querySelector('.nav-opener');*/

const nav = document.querySelector('.main-nav');
const burger = document.querySelector('.burger');
const closer = document.querySelector('.nav-closer');

let current = null;

const removeListeners = () => {
  closer.removeEventListener('click', closeNav);
  document.removeEventListener('keydown', onKeyPressHandler);
  document.removeEventListener('click', onOverlayClickHandler);

  if(backBtn.classList.contains('active')) {
    backBtn.classList.remove('active');
  }

  if(current !== null) {
    current.classList.remove('active');
    current = null;
  }

  burger.addEventListener('click', onClickOpenNav);
}

const addListeners = () => {
  closer.addEventListener('click', closeNav);
  document.addEventListener('keydown', onKeyPressHandler);
  document.addEventListener('click', onOverlayClickHandler);
}

const onClickOpenNav = () => {
  burger.removeEventListener('click', onClickOpenNav);
  nav.classList.add('active');

  addListeners();
}

const onOverlayClickHandler = (evt) => {
  if(evt.target === nav) {
    closeNav();
  }
}

const onKeyPressHandler = (evt) => {
  if(evt.key === 'Esc' || evt.key === 'Escape') {
    closeNav();
  }
}

const closeNav = () => {
  nav.classList.remove('active');
  removeListeners();
}

burger.addEventListener('click', onClickOpenNav);

const parents = document.querySelectorAll('.main-nav__list-item.has-inner');
const backBtn = document.querySelector('.main-nav__back-btn');

if(parents) {

  const onClickSetActiveParent = (evt) => {
    parents.forEach(parent => {
      parent.classList.contains('active') ? parent.classList.remove('active') : null;
    });

    evt.currentTarget.classList.add('active');
    current = evt.currentTarget;
    backBtn.classList.add('active');
  }

  parents.forEach(parent => {
    parent.addEventListener('click', onClickSetActiveParent)
  });

  backBtn.addEventListener('click', () => {
    backBtn.classList.remove('active');
    current.classList.remove('active');
  });
}
