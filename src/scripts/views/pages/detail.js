import KulinariaDataSource from '../../data/dataSource';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import Scroll from '../../utils/scroll';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="detail"></div>

      

      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    Scroll.toTop();

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await KulinariaDataSource.detailResto(url.id);

    const restaurantContainer = document.querySelector('#detail');

    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant.restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: restaurant.restaurant,
    });

    document.querySelector('#submit').addEventListener('click', () => {
      const reviewerName = document.querySelector('#name');
      const reviewerReview = document.querySelector('#reviews');

      KulinariaDataSource.addReview({
        id: restaurant.restaurant.id,
        name: reviewerName.value,
        review: reviewerReview.value,
      });

      reviewerName.value = '';
      reviewerReview.value = '';
    });
  },

};

export default Detail;
