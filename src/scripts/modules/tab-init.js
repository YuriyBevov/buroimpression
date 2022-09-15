import { Tab } from "../classes/Tab";

const tabs = document.querySelectorAll('.tab');

console.log(tabs)

tabs.forEach(tab => {
  new Tab(tab);
})
