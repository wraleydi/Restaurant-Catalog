import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const templateDetail = (restaurant) => {
  const imgApi = `https://restaurant-api.dicoding.dev/images/large/${restaurant.pictureId}`;
  return `
   <div class="restaurant_info" style="
        background: linear-gradient(115deg ,rgb(19, 24, 29, 0.97) 40%, rgba(19, 24, 29, 0.5)),
            url('${imgApi}');
            background-size: cover;
            background-position: center;
            width: 100%;
            height: 90vh;
            color: white;
        ">
        <div class="restaurant_info__content">
        <div class="title_content">
        <h2 style="margin: 0;">${restaurant.name}</h2>
        </div>
        <div class="info_description">
        <P>${restaurant.description}</p>
        </div>
        <div class="location_restaurant">
    <div class="info_wrapper">
        <p>🏢</p>
        <span><strong>City:</strong> ${restaurant.city}</span>
    </div>
    <div class="info_wrapper">
        <p>📍</p>
        <span><strong>Address:</strong> ${restaurant.address}</span>
    </div>
</div>
        </div>
        </div>
        <h3>Menu</h3>
  <div class="detail_restaurant">
        <div class="menus">
        <div class="restaurant_menus">
        <div id="menus" class="foods_menus">
        <h4>Foods</h4>
    <ul>
        ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
    </ul>
    </div>
    <div id="menus" class="drinks_menus">
    <h4>Drinks</h4>
    <ul>
        ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
    </ul>
    </div>
    </div>
    </div>
    <div class="reviews_restaurant">
    <h4>Tambahkan Review Baru</h4>
    <div class="review_form">
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
                <p class="review_name"><strong>${review.name}</strong></p>
                <p class="review_text">"${review.review}"</p>
                <p><em>${review.date}</em></p>
              </div>
        `
    )
    .join('')}
    </div>
    </div>
    </div>
</div>
    `;
};

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
        <p style="font-weight: 600; margin-block-start: 0;"><strong>🗺️ </strong> ${restaurant.city}</p>
        <p style="margin: 0;">${restaurant.description}</p>
      </div>
  </a>
  </div>
  `;
};

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  templateDetail,
  templateItemRestaurant,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
