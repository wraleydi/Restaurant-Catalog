import { getSearchRestaurant } from "../remote/api-data";
import templateItemRestaurant from "../view/templates/template-item-restaurant";

const SearchInitiator = {
  async init({ restaurantsContainer, searchElement }) {
    this._restaurantsContainer = restaurantsContainer;
    this._searchElement = searchElement;

    this._searchElement.addEventListener("input", async () => {
      await this._searchHandler();
    });
  },

  async _searchHandler() {
    const input = this._searchElement.value.trim().toLowerCase();

    console.log("Mengirim request dengan query:", input);
    const restaurants = await getSearchRestaurant(input);

    if (
      !restaurants ||
      !Array.isArray(restaurants) ||
      restaurants.length === 0
    ) {
      this._restaurantsContainer.innerHTML = `<p class="message-search">Restaurant not found.</p>`;
      return;
    }

    const filteredRestaurants = restaurants.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(input)
    );

    if (filteredRestaurants.length > 0) {
      this._restaurantsContainer.innerHTML = filteredRestaurants
        .map((restaurant) => templateItemRestaurant(restaurant))
        .join("");
    } else {
      this._restaurantsContainer.innerHTML = `<p class="message-search">Restaurant not found.</p>`;
    }
  },
};

export default SearchInitiator;
