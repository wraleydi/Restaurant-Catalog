import { addReviewRestaurant, getDetailRestaurant } from '../remote/api-data';
import UrlParser from '../routes/url-parser';
import { showLoading, hideLoading } from './indikator-loading';
import { templateAlertSucces, templateAlertErrorData, templateAlertErrorMain } from '../view/templates/template-alert-review';

const reviewInitiator = {
  async init({ reviewContainer, alertContainer, form, nameInput, reviewInput, updateReviews }) {
    this._reviewContainer = reviewContainer;
    this._alertContainer = alertContainer;
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
          this._alertContainer.innerHTML = templateAlertSucces();
        } else {
          this._alertContainer.innerHTML = templateAlertErrorData();
        }
      } catch (error) {
        console.error('Failed to submit review:', error);
        this._alertContainer.innerHTML = templateAlertErrorMain();
      } finally {
        hideLoading();
      }
    });
  },
};

export default reviewInitiator;
