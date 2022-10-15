import { header, footer } from "../utils/nodesHelper";

let headerHeight = header.getBoundingClientRect().height;
let footerHeight = footer.getBoundingClientRect().height;
const notFound = document.querySelector('.not-found');

notFound.style.height = `calc(100vh - ${headerHeight + footerHeight}px)`;

window.addEventListener('resize', () => {
  if(headerHeight !== header.getBoundingClientRect().height || footerHeight !== footer.getBoundingClientRect().height) {
    headerHeight = header.getBoundingClientRect().height;
    footerHeight = footer.getBoundingClientRect().height;

    notFound.style.height = `calc(100vh - ${headerHeight + footerHeight}px)`;
  }
});
