import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (resto) => `
    <section id="hero">
        <img
            src="${CONFIG.BASE_URL + CONFIG.IMAGE_URL_MED + resto.pictureId}"
            alt="${resto.name}"
            class="detail__img"
        />
        <h2 class="detail__heading container">${resto.name}</h2>
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
                <p>${resto.rating}</p>
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
                <p>${resto.address}, ${resto.city}</p>
            </div>
            <p class="detail__info__paraghraph">
                ${resto.description}
            </p>
        </div>
    </section>

    <section class="category">
        <div class="category container">
            <h2 class="category__heading">Kategori Restoran</h2>
            <div class="category__list">
                ${resto.categories.map((category) => `
                    <p>${category.name}</p> 
                `).join('')}
            </div>
        </div>
    </section>

    <section id="menulist">
        <div class="menulist container">
        <div>
            <h2>Daftar Makanan</h2>
            <ul class="foods">
                ${resto.menus.foods.map((food) => `
                    <li>${food.name}</li> 
                `).join('')}
                
            </ul>
        </div>

        <div>
            <h2>Daftar Minuman</h2>
            <ul class="drinks">
                ${resto.menus.drinks.map((drink) => `
                    <li>${drink.name}</li>
                `).join('')}
                
            </ul>
        </div>
        </div>
    </section>

    <section id="review">
        <div class="review container">
            <h2 class="review__heading">Ulasan Restoran</h2>
            <div class="review__list container">
                ${resto.customerReviews.map((review) => `
                    <div class="review__item">
                        <h3 class="review__item__name">${review.name}</h3>
                        <p class="review__item__review">
                            <q>${review.review}</q>
                        </p>
                        <p class="review__item__date">${review.date}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>

    <section class="form">
        <h2 class="container form__heading">Tambahkan Ulasan</h2>
        <div class="form">
            <label for="name">Nama:</label><br />
            <input maxlength="25" type="text" id="name" name="fname" /><br />
            <label for="review">Pendapat:</label><br />
            <textarea
                maxlength="90"
                type="text"
                id="reviews"
                name="review"
            ></textarea>
            <div class="card-btn">
                <button id="submit">Kirim</button>
            </div>
        </div>
    </section>
    
`;

const createRestoItemTemplate = (list) => `
    <div class="restaurant__item">
            
    <img
        data-src="${CONFIG.BASE_URL}${CONFIG.IMAGE_URL_SML}${list.pictureId}"
        alt="${list.name}     "
        class="restaurant__item--img lazyload"
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

const createSaveButtonTemplate = () => `
  <button aria-label="save this resto" id="likeButton" class="btn btn__like">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 24l-6-5.269-6 5.269v-24h12v24z"/></svg>
  </button>
`;

const createSavedButtonTemplate = () => `
  <button aria-label="unsave this resto" id="likeButton" class="btn btn__liked">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 24l-6-5.269-6 5.269v-24h12v24z"/></svg>
  </button>
`;

const errorMessageTemplate = () => `
    <h2 class="error">Ada yang tidak beres, coba periksa koneksi Anda dan jika tidak menyelesaikan masalah, coba  
        <a href="mailto:auliamnaufal@gmail.com">hubungi saya</a>
    </h2>
`;

export {
  createRestoItemTemplate,
  createRestaurantDetailTemplate,
  createSaveButtonTemplate,
  createSavedButtonTemplate,
  errorMessageTemplate,
};
