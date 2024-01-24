'use strict';

// Variables para los elementos de HTML de la tarjeta
const resetButton = document.querySelector('.js_reset_btn');
const profileName = document.querySelector('.js-name');
const profileJob = document.querySelector('.js-job');
const articleDesign = document.querySelector('.js-designCards');
const wholeForm = document.querySelector('.wholeForm');

// Variables para los elementos del HTML de la tarjeta, la parte de Diseña
const palette = document.querySelector('.js-designPalette');
const paletteRadiusOne = document.querySelector('.js-paletteOne');
const paletteRadiusTwo = document.querySelector('.js-paletteTwo');
const paletteRadiusThree = document.querySelector('.js-paletteThree');

function handleClickPaletteOne() {
  articleDesign.classList.add('paletteOne');
  articleDesign.classList.remove('paletteTwo', 'paletteThree');
}

function handleClickPaletteTwo(event) {
  articleDesign.classList.add('paletteTwo');
  articleDesign.classList.remove('paletteOne', 'paletteThree');
}

function handleClickPaletteThree() {
  articleDesign.classList.add('paletteThree');
  articleDesign.classList.remove('paletteOne', 'paletteTwo');
}

paletteRadiusOne.addEventListener('click', handleClickPaletteOne);
paletteRadiusTwo.addEventListener('click', handleClickPaletteTwo);
paletteRadiusThree.addEventListener('click', handleClickPaletteThree);

function resetCard() {
  articleDesign.classList.remove('paletteOne', 'paletteTwo', 'paletteThree');
  //dataForm[inputId] = event.target.value;

  //dataForm.name= ''; // tambien funciona para el reset
  //dataForm.job= '';

  for (const dato in dataForm) {
    dataForm[dato] = '';
  }
  profileName.innerHTML = 'Nombre Apellido';
  profileJob.innerHTML = 'Front-end developer';
  profileImage.style.backgroundImage = `url("../images/valentina.jpg")`;
  profilePreview.style.backgroundImage = `url("../images/valentina.jpg")`;
  phoneCard.href = `tel:`;
  emailCard.href = `mailto:`;
  linkedinCard.href = `https://www.linkedin.com/`;
  gitCard.href = `https://github.com`;
}


function reset() {
  wholeForm.reset();
  resetCard();

  localStorage.removeItem('AwesomeCard');
}
resetButton.addEventListener('click', reset);
