import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.scss";

import data from "../DATA.json";

const drawerElement = document.querySelector("#drawer");
const menuElement = document.querySelector("#menu");
const mainElement = document.querySelector("main");

menuElement.addEventListener("click", (e) => {
  drawerElement.classList.toggle("open");
  menuElement.classList.toggle("n-activate");
  menuElement.classList.toggle("activate");
  e.stopPropagation();
});

mainElement.addEventListener("click", (e) => {
  drawerElement.classList.remove("open");
  menuElement.classList.remove("n-activate");
  menuElement.classList.add("activate");
  e.stopPropagation();
});

data.restaurants.forEach((restaurant) => {
  document.querySelector(".restaurant__list").innerHTML += `
    <div class="restaurant__item">

    <img
        src="${restaurant.pictureId}"
        alt="${restaurant.name} image"
        class="restaurant__item--img"
    />
    <div class="restaurant__item--title">
        <a href="#">${restaurant.name}</a>
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
