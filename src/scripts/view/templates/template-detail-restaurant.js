import getRandomPrice from "../../../public/data/random-price-menus";
import getRandomImage from "../../../public/data/random-image-menus";

const templateDetail = (restaurant) => {
  const imgApi = `https://restaurant-api.dicoding.dev/images/small/${restaurant.pictureId}`;
  const preloadLink = `<link rel="preload" as="image" href="${imgApi}">`;

  return `

    ${preloadLink}

    <div class="restaurant_info" style="

          background: linear-gradient(115deg ,rgb(19, 24, 29, 0.97) 40%, rgba(19, 24, 29, 0.5)),

                  url('${imgApi}');

                  background-size: cover;

                  background-position: center;

                  width: 100%;

                  max-height: 900px;

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
        <span>🏢 <strong>City:</strong> ${restaurant.city}</span>
    </div>
    <div class="info_wrapper">
        <span>📍 <strong>Address:</strong> ${restaurant.address}</span>
    </div>
</div>
        </div>
        </div>
        <div class="menus">
    <div class="restaurant_menus">
        <input type="radio" name="slide" id="c1" checked>
        <label for="c1" class="card__menus">
            <div class="icon">></div>
            <div class="wrapper_menus">
              <h4>Foods Menus</h4>
                <div class="description__menus">
                ${restaurant.menus.foods
                  .map(
                    (food) => `
                    <div class="menu_card">
                            <img src="${getRandomImage("food")}" alt="${food.name}" height="70px">
                            <div class="menu_description">
                            <p>${food.name}</p>
                            <p>💵Rp ${getRandomPrice().toLocaleString("id-ID")}
                            </div>
                    </div>
                `
                  )
                  .join("")}
                </div>
            </div>
        </label>

        <input type="radio" name="slide" id="c2">
        <label for="c2" class="card__menus">
            <div class="icon">></div>
            <div class="wrapper_menus">
              <h4>Drinks Menus</h4>
                <div class="description__menus">
                ${restaurant.menus.drinks
                  .map(
                    (drink) => `
                                  <div class="menu_card">
                                          <img src="${getRandomImage("drink")}" alt="${drink.name}" height="70px">
                                      <div class="menu_name">
                                      <div class="menu_description">
                                          <p>${drink.name}</p>
                                          <p>💵Rp ${getRandomPrice().toLocaleString("id-ID")}
                                        </div>
                                      </div>
                                  </div>
                              `
                  )
                  .join("")}
                </div>
            </div>
        </label>
    </div>
</div>
    <div class="reviews_restaurant">
    <div class="title_section__reviews">
    <h4 style="margin-block-start: 0;">Reviews Restaurant</h4>
    </div>
    <div class="review_container">
    <div class="review_content">
    <div id="reviews">
        ${restaurant.customerReviews
          .map(
            (review) => `
            <div class="review_item">
            <div class="review_item__header">
                <p class="review_name"><strong>${review.name}</strong></p>
                <p class="review_date">${review.date}</p>
            </div>
            <div class="review_item__body">
                <p class="review_text" style="margin-block-end: 0;">${review.review}</p>
            </div>
              </div>
        `
          )
          .join("")}
    </div>
    <div class="review_navigation">
<button id="prevButton"><i class="fa fa-arrow-left"></i> Prev</button>
<button id="nextButton">Next <i class="fa fa-arrow-right"></i></button>
    </div>
    </div>

    <div class="review_form">
    <div class="title_form">
    <h4 style="margin: 0;">Add Review</h4>
    </div>
    <form id="addReviewForm" novalidate>
    <div class="input_name__review">
    <input type="text" class="form-control" id="reviewName" placeholder="Your Name" required />
    <div class="invalid-feedback">
        Please enter your name.
    </div>
    </div>
    <div class="input_review__review">
    <textarea id="reviewText" class="form-control" placeholder="Your Review" required></textarea>
    <div class="invalid-feedback">
        Please enter your review.
    </div>
    </div>
    <button type="submit">Save</button>
</form>
    </div>
    </div>
</div>
    `;
};

export default templateDetail;
