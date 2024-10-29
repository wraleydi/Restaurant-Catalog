import { restaurantApi } from '../remote/api-data.js';

function displayMenu(restaurant) {
  const itemMenu = document.createElement('div');
  itemMenu.classList.add('card');
  itemMenu.tabIndex = 0;

  itemMenu.innerHTML = `
    <h2>${restaurant.name}</h2>
    <img src="${restaurant.pictureId}" alt="${restaurant.name}">
        <p><strong>City:</strong> ${restaurant.city}</p>
        <p><strong>⭐Rating:</strong> ${restaurant.rating}</p>
    `;
  return itemMenu;
}

function renderMenu(restaurants) {
  const container = document.getElementById('container-item');
  container.innerHTML = '';

  restaurants.forEach((restaurant) => {
    const itemMenu = displayMenu(restaurant);
    container.appendChild(itemMenu);
  });
}

async function loadRestaurants() {
  const restaurants = await restaurantApi();
  console.log(restaurants);
  renderMenu(restaurants);
}

loadRestaurants();
