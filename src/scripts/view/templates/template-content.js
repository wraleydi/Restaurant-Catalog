const templateDetail = (restaurant) => {
  const imgApi = `https://restaurant-api.dicoding.dev/images/large/${restaurant.pictureId}`;
  return `
  <div class="detail_restaurant">
        <h2>${restaurant.name}</h2>
        <p><strong>🏢City:</strong> ${restaurant.city}</p>
        <p><strong>Address:</strong> ${restaurant.address}</p>
        <div class="restaurant_info">
        <div class="info_image">
        <img src="${imgApi}" alt="${restaurant.name}">
        </div>
        <div class="info_description">
        <P>${restaurant.description}</p>
        </div>
        </div>
        <h3>Menu</h3>
        <h4>Foods</h4>
    <ul>
        ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
    </ul>

    <h4>Drinks</h4>
    <ul>
        ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
    </ul>
    <h3>Reviews</h3>
    <h4>Tambahkan Review Baru</h4>
    <form id="addReviewForm">
        <input type="text" id="reviewName" placeholder="Nama Anda" required />
        <textarea id="reviewText" placeholder="Tulis ulasan Anda" required></textarea>
        <button type="submit">Kirim Ulasan</button>
    </form>
    <div id="reviews">
        ${restaurant.customerReviews
    .map(
      (review) => `
            <div class="review">
                <p><strong>${review.name}</strong> (${review.date})</p>
                <p>"${review.review}"</p>
            </div>
        `
    )
    .join('')}
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
  `;
};

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  templateDetail,
  templateItemRestaurant,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
