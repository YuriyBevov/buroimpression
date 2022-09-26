import { ImageZoom } from "../classes/ImageZoom";

const images = document.querySelectorAll('.zoomable');

if(images) {

  const onClickHandler = (evt) => {
    evt.stopPropagation();
    const target = evt.target;

    new ImageZoom(target);
  }

  images.forEach(image => {
    image.addEventListener('click', onClickHandler);
  });
}
