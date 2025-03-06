import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

const templateItemRestaurant = (restaurant) => {
  const imgApi = `https://restaurant-api.dicoding.dev/images/large/${restaurant.pictureId}`;
  return `
    <div class="card" id="card" tabindex="0">
    <div class="card__header">
    <div class="card__header__image">
      <img class="lazyload" data-src="${imgApi}" alt="${restaurant.name}">
    </div>
    <div class="card__header__rating">
      <p style="margin: 0;">⭐ </strong> ${restaurant.rating}</p>
    </div>
    </div>
    <a href="/#/detail/${restaurant.id}" >
    <div class="card__content">
      <h2 class="title_restaurant">${restaurant.name}</h2>
          <p style="font-weight: 600; margin-block: 0 0.5rem;"><strong>🗺️ </strong> ${restaurant.city}</p>
          <p style="margin: 0;">${restaurant.description}</p>
        </div>
    </a>
    </div>
    `;
};

export default templateItemRestaurant;
