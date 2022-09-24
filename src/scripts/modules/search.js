import { gsap } from 'gsap';

const input = document.querySelector('#search-field');

if(input) {
  const empty = document.querySelector('.search__list span');

  function hideLink(index, bool = false) {
    if(bool) {
      links[index].classList.contains('hidden') ?
      links[index].classList.remove('hidden') : null;

      !empty.classList.contains('hidden') ?
      empty.classList.add('hidden') : null;
    } else {
      !links[index].classList.contains('hidden') ?
      links[index].classList.add('hidden') : null;

      const hidden = document.querySelectorAll('.search__list a.hidden');

      if(hidden.length === links.length) {
        empty.classList.remove('hidden');
      }
    }
  }

  const links = document.querySelectorAll('.search__list a');
  let words = [];

  links.forEach(link => {
    words.push(link.textContent.toLowerCase().trim());
  });

  input.addEventListener('input', () => {
    let value = input.value.trim();
    words.forEach((w,i) => {
      if(w.includes(value)) {
        hideLink(i, true);
      } else {
        hideLink(i);
      }
    });
  })
}
