import { getListRestaurant } from "../../remote/api-data";
import { templateItemRestaurant } from "../templates/template-content";

const Home = {
    async render() {
        return `
        <div class="catalog-section">
          <div class="title-catalog">
            <span class="material-symbols-outlined"> storefront </span>
            <h2>Catalog</h2>
          </div>
          <div id="container-item"></div>
        </div>
        
        `
    },

    async afterRender() {
        const restaurants = await getListRestaurant()
        console.log(restaurants);
        const container = document.querySelector('#container-item')
        restaurants.forEach((restaurant) => {
            container.innerHTML += templateItemRestaurant(restaurant)
        });
    }
}

export default Home