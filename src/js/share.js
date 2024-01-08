// ARROW
const iconShare = document.querySelector(".js-iconShare");
const arrowUpShare = document.querySelector(".fieldset__legend--arrowupShare");
const arrowDownShare = document.querySelector(
  ".fieldset__legend--arrowDownShare"
);
const boxShare = document.querySelector(".fieldset__boxcontent");
const buttonShare = document.querySelector(".js-buttoncreate");
const createdCard = document.querySelector(".js-createdcard");

arrowDownShare.classList.add("hidden");
function handleClickShare() {
  boxShare.classList.toggle("hidden");
  arrowUpShare.classList.toggle("hidden");
  arrowDownShare.classList.toggle("hidden");
}
iconShare.addEventListener("click", handleClickShare);

//boton naranja/gris y ocualtar seccion

createdCard.classList.add("hidden");

 function handleclickbutton (event) {
   event.preventDefault();
   createdCard.classList.toggle("hidden");
  buttonShare.classList.toggle("backgroundgrey");
  
};

buttonShare.addEventListener("click", handleclickbutton);

