import UrlParser from "../../routes/url-parser";
import { getDetailRestaurant } from "../../remote/api-data";
import { templateDetail } from "../templates/template-content";

const Detail = {
    async render() {
        return `
        <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
        `
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        console.log('Parsed ID:', url.id); // Debug log
        const restaurant = await getDetailRestaurant(url.id);
        console.log('Fetched Restaurant:', restaurant); // Debug log
        const container = document.querySelector('#restaurant');
        container.innerHTML = templateDetail(restaurant);
    }
    
}

export default Detail;