import KulinariaDataSource from '../../data/dataSource';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate, createReviewItemTemplate } from '../templates/template-creator';
import Scroll from '../../utils/scroll';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import Preloader from '../../utils/loader-initiator';

const Detail = {
  async render() {
    return `
      <div id="detail"></div>

      

      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    Scroll.toTop();
    Preloader.displayPreloader();

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await KulinariaDataSource.detailResto(url.id);

    const restaurantContainer = document.querySelector('#detail');
    const reviewContainer = document.querySelector('.review__list');

    Preloader.removePreloader();

    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant.restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: restaurant.restaurant,
    });

    document.querySelector('#submit').addEventListener('click', async (e) => {
      e.preventDefault();
      const reviewerName = document.querySelector('#name');
      const reviewerReview = document.querySelector('#reviews');
      const date = new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });

      const reviewData = {
        id: restaurant.restaurant.id,
        name: reviewerName.value,
        review: reviewerReview.value,
      };

      if (reviewerName.value === '' || reviewerReview.value === '') {
        alert('Name atau Pendapat Tidak Boleh Kosong!');
      } else {
        await KulinariaDataSource.addReview(reviewData);

        reviewerName.value = '';
        reviewerReview.value = '';

        reviewContainer.innerHTML += createReviewItemTemplate(reviewData, date);
      }
    });
  },

};

export default Detail;
