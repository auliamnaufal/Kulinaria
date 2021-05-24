import "regenerator-runtime"; /* for async await transpile */

import './components/hero-section'
import './components/specialty-section'
import './components/footer';

import "../styles/main.scss";

import App from './views/app'

import data from "../DATA.json";

const drawerElement = document.querySelector("#drawer");
const menuElement = document.querySelector("#menu");
const mainElement = document.querySelector("main");

const app = new App({
  button: document.querySelector("#menu"),
  drawer: document.querySelector("#drawer"),
  content: document.querySelector("main"),
})

data.restaurants.forEach((restaurant) => {
  document.querySelector(".restaurant__list").innerHTML += `
    <div class="restaurant__item">

    <img
        src="${restaurant.pictureId}"
        alt="${restaurant.name}     "
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

if (screen.width >= 850) {
  var prevScrollpos = window.pageYOffset;
  document.getElementById("drawer").style.top = "-10rem";
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("drawer").style.top = "0";
    } else {
      document.getElementById("drawer").style.top = "-10rem";
    }
    prevScrollpos = currentScrollPos;
  };
}
