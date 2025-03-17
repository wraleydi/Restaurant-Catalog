import FavoriteRestaurant from "../../public/data/favorite-restaurant-idb";
import templateItemRestaurant from "../view/templates/template-item-restaurant";

const FavoriteSearchInitiator = {
  async init({ restaurantsContainer, searchElement }) {
    this._restaurantsContainer = restaurantsContainer;
    this._searchElement = searchElement;

    this._searchElement.addEventListener("input", async () => {
      await this._searchHandler();
    });

    await this._displayAllFavorites();
  },

  async _displayAllFavorites() {
    const restaurants = await FavoriteRestaurant.getRestaurantsAll();
    this._renderRestaurants(restaurants, false);
  },

  async _searchHandler() {
    const input = this._searchElement.value.trim().toLowerCase();

    console.log("Mencari restoran favorit dengan query:", input);

    const restaurants = await FavoriteRestaurant.getRestaurantsAll();
    const filteredRestaurants = restaurants.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(input)
    );

    this._renderRestaurants(filteredRestaurants, input.length > 0);
  },

  _renderRestaurants(restaurants, isSearching = false) {
    if (restaurants.length > 0) {
      this._restaurantsContainer.innerHTML = restaurants
        .map((restaurant) => templateItemRestaurant(restaurant))
        .join("");
    } else {
      // Tampilkan pesan hanya jika sedang mencari
      if (isSearching) {
        this._restaurantsContainer.innerHTML = `<p class="message-search">Restaurant not found.</p>`;
      }
    }
  },
};

export default FavoriteSearchInitiator;
