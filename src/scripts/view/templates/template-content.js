const templateDetail = (restaurant) => {
  const imgApi = `https://restaurant-api.dicoding.dev/images/large/${restaurant.pictureId}`;
  return `
  <div class="detail_restaurant">
        <h2>${restaurant.name}</h2>
        <p><strong>🏢City:</strong> ${restaurant.city}</p>
        <p><strong>Address:</strong> ${restaurant.address}</p>
        <img src="${imgApi}" alt="${restaurant.name}">
        <P>${restaurant.description}</p>
        <h3>Menu</h3>
        <h4>Foods</h4>
    <ul>
        ${restaurant.menus.foods.map(food => `<li>${food.name}</li>`).join('')}
    </ul>

    <h4>Drinks</h4>
    <ul>
        ${restaurant.menus.drinks.map(drink => `<li>${drink.name}</li>`).join('')}
    </ul>
    <h3>Reviews</h3>
    <div id="reviews">
        ${restaurant.customerReviews.map(review => `
            <div class="review">
                <p><strong>${review.name}</strong> (${review.date})</p>
                <p>"${review.review}"</p>
            </div>
        `).join('')}
    </div>
</div>
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
