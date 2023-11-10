const navLinks = document.querySelectorAll('.main-nav__list-item');

if(navLinks) {
  const onMouseOverHandler = (evt) => {
    if(evt.currentTarget.classList.contains('active')) return;

    evt.currentTarget.classList.add('active');
  }

  const onMouseOutHandler = (evt) => {
    if(!evt.currentTarget.classList.contains('active')) return;

    evt.currentTarget.classList.remove('active');
  }

  navLinks.forEach(link => {
    link.addEventListener('mouseover', onMouseOverHandler);
    link.addEventListener('mouseout', onMouseOutHandler);
  });
}
