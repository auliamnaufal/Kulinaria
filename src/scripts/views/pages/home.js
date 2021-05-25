import data from '../../../DATA.json';
import KulinariaDataSource from '../../data/dataSource';

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
    data.restaurants.forEach((restaurant) => {
      document.querySelector('.restaurant__list').innerHTML += `
              <div class="restaurant__item">
          
              <img
                  src="${restaurant.pictureId}"
                  alt="${restaurant.name}     "
                  class="restaurant__item--img"
              />
              <div class="restaurant__item--title">
                  <a href="#/detail/${restaurant.id}">${restaurant.name}</a>
                  <p>${restaurant.city}</p>
              </div>
              <div class="restaurant__item--content">
                  <p class="desc">
                  ${restaurant.description}
                  </p>
                  <p class="rating">
                  <span class="fa fa-star checked"></span>
                  ${restaurant.rating}
                  </p>
              </div>
              </div>`;
    });

    const restaurant = await KulinariaDataSource.listResto();
    console.log(restaurant);
  },
};

export default Home;
