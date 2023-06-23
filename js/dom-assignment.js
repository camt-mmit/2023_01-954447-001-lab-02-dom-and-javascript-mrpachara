import { createComponent } from './section-component.js';

const tmpInput = document.querySelector('template#app-tmp-input');
const tmpSection = document.querySelector('template#app-tmp-section');

const sectionComponent = document.body;

createComponent(sectionComponent, tmpSection, tmpInput);
