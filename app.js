// Show map
var map = L.map("map").setView([48.862725, 2.287592], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 10,
}).addTo(map);

const marker = L.marker([48.862725, 2.287592]).addTo(map);

marker.bindPopup(
  "<a href='https://www.google.fr/maps/place/32+Rue+Ren%C3%A9+Boulanger,+75010+Paris/@48.8689075,2.359354,17z/data=!3m1!4b1!4m5!3m4!1s0x47e66e0ed99d2c87:0x71f122842172f9f2!8m2!3d48.868904!4d2.361548'>intinéraire</a>"
);

// Discount & map animation on click + setTimeout

const cta = document.querySelector("#cta");
const changeCta = "J'Y VAIS";
let clicked = false;
const arrow = document.querySelector(".arrow");
const discountBlock = document.querySelector("#discount-block");
const adressBlock = document.querySelector("#adress-block");

cta.addEventListener("click", () => {
  discountBlock.classList.toggle("discount-anim");
  adressBlock.classList.toggle("adress-anim");
  arrow.classList.toggle("arrow-none");
  clicked = !clicked;
  if (clicked) cta.innerHTML = "J'Y VAIS";
  else cta.innerHTML = "EN PROFITER";
});

const myTimeout = setTimeout(myGreeting, 19000);
function myGreeting() {
  discountBlock.classList.toggle("discount-anim");
  adressBlock.classList.toggle("adress-anim");
  cta.innerHTML = changeCta;
}
