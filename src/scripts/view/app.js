import UrlParser from "../routes/url-parser";
import routes from "../routes/routes";

class App {
    constructor({ button, drawer, content }) {
        this._button = button
        this._drawer = drawer
        this._content = content
    }

    async renderPage() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        console.log('Parsed URL:', url); // Debug log
        const page = routes[url];
        if (!page) {
            console.error('Route not found for URL:', url);
            return;
        }
        this._content.innerHTML = await page.render();
        await page.afterRender();
    }
    
    }
    
    
     
export default App;