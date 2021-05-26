import FavoriteRestoIdb from '../../data/favoriteResto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <hero-section></hero-section>

      <section class="restaurant">
        <div class="restaurant__list"></div>
      </section>  
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestoIdb.getAllResto();
    const restaurantsContainer = document.querySelector('.restaurant__list');
    restaurants.forEach((resto) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Favorite;
