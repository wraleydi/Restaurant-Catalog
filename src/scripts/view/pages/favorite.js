import FavoriteRestaurant from "../../../public/data/favorite-restaurant-idb";
import templateItemRestaurant from "../templates/template-item-restaurant";

const Favorite = {
  async render() {
    return `
        <div class="catalog-section">
          <div class="header-catalog">
          <div class="title-catalog">
            <img src="./images/icons/storefront.png" alt="storefront" class="material-symbols-outlined" />
            <h2>Favorite Restaurant</h2>
          </div>
            <div class="search_bar">
            <span>🔍</span>
            <input type="text" id="search_element" placeholder="search restaurant..." required>
            </div>
          </div>
          <h3 class="message_text">*No Favorite Restaurant</h3>
          <div id="container-item"></div>
        </div>
      `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurant.getRestaurantsAll();
    const restaurantsContainer = document.querySelector("#container-item");
    const messageText = document.querySelector(".message_text");

    if (restaurants.length === 0) {
      messageText.style.display = "block";
    } else {
      messageText.style.display = "none";
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += templateItemRestaurant(restaurant);
      });
    }
  },
};

export default Favorite;
