import "normalize.css";
import "bootstrap-4-grid";
import "./source/scss/main.scss";
import "@fortawesome/fontawesome-free/css/all.css"
import VanillaTilt from "vanilla-tilt";
console.log(VanillaTilt);
VanillaTilt.init(document.querySelector(".js-tilt"), {
  max: 25,
  speed: 400
});