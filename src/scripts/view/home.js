import { getListRestaurant } from '../remote/api-data.js';

function displayMenu(restaurant) {
  const itemMenu = document.createElement('div');
  itemMenu.classList.add('card');
  itemMenu.tabIndex = 0;

  const imgApi = `https://restaurant-api.dicoding.dev/images/large/${restaurant.pictureId}`;
  console.log(imgApi);
  itemMenu.innerHTML = `
    <h2>${restaurant.name}</h2>
    <img src="${imgApi}" alt="${restaurant.name}">
        <p><strong>City:</strong> ${restaurant.city}</p>
        <p><strong>⭐Rating:</strong> ${restaurant.rating}</p>
        <p><a href="/#/detail/${restaurant.id}">lihat selengkapnya</a></p>
    `;
  return itemMenu;
}

function renderMenu(restaurants) {
  const container = document.getElementById('container-item');

  restaurants.forEach((restaurant) => {
    const itemMenu = displayMenu(restaurant);
    container.appendChild(itemMenu);
  });
}

async function loadRestaurants() {
  const { restaurants } = await getListRestaurant();
  console.log(restaurants);
  renderMenu(restaurants);
}

loadRestaurants();
