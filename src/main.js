// import './style.css'
import './main.scss';
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { setupMenuToggle } from '@scripts/components/function.js';
setupMenuToggle();
import { wedoToggle } from '@scripts/components/function.js';
wedoToggle();
import { initSlider } from '@scripts/components/slider.js';
initSlider('.slider-container');
initSlider('.testimonial-slider');

import { wedoTurn } from '@scripts/components/function.js';
wedoTurn();
document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
