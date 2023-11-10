import { bodyLocker } from "../utils/functions";

const opener = document.querySelector('.burger');

if(opener) {
  const menu = document.querySelector('.main-menu');
  const closer = document.querySelector('.main-nav__closer');
  if(menu) {
    const addListeners = () => {
      opener.removeEventListener('click', onClickOpenMenuHandler);
      closer.addEventListener('click', onClickCloseMenuHandler);
      window.addEventListener('click', onOverlayClickCloseMenuHandler);
      window.addEventListener('keyup', onEscClickCloseMenuHandler)
    }

    const menuClose = () => {
      menu.classList.remove('active');
      closer.removeEventListener('click', onClickCloseMenuHandler);
      opener.addEventListener('click', onClickOpenMenuHandler);
      bodyLocker(false);
    }

    const onClickOpenMenuHandler = () => {
      bodyLocker(true);
      menu.classList.add('active');
      addListeners();
    }

    const onClickCloseMenuHandler = () => {
      menuClose();
    }

    const onOverlayClickCloseMenuHandler = (evt) => {
      if(evt.target === menu) {
        menuClose();
      }
    }

    const onEscClickCloseMenuHandler = (evt) => {
      if(evt.key === 27 || evt.key === 'Escape') {
        menuClose();
      }
    }

    opener.addEventListener('click', onClickOpenMenuHandler);
  }
}


//submenu

const collapseBtns = document.querySelectorAll('.main-nav__list-item.has-inner a>svg');

if(collapseBtns) {
  const onClickToggleSubMenuHandler = (evt) => {
    evt.preventDefault();

    evt.currentTarget.parentNode.classList.toggle('active');
    evt.currentTarget.parentNode.nextElementSibling.classList.toggle('active');
  }

  collapseBtns.forEach(btn => {
    btn.addEventListener('click', onClickToggleSubMenuHandler);
  });
}
