const templateDetail = (restaurant) => {
  const imgApi = `https://restaurant-api.dicoding.dev/images/large/${restaurant.pictureId}`;
  return `
        <h2>${restaurant.name}</h2>
        <img src="${imgApi}" alt="${restaurant.name}">
        <p><strong>City:</strong> ${restaurant.city}</p>
        <p><strong>⭐Rating:</strong> ${restaurant.rating}</p>
    `;
};

const templateItemRestaurant = (restaurant) => {
  const imgApi = `https://restaurant-api.dicoding.dev/images/large/${restaurant.pictureId}`;
  return `
  <div class="card" id="card" tabindex="0">
  <h2>${restaurant.name}</h2>
    <img src="${imgApi}" alt="${restaurant.name}">
        <p><strong>City:</strong> ${restaurant.city}</p>
        <p><strong>⭐Rating:</strong> ${restaurant.rating}</p>
        <p><a href="/#/detail/${restaurant.id}">lihat selengkapnya</a></p>
  </div>
  `
}

export { 
  templateDetail,
  templateItemRestaurant,
 };
