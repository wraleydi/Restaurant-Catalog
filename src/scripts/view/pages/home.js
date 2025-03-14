import { getListRestaurant } from "../../remote/api-data";
import templateItemRestaurant from "../templates/template-item-restaurant";

const Home = {
  
  title: "Food Shops",

  async render() {
    return `
        <div class="catalog-section">
          <div class="header-catalog">
          <div class="title-catalog">
            <img src="./images/icons/storefront.png" alt="storefront" class="material-symbols-outlined" />
            <h2>Catalog</h2>
          </div>
            <div class="search_bar">
            <input type="text" id="search_element" placeholder="search restaurant..." required>
            </div>
          </div>
          <div id="container-item"></div>
        </div>
        
        `;
  },

  async afterRender() {
    const restaurants = await getListRestaurant();
    console.log(restaurants);
    const container = document.querySelector("#container-item");
    restaurants.forEach((restaurant) => {
      container.innerHTML += templateItemRestaurant(restaurant);
    });
  },
};

export default Home;
