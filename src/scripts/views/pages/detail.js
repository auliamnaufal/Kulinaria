const Detail = {
  async render() {
    return `
      <section id="hero">
        <img
          src="./images/hero-image_2.jpg"
          alt="Kafe fita"
          class="detail__img"
        />
        <h2 class="detail__heading container">Kafe fita</h2>
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
            <p>3.8</p>
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
            <p>Jln. Belimbing Timur no 27, Bandung</p>
          </div>
          <p class="detail__info__paraghraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            laborum corporis odit maxime inventore voluptatum. Molestiae nulla
            magni deleniti minus nostrum ipsa aperiam veniam exercitationem natus
            quis. Ad, nihil sed.
          </p>
        </div>
      </section>

      <section class="category">
        <div class="category container">
          <h2 class="category__heading">Category</h2>
          <div class="category__list">
            <p>Jawa</p>
            <p>Bali</p>
            <p>Kalimantan</p>
            <p>Papua</p>
          </div>
        </div>
      </section>

      <section id="menulist">
        <div class="menulist container">
          <div>
            <h2>List of Foods</h2>
            <ul>
              <li>Ikan teri dan roti</li>
              <li>bebek crepes</li>
              <li>kari kacang dan telur</li>
            </ul>
          </div>
        
          <div>
            <h2>List of Drinks</h2>
            <ul>
              <li>Ikan teri dan roti</li>
              <li>bebek crepes</li>
              <li>kari kacang dan telur</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="review">
        <div class="review container">
          <h2 class="review__heading">Review Restaurant</h2>
          <div class="review__list container">
            <div class="review__item">
              <h3 class="review__item__name">Tom</h3>
              <p class="review__item__review">
                <q>rekomendasi untuk pelajar</q>
              </p>
              <p class="review__item__date">24 Meil 2021</p>
            </div>
        
            <div class="review__item">
              <h3 class="review__item__name">Tom</h3>
              <p class="review__item__review">
                <q>rekomendasi untuk pelajar</q>
              </p>
              <p class="review__item__date">24 Meil 2021</p>
            </div>
        
            <div class="review__item">
              <h3 class="review__item__name">Tom</h3>
              <p class="review__item__review">
                <q>rekomendasi untuk pelajar</q>
              </p>
              <p class="review__item__date">24 Meil 2021</p>
            </div>
          </div>
        </div>
      </section>

      <section class="form">
        <h2 class="container form__heading">Add Review</h2>
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
            <button id="submit"22>Submit</button>
          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Detail;
