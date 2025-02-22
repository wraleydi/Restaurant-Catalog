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
        <p>${restaurant.description}</p>
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
        <div class="menus">
    <div class="restaurant_menus">
        <input type="radio" name="slide" id="c1" checked>
        <label for="c1" class="card__menus">
            <div class="icon">></div>
            <div class="row">
                <div class="description__menus">
                    <h4>Foods</h4>
                    <table>
                        <tbody>
                            ${restaurant.menus.foods
    .map(
      (food, index) => `
                                ${index % 4 === 0 ? '<tr>' : ''}
                                    <td>
                                        <img src="../../images/icons/food.jpg" alt="${food.name}" width="50px">
                                        <span>${food.name}</span>
                                    </td>
                                ${index % 4 === 3 || index === restaurant.menus.foods.length - 1 ? '</tr>' : ''}
                            `
    )
    .join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        </label>

        <input type="radio" name="slide" id="c2">
        <label for="c2" class="card__menus">
            <div class="icon">></div>
            <div class="row">
                <div class="description__menus">
                    <h4>Drinks</h4>
                    <table>
                        <tbody>
                            ${restaurant.menus.drinks
    .map(
      (drink, index) => `
                                ${index % 4 === 0 ? '<tr>' : ''}
                                    <td>
                                        <img src="../../images/icons/drink.PNG" alt="${drink.name}" width="50px">
                                        <span>${drink.name}</span>
                                    </td>
                                ${index % 4 === 3 || index === restaurant.menus.drinks.length - 1 ? '</tr>' : ''}
                            `
    )
    .join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        </label>
    </div>
</div>
    <div class="detail_restaurant">
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
