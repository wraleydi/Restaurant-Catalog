import UrlParser from "../routes/url-parser";
import routes from "../routes/routes";

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    console.log("Parsed URL:", url);

    const page = routes[url];
    if (!page) {
      console.error("Route not found for URL:", url);
      return;
    }

    const heroSection = document.querySelector("#hero-section");
    if (heroSection) {
      if (url !== "/" && url !== "/home") {
        heroSection.style.display = "none";
      } else {
        heroSection.style.display = "block";
      }
    }

    this._content.innerHTML = await page.render();
    await page.afterRender();
    const skipLinkElem = document.querySelector(".skip-link");
    skipLinkElem.addEventListener("click", (event) => {
      event.preventDefault();
      document.querySelector("#main-content").scrollIntoView();
      skipLinkElem.blur();
    });
  }
}

export default App;
