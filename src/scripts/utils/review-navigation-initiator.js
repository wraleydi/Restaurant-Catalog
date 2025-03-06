import UrlParser from '../routes/url-parser';
import { showLoading, hideLoading } from './indikator-loading';
import { getDetailRestaurant } from '../remote/api-data';

const reviewNavigationInitiator = {
  async init({ reviewContainer, prevButton, nextButton }) {
    this._reviewContainer = reviewContainer;
    this._prevButton = prevButton;
    this._nextButton = nextButton;
    this._index = 0;
    this._itemsPerPages = 4;

    await this._initNavigation();
    this._prevHandler();
    this._nextHandler();
  },

  async _initNavigation() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await getDetailRestaurant(url.id);
    this._customerReviews = restaurant.customerReviews || [];

    this.render();
  },

  render() {
    const visibleReviews = this._customerReviews.slice(this._index, this._index + this._itemsPerPages);

    this._reviewContainer.innerHTML = visibleReviews.map(
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
    ).join('');

    this._updateNavigationButtons();
  },

  _updateNavigationButtons() {
    if (this._index + this._itemsPerPages < this._customerReviews.length) {
      this._nextButton.classList.remove('inActive');
      this._nextButton.classList.add('active');
    } else {
      this._nextButton.classList.add('inActive');
      this._nextButton.classList.remove('active');
    }

    if (this._index > 0) {
      this._prevButton.classList.remove('inActive');
      this._prevButton.classList.add('active');
    } else {
      this._prevButton.classList.add('inActive');
      this._prevButton.classList.remove('active');
    }
  },

  _nextHandler() {
    this._nextButton.addEventListener('click', async (event) => {
      event.preventDefault();
      showLoading();

      if (this._index + this._itemsPerPages < this._customerReviews.length) {
        this._index += this._itemsPerPages;
        this.render();
      }

      hideLoading();
    });
  },

  _prevHandler() {
    this._prevButton.addEventListener('click', async (event) => {
      event.preventDefault();
      showLoading();

      if (this._index > 0) {
        this._index -= this._itemsPerPages;
        this.render();
      }

      hideLoading();
    });
  },

  updateReviews(newReview) {
    this._customerReviews.unshift(newReview);
    this._index = 0;
    this.render();
  },
};

export default reviewNavigationInitiator;
