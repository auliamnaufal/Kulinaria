import KulinariaDataSource from '../../data/dataSource';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate, errorMessageTemplate } from '../templates/template-creator';
import Scroll from '../../utils/scroll';
import LikeButtonInitiator from '../../utils/like-button-presenter';
import Preloader from '../../utils/loader-initiator';

const Detail = {
  async render() {
    return `
      <div id="detail"> </div>

      <div id="likeButtonContainer"></div>
      
    `;
  },

  async afterRender() {
    Scroll.toTop();
    Preloader.displayPreloader();

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await KulinariaDataSource.detailResto(url.id);

    const restaurantContainer = document.querySelector('#detail');

    Preloader.removePreloader();

    if (!restaurant.restaurant) {
      document.querySelector('.skip-link').innerHTML = '';
      restaurantContainer.innerHTML = errorMessageTemplate();
      return;
    }

    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant.restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: restaurant.restaurant,
    });

    document.querySelector('#submit').addEventListener('click', async (e) => {
      e.preventDefault();
      const reviewerName = document.querySelector('#name');
      const reviewerReview = document.querySelector('#reviews');

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

        this._renderReview(reviewData.name, reviewData.review);
      }
    });
  },

  _renderReview(name, review) {
    const reviewContainer = document.querySelector('.review__list');
    const date = new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });

    const dataReview = `
      <div class="review__item">
        <h3 class="review__item__name">${name}</h3>
        <p class="review__item__review">
            <q>${review}</q>
        </p>
        <p class="review__item__date">${date}</p>
      </div>
    `;

    reviewContainer.innerHTML += dataReview;
  },

};

export default Detail;
