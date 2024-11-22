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
        const url = UrlParser.parseActiveUrlWithoutCombiner()
        const restaurant = await getDetailRestaurant(url.id)
        const container = document.querySelector('#restaurant')
        container.innerHTML = templateDetail(restaurant)
    }
}

export default Detail;