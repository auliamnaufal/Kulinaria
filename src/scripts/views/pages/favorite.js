import FavoriteRestoIdb from '../../data/favoriteResto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="hero">
        <div class="hero__content">
            <h2 class="hero__content--title">Favorit Restoran</h2>
            <p class="hero__content--text">Restoran-Restoran Favorit Anda</p>
        </div>
      </div>

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
