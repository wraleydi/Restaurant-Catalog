import { addReviewRestaurant, getDetailRestaurant } from '../remote/api-data';
import UrlParser from '../routes/url-parser';
import { showLoading, hideLoading } from './indikator-loading';

const reviewInitiator = {
  async init({ reviewContainer, form, nameInput, reviewInput, updateReviews }) {
    this._reviewContainer = reviewContainer;
    this._form = form;
    this._nameInput = nameInput;
    this._reviewInput = reviewInput;
    this._updateReviews = updateReviews;

    this._addSubmitListener();
  },

  _addSubmitListener() {
    this._form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const name = this._nameInput.value.trim();
      const review = this._reviewInput.value.trim();

      if (!name || !review) {
        alert('Nama dan review tidak boleh kosong!');
        return;
      }

      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurant = await getDetailRestaurant(url.id);
      const restaurantId = restaurant.id;

      const newReview = {
        id: restaurantId,
        name,
        review,
      };

      try {
        showLoading();
        const response = await addReviewRestaurant(newReview);

        if (response.customerReviews) {
          const latestReview = response.customerReviews[response.customerReviews.length - 1];

          this._updateReviews(latestReview);

          this._form.reset();
          hideLoading();
          alert('Ulasan berhasil ditambahkan!');
        } else {
          throw new Error('Data ulasan tidak valid');
        }
      } catch (error) {
        console.error('Failed to submit review:', error);
        alert('Gagal mengirim ulasan. Coba lagi nanti.');
      } finally {
        hideLoading();
      }
    });
  },
};

export default reviewInitiator;
