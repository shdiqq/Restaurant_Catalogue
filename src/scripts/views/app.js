import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();

    const iconHamburger = document.querySelector('.menumob .contentmob .iconmenu');
    const body = document.querySelector('body');
    const main = document.querySelector('main');
    const navmob = document.querySelector('.navmob');
    iconHamburger.addEventListener('click', (event) => {
      body.classList.add('disabledScroll');
      event.stopPropagation();
    });
    main.addEventListener('click', () => {
      navmob.classList.remove('open');
      body.classList.remove('disabledScroll');
    });

    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#mainContent').focus();
    });
  }
}

export default App;
