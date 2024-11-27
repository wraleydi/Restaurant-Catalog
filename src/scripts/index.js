import 'regenerator-runtime';
import '../styles/main.css';
import './components/components.js';
import App from './view/app.js';
import { showLoading, hideLoading } from './utils/indikator-loading.js';
import swRegister from './utils/sw-register.js';

const app = new App({
  button: document.querySelector('#toggleMenu'),
  drawer: document.querySelector('#navDrawer'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('DOMContentLoaded', () => {
  swRegister();
  showLoading();

  app.renderPage()
    .then(() => {
      hideLoading();
    })
    .catch((error) => {
      alert('Terjadi kesalahan saat memuat halaman. Silakan coba lagi.');
      console.error('Error rendering page:', error);
    });
});

window.addEventListener('hashchange', () => {
  console.log('Hash changed:', window.location.hash);

  showLoading();

  app.renderPage()
    .then(() => {
      hideLoading();
    })
    .catch((error) => {
      alert('Terjadi kesalahan saat memuat halaman. Silakan coba lagi.');
      console.error('Error rendering page:', error);
    });
});
