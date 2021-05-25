import CONFIG from '../../globals/config';

const createMovieDetailTemplate = (movie) => `
  <h2 class="movie__title">${movie.title}</h2>
  <img class="movie__poster" src="${CONFIG.BASE_IMAGE_URL + movie.poster_path}" alt="${movie.title}" />
  <div class="movie__info">
  <h3>Information</h3>
    <h4>Tagline</h4>
    <p>${movie.tagline}</p>
    <h4>Release Date</h4>
    <p>${movie.release_date}</p>
    <h4>Duration</h4>
    <p>${movie.runtime} minutes</p>
    <h4>Rating</h4>
    <p>${movie.vote_average}</p>
  </div>
  <div class="movie__overview">
    <h3>Overview</h3>
    <p>${movie.overview}</p>
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
  createMovieDetailTemplate,
};
