import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import Preloader from '../utils/loader-initiator';

class App {
  constructor({
    button, drawer, content, loader, drawerHomeLink,
    drawerFavoriteLink,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._loader = loader;
    this._drawerHomeLink = drawerHomeLink;
    this._drawerFavoriteLink = drawerFavoriteLink;

    this._initialAppShell();
    this._initalPreloader();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      drawerHomeLink: this._drawerHomeLink,
      drawerFavoriteLink: this._drawerFavoriteLink,
    });
  }

  _initalPreloader() {
    Preloader.init(this._loader);
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
