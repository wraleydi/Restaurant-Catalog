import UrlParser from '../../routes/url-parser';
import { getDetailRestaurant } from '../../remote/api-data';
import {
  templateDetail,
} from '../templates/template-content';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
        <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    console.log('Parsed ID:', url.id); // Debug log
    const restaurant = await getDetailRestaurant(url.id);
    console.log('Fetched Restaurant:', restaurant); // Debug log
    const container = document.querySelector('#restaurant');
    container.innerHTML = templateDetail(restaurant);

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
    console.log('Data restoran saat inisialisasi:', restaurant);
  },
};

export default Detail;
