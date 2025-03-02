import UrlParser from '../../routes/url-parser';
import { getDetailRestaurant } from '../../remote/api-data';
import templateDetail from '../templates/template-detail-restaurant';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import reviewInitiator from '../../utils/riview-initiator';
import reviewNavigationInitiator from '../../utils/review-navigation-initiator';

const Detail = {
  async render() {
    return `
        <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    console.log('Parsed ID:', url.id);
    const restaurant = await getDetailRestaurant(url.id);
    console.log('Fetched Restaurant:', restaurant);
    const container = document.querySelector('#restaurant');
    container.innerHTML = templateDetail(restaurant);

    console.log('HTML after rendering:', container.innerHTML);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        city: restaurant.city,

        address: restaurant.address,
        pictureId: restaurant.pictureId,
        menus: {
          foods: restaurant.menus.foods,
          drinks: restaurant.menus.drinks,
        },
        rating: restaurant.rating,
        customerReviews: restaurant.customerReviews,
      },
    });

    reviewInitiator.init({
      reviewContainer: document.querySelector('#reviews'),
      form: document.querySelector('#addReviewForm'),
      nameInput: document.querySelector('#reviewName'),
      reviewInput: document.querySelector('#reviewText'),
      updateReviews: reviewNavigationInitiator.updateReviews.bind(reviewNavigationInitiator),
    });

    console.log('Before reviewNavigationInitiator.init()');
    reviewNavigationInitiator.init({
      reviewContainer: document.querySelector('#reviews'),
      prevButton: document.querySelector('#prevButton'),
      nextButton: document.querySelector('#nextButton'),
    });
    console.log('After reviewNavigationInitiator.init()');

  },
};

export default Detail;
