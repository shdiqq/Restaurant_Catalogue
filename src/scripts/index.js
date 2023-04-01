import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import '../styles/styles.css';
import '../styles/responsives.css';

import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage(); // ini ngerender berdasarkan hash #
});

window.addEventListener('load', () => {
  app.renderPage(); // ini nge render terakhir kali yang dibuka
  swRegister();
});
