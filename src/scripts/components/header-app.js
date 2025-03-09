class HeaderApp extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
     header {
    position: sticky;
    top: 0;
    z-index: 9999;
  }

.my-header {
  display: flex;
  justify-content: space-between;
  padding-inline: 2rem;
  background-color: #13181d;
  align-items: center;
}

.my-header .title-app a{
  color: white;
  font-size: 1.5rem !important;
  padding: 0.5rem 1rem ;
  font-family: Poppins, sans-serif !important;
  text-decoration: none;
}

.my-navbar ul {
  display: flex !important;
  list-style: none !important;
  align-items: center;
}

.my-navbar ul li a {
display: inline-block !important;
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  transition: ease-in-out 0.5s;
  font-family: Quicksand;
  padding: 1.5rem 2rem;
  border-bottom: 2px solid transparent;
}

.my-navbar ul li a:hover {
  color: orange;
  border-bottom: 2px solid orange;
}

.toggle-menu {
  color: white;
  font-size: 2rem;
  display: none;
  align-items: center;
  cursor: pointer;
}

@media (max-width:910px) {
    .my-header {
        padding-inline: 0;
}

@media (max-width:670px) {
    .my-header {
        padding-inline: 0;
    }
}

@media (max-width:490px) {
    .my-header {
        padding-inline:0
    }
    .my-header .title-app {
        font-size:1rem
    }
    .my-header .title-app a h2 {
        font-size: 1.4rem;
    }
}
    </style>
      <div class="my-header">
        <div class="title-app">
        <a href="#/home">
          <h2 style="margin: 0">
            <span style="color: orange">F</span>ood shops
          </h2>
        </a>
        </div>
        <div class="my-navbar">
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
            <ul class="my-navbar-menu" id="navbar-menu" style="margin: 0;" hidden>
              <li><a href="#/home" tabindex="0">Home</a></li>
              <li><a href="#/favorite" tabindex="0">Favorite</a></li>
              <li>
                <a href="https://github.com/wraleydi" tabindex="0">About Us</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
        `;

    const toggleMenu = document.querySelector(".toggle-menu");

    toggleMenu.addEventListener("click", () => {
      console.log("Toggle menu diklik!");
      document
        .querySelector(".my-navbar-menu")
        .classList.toggle("navbar-expand");

      toggleMenu.classList.toggle("remove-menu");
    });

    window.onscroll = function () {
      document
        .querySelector(".my-navbar-menu")
        .classList.remove("navbar-expand");
    };

    toggleMenu.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleMenu.click();
      }
    });
  }
}

customElements.define("header-app", HeaderApp);
