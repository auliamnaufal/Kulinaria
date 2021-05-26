import FavoriteRestoIdb from '../../data/favoriteResto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';
import Preloader from '../../utils/loader-initiator';

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
    Preloader.displayPreloader();

    const restaurants = await FavoriteRestoIdb.getAllResto();
    const restaurantsContainer = document.querySelector('.restaurant__list');

    Preloader.removePreloader();
    restaurants.forEach((resto) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Favorite;
