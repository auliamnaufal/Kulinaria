import FavoriteRestoIdb from '../../data/favoriteResto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';
import Preloader from '../../utils/loader-initiator';

const Favorite = {

  async render() {
    return `
      <div class="hero">
        <picture class="hero--img">
            <source media="(max-width: 600px)" type="image/webp" srcset="./public/images/hero-image_2-small.webp">
            <source media="(max-width: 600px)" type="image/jpeg" srcset="./public/images/hero-image_2-small.jpg">
            <source media="(min-width: 601px)" type="image/webp" srcset="./public/images/hero-image_2-large.webp">
            <source media="(min-width: 601px)" type="image/jpeg" srcset="./public/images/hero-image_2-large.jpg">
            <img src="./public/images/hero-image_2-large.jpg" alt="hero image">
        </picture>
        <div class="hero__content">
            <h2 class="hero__content--title favorite__header">Restoran Favorit</h2>
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

    if (restaurants.length === 0) {
      restaurantsContainer.innerHTML = '<h3 class="nofavorite"> Kamu Tidak Memiliki Restoran Favorit, bisa Tambah <a href="#/"> Disini </a> </h3>';
    } else {
      restaurants.forEach((resto) => {
        restaurantsContainer.innerHTML += createRestoItemTemplate(resto);
      });
    }
  },
};

export default Favorite;
