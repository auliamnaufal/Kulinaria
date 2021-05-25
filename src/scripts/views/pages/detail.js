import KulinariaDataSource from '../../data/dataSource';
import UrlParser from '../../routes/url-parser';
import {
  createRestaurantDetailTemplate,
  createMenuListTemplate,
  createCategoryListTemplate,
  createReviewListTemplate,
} from '../templates/template-creator';
import Scroll from '../../utils/scroll';

const Detail = {
  async render() {
    return `
      <div id="detail"></div>

      <section class="category">
        <div class="category container">
          <h2 class="category__heading">Kategori Restoran</h2>
          <div class="category__list">
              
          </div>
        </div>
      </section>
      
      <section id="menulist">
        <div class="menulist container">
          <div>
              <h2>Daftar Makanan</h2>
              <ul class="foods"></ul>
          </div>

          <div>
              <h2>Daftar Minuman</h2>
              <ul class="drinks"></ul>
          </div>
        </div>
      </section>
        
      <section id="review">
        <div class="review container">
          <h2 class="review__heading">Ulasan Restoran</h2>
          <div class="review__list container"></div>
        </div>
      </section>

      <section class="form">
        <h2 class="container form__heading">Tambahkan Ulasan</h2>
        <div class="form">
          <label for="name">Nama:</label><br />
          <input maxlength="25" type="text" id="name" name="fname" /><br />
          <label for="desc">Pendapat:</label><br />
          <textarea
            maxlength="90"
            type="text"
            id="desc"
            name="lname"
          ></textarea>
          <div class="card-btn">
            <button id="submit"22>Kirim</button>
          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    Scroll.toTop();

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await KulinariaDataSource.detailResto(url.id);

    const restaurantContainer = document.querySelector('#detail');
    const foodContainer = document.querySelector('.foods');
    const drinkContainer = document.querySelector('.drinks');
    const categoryContainer = document.querySelector('.category__list');
    const reviewContainer = document.querySelector('.review__list');

    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    restaurant.restaurant.menus.foods.forEach((food) => {
      foodContainer.innerHTML += createMenuListTemplate(food);
    });

    restaurant.restaurant.menus.drinks.forEach((drink) => {
      drinkContainer.innerHTML += createMenuListTemplate(drink);
    });

    restaurant.restaurant.categories.forEach((category) => {
      categoryContainer.innerHTML += createCategoryListTemplate(category);
    });

    restaurant.restaurant.customerReviews.forEach((review) => {
      reviewContainer.innerHTML += createReviewListTemplate(review);
    });
  },
};

export default Detail;
