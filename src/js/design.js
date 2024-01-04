"use strict";

// ARROW
const iconDesign = document.querySelector(".js-iconDesign");
const arrowUpDesign = document.querySelector(
  ".fieldset__legend--arrowupDesign"
);
const arrowDownDesign = document.querySelector(
  ".fieldset__legend--arrowDownDesign"
);
const boxDesign = document.querySelector(".form__design--colors");
arrowDownDesign.classList.add("hidden");
function handleClickDesign() {
  boxDesign.classList.toggle("hidden");
  arrowUpDesign.classList.toggle("hidden");
  arrowDownDesign.classList.toggle("hidden");
}
iconDesign.addEventListener("click", handleClickDesign);

// Variables para los elementos de HTML de la tarjeta
const resetButton = document.querySelector(".js_reset_btn");
//const profileName = document.querySelector('.js-name');
//const profileJob = document.querySelector('.js-job');
const articleDesign = document.querySelector(".js-designCards");

// Variables para los elementos del HTML de la tarjeta, la parte de Diseña
const palettes = document.querySelector(".js-designPalette");
const paletteRadiusOne = document.querySelector(".js-paletteOne");
const paletteRadiusTwo = document.querySelector(".js-paletteTwo");
const paletteRadiusThree = document.querySelector(".js-paletteThree");

function handleClickPallete() {
  //event.preventDefault();
  articleDesign.classList.toggle("paletteOne");
  articleDesign.classList.add("paletteTwo");
  articleDesign.classList.add("paletteThree");
}
handleClickPallete();

//paletteRadiusOne.addEventListener('click', handleClickPallete); 


function resetForm() {
  const holeForm = document.querySelector(".holeForm");
  holeForm.reset();
}
resetButton.addEventListener("click", resetForm);

