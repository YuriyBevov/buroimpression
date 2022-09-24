import { NavMenu } from '../classes/NavMenu';

const nav = document.querySelector('.main-nav');
const burger = document.querySelector('.burger');

if(nav && burger) {
  new NavMenu(nav, burger);
}

//focus-trap
//listeners
//body-locker
//animations



/*const nav = document.querySelector('.main-nav');

const tl = gsap.timeline();
let debounce = false;

export function showNav(nav, burger) {
  debounce = true;

  gsap.set(nav, {
    display: 'block',
    opacity: 0
  })

  nav.blur();

  gsap
    .to(nav,{
      opacity: 1,
      duration: 1
    })

  setTimeout(() => {
    debounce = false;
  }, 1200);
}

export function hideNav(nav, burger) {
  debounce = true;

  gsap.to(nav,{
    opacity: 0,
    duration: 1
  })

  setTimeout(() => {
    gsap.set(nav, {
      display: 'none',
    });
    debounce = false;
  }, 1200);
}

if(nav) {
  const burger = document.querySelector('.burger');

  const onClickHandler = (evt) => {
    evt.preventDefault();

    burger.classList.contains('opened') ?
    burger.classList.remove('opened') : burger.classList.add('opened');
    console.log(debounce)
    if(burger.classList.contains('opened') && !debounce) {

      showNav(nav, burger);

    } else if(!burger.classList.contains('opened') && !debounce){
      hideNav(nav, burger);
    }

  }

  burger.addEventListener('click', onClickHandler);
}*/
