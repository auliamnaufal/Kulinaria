import 'regenerator-runtime'; /* for async await transpile */

import './components/hero-section';
import './components/specialty-section';
import './components/footer';

import '../styles/main.scss';

import App from './views/app';

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('main'),
  drawerItem: document.querySelector('.nav__item a'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
