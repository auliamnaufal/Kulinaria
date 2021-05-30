import KulinariaDataSource from '../../data/dataSource';
import {createRestoItemTemplate, errorMessageTemplate} from '../templates/template-creator';
import Preloader from '../../utils/loader-initiator';

const Home = {
  async render() {
    return `
        <hero-section></hero-section>

        <specialty-section></specialty-section>

        <section class="restaurant">
            <h2 class="restaurant__title">Daftar Restoran Kami</h2>
            <div class="restaurant__list"></div>
        </section>
      `;
  },

  async afterRender() {
    Preloader.displayPreloader();

    const restaurants = await KulinariaDataSource.listResto();
    const restaurantContainer = document.querySelector('.restaurant__list');

    Preloader.removePreloader();

    if (!restaurants.restaurants) {
      document.querySelector('.skip-link').innerHTML = '';
      restaurantContainer.innerHTML = errorMessageTemplate();
      return;
    }
    restaurants.restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default Home;
