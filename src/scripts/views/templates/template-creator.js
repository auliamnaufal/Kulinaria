import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (resto) => `
    <section id="hero">
    <img
    src="${CONFIG.BASE_URL + CONFIG.IMAGE_URL_MED + resto.restaurant.pictureId}"
    alt="${resto.restaurant.name}"
    class="detail__img"
    />
    <h2 class="detail__heading container">${resto.restaurant.name}</h2>
    </section>

    <section id="info"  class="container">
    <div class="detail__info">
    <div class="detail__info__rating">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        >
        <path
            d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
        />
        </svg>
        <p>${resto.restaurant.rating}</p>
    </div>
    <div class="detail__info__location">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        >
        <path
            d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"
        />
        </svg>
        <p>${resto.restaurant.address}, ${resto.restaurant.city}</p>
    </div>
    <p class="detail__info__paraghraph">
        ${resto.restaurant.description}
    </p>
    </div>
    </section>
`;

const createMenuListTemplate = (menu) => `
    <li>${menu.name}</li>
`;

const createCategoryListTemplate = (category) => `
    <p>${category.name}</p> 
`;

const createReviewListTemplate = (review) => `
    <div class="review__item">
        <h3 class="review__item__name">${review.name}</h3>
        <p class="review__item__review">
            <q>${review.review}</q>
        </p>
        <p class="review__item__date">${review.date}</p>
    </div>
`;

const createRestoItemTemplate = (list) => `
    <div class="restaurant__item">
            
    <img
        src="${CONFIG.BASE_URL}${CONFIG.IMAGE_URL_SML}${list.pictureId}"
        alt="${list.name}     "
        class="restaurant__item--img"
    />
    <div class="restaurant__item--title">
        <a href="#/detail/${list.id}">${list.name}</a>
        <p>${list.city}</p>
    </div>
    <div class="restaurant__item--content">
        <p class="desc">
        ${list.description}
        </p>
        <p class="rating">
        <span class="fa fa-star checked"></span>
        ${list.rating}
        </p>
    </div>
    </div>
`;

export {
  createRestoItemTemplate,
  createRestaurantDetailTemplate,
  createMenuListTemplate,
  createCategoryListTemplate,
  createReviewListTemplate,
};
