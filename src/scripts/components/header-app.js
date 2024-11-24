class HeaderApp extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <a href="#main-content" class="skip-link">Skip to Content</a>
      <div class="my-header">
        <div class="title-app">
          <h2 style="margin: 0">
            <span style="color: orange">F</span>ood shops
          </h2>
        </div>
        <div class="navbar">
          <nav
            id="navDrawer"
            role="navigation"
            aria-label="Main Navigation"
            style="display: flex"
          >
            <div
              role="button"
              id="toggleMenu"
              class="toggle-menu"
              tabindex="0"
              aria-expanded="false"
              aria-controls="navbar-menu"
            >
              ☰
            </div>
            <ul class="navbar-menu" id="navbar-menu" hidden>
              <li><a href="#/home" tabindex="0">Home</a></li>
              <li><a href="#/favorite" tabindex="0">Favorite</a></li>
              <li>
                <a href="https://github.com/wraleydi" tabindex="0">About Us</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
        `

        const toggleMenu = document.querySelector('.toggle-menu');

      toggleMenu.addEventListener('click', () => {
        console.log('Toggle menu diklik!');
        document
          .querySelector('.navbar-menu')
          .classList.toggle('navbar-expand');

        toggleMenu.classList.toggle('remove-menu');
      });

      window.onscroll = function () {
        document
          .querySelector('.navbar-menu')
          .classList.remove('navbar-expand');
      };

      toggleMenu.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          toggleMenu.click();
        }
      });
    }
}

customElements.define('header-app', HeaderApp)