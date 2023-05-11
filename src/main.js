import './style.css'
import javascriptLogo from './public/javascript.svg'
import viteLogo from './public/vite.svg'
import { setupCounter } from './components/counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
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

/*** archivo src/for-anidados.js ***/
for (let i = 0; i < 3; i++) {
  console.log(i);
  let log = '';
  for (let i = 0; i < 3; i++) {
      log = i;
      console.log(log);
  };
};

for (let i of [1, 2, 3, 4, 5]) {
  console.log(i);
}

async function asincronica() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("doneXXXXXXXXXXXXX!"), 1000)
  });

  let result = await promise; // wait until the promise resolves (*)

  alert(result); // "done!"
}

asincronica();
