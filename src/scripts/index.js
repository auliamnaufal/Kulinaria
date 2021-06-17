import 'regenerator-runtime'; /* for async await transpile */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import './components/hero-section';
import './components/specialty-section';
import './components/footer';
import './components/drawer';

import '../styles/main.scss';

import App from './views/app';

import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('main'),
  loader: document.querySelector('.preloader'),
  drawerHomeLink: document.querySelector('.home a'),
  drawerFavoriteLink: document.querySelector('.favorite a'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
