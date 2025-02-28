import { addReviewRestaurant, getDetailRestaurant } from '../remote/api-data';
import UrlParser from '../routes/url-parser';
import { showLoading, hideLoading } from './indikator-loading';

const reviewInitiator = {
  async init({ reviewContainer, form, nameInput, reviewInput }) {
    this._reviewContainer = reviewContainer;
    this._form = form;
    this._nameInput = nameInput;
    this._reviewInput = reviewInput;

    this._addSubmitListener();
  },

  _addSubmitListener() {
    this._form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const name = this._nameInput.value;
      const review = this._reviewInput.value;

      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurant = await getDetailRestaurant(url.id);
      console.log('Fetched Restaurant:', restaurant);
      const restaurantId = restaurant.id;

      const newReview = {
        id: restaurantId,
        name: name,
        review: review,
      };

      try {
        showLoading();
        const response = await addReviewRestaurant(newReview);

        console.log('API Response:', response);

        if (response.customerReviews) {
          const updatedReviews = response.customerReviews;

          const reviewContainer = this._reviewContainer;
          reviewContainer.innerHTML = updatedReviews
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
            .join('');

          this._form.reset();
          hideLoading();
          alert('Ulasan berhasil ditambahkan!');
        } else {
          throw new Error('Data ulasan tidak valid');
        }
      } catch (error) {
        console.error('Failed to submit review:', error);
        alert('Gagal mengirim ulasan. Coba lagi nanti.');
      }
    });
  },
};

export default reviewInitiator;
