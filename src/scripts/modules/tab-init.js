import { Tab } from "../classes/Tab";
const tabs = document.querySelectorAll('.tab');

if(tabs) {
  tabs.forEach(tab => {
    new Tab(tab);
  });
}
