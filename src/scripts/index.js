import 'regenerator-runtime';
import '../styles/main.css';
import './view/home.js';
import App from './view/app.js';

const app = new App({
    button: document.querySelector('#toggleMenu'),
    drawer: document.querySelector('#navDrawer'),
    content: document.querySelector('#main-content')
})

window.addEventListener('hashchange', () => {
    app.renderPage()
})

window.addEventListener('load', () => {
    app.renderPage();
  });


