"use strict";

// ARROW
const iconDesign = document.querySelector(".js-iconDesign");
const arrowUpDesign = document.querySelector(".fieldset__legend--arrowupDesign");
const arrowDownDesign = document.querySelector(".fieldset__legend--arrowDownDesign");
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
const profileName = document.querySelector('.js-name');
const profileJob = document.querySelector('.js-job');
const articleDesign = document.querySelector(".js-designCards");
const wholeForm = document.querySelector(".wholeForm");

// Variables para los elementos del HTML de la tarjeta, la parte de Diseña
const palette = document.querySelector(".js-designPalette");
const paletteRadiusOne = document.querySelector(".js-paletteOne");
const paletteRadiusTwo = document.querySelector(".js-paletteTwo");
const paletteRadiusThree = document.querySelector(".js-paletteThree");


function handleClickPaletteOne () {
  articleDesign.classList.add('paletteOne');
  articleDesign.classList.remove('paletteTwo');
  articleDesign.classList.remove('paletteThree');
};

function handleClickPaletteTwo (event){
  articleDesign.classList.add('paletteTwo');
  articleDesign.classList.remove('paletteOne');
  articleDesign.classList.remove('paletteThree');
};

function handleClickPaletteThree () {
  articleDesign.classList.add('paletteThree');
  articleDesign.classList.remove('paletteOne');
  articleDesign.classList.remove('paletteTwo');
};

paletteRadiusOne.addEventListener('click', handleClickPaletteOne);
paletteRadiusTwo.addEventListener('click', handleClickPaletteTwo);
paletteRadiusThree.addEventListener('click', handleClickPaletteThree);





function resetForm() {
  
  wholeForm.reset();
  articleDesign.reset();
}
resetButton.addEventListener("click", resetForm);

