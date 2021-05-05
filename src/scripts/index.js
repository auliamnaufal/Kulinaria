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

// data.restaurants.forEach((restaurant) => {
//   document.querySelector(".coba").innerHTML = `<h1>${restaurant.name}</h1>`;
// });
