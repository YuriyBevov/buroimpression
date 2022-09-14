import { Accordeon } from "../classes/Accordeon";

const accordeons = document.querySelectorAll('.accordeon');

if(accordeons) {
  accordeons.forEach( acc => new Accordeon(acc) );
}
