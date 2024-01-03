// ARROW
const iconShare = document.querySelector(".js-iconShare");
const arrowUpShare = document.querySelector(".fieldset__legend--arrowupShare");
const arrowDownShare = document.querySelector(
  ".fieldset__legend--arrowDownShare"
);
const boxShare = document.querySelector(".fieldset__boxcontent");
const buttonShare = document.querySelector(".js-buttonone");
const createdCard = document.querySelector(".js-createdcard");

arrowDownShare.classList.add("hidden");
function handleClickShare() {
  boxShare.classList.toggle("hidden");
  arrowUpShare.classList.toggle("hidden");
  arrowDownShare.classList.toggle("hidden");
}
iconShare.addEventListener("click", handleClickShare);

// boton naranja/gris y ocualtar seccion

createdCard.classList.add("hidden");

buttonShare.addEventListener("click", function (event) {
  event.preventDefault();
  buttonShare.classList.toggle("backgroundgrey");
  createdCard.classList.toggle("hidden");
});
