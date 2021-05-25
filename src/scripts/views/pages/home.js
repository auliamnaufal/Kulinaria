import KulinariaDataSource from '../../data/dataSource';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <hero-section></hero-section>

        <specialty-section></specialty-section>

        <section class="restaurant">
            <h2 class="restaurant__title">our list of restaurant</h2>
            <div class="restaurant__list"></div>
        </section>
      `;
  },

  async afterRender() {
    const restaurants = await KulinariaDataSource.listResto();
    const restaurantContainer = document.querySelector('.restaurant__list');
    restaurants.restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default Home;
