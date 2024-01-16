// ARROW-Desing
const iconDesign = document.querySelector('.js-fieldset__legend');
const arrowUpDesign = document.querySelector('.fieldset__legend--arrowupDesign');
const arrowDownDesign = document.querySelector('.fieldset__legend--arrowDownDesign');
const boxDesign = document.querySelector('.form__design--colors');


function clickDesign() {
  arrowUpDesign.classList.toggle('hidden');
  arrowDownDesign.classList.toggle('hidden');
  boxDesign.classList.remove('hidden');
  boxForm.classList.add('hidden');
  boxShare.classList.add('hidden');
}

iconDesign.addEventListener('click', collapse);

// ARROW-form
const iconForm = document.querySelector('.js-fieldsetLegendForm');
const arrowUpForm = document.querySelector('.fieldset__legend--arrowupForm');
const arrowDownForm = document.querySelector('.fieldset__legend--arrowDownForm');
const boxForm = document.querySelector('.boxToBeHidden');

                                   

function clickForm() {
  arrowUpForm.classList.toggle('hidden');
  arrowDownForm.classList.toggle('hidden');
  boxDesign.classList.add('hidden');
  boxForm.classList.remove('hidden');
  boxShare.classList.add('hidden');
}
iconForm.addEventListener('click', collapse);

// ARROW-Share

const iconShare = document.querySelector('.js-fieldsetLegendShare');
const arrowUpShare = document.querySelector('.fieldset__legend--arrowupShare');
const arrowDownShare = document.querySelector(
  '.fieldset__legend--arrowDownShare'
);
const boxShare = document.querySelector('.fieldset__boxcontent');



function clickShare() {
  arrowUpShare.classList.toggle('hidden');
  arrowDownShare.classList.toggle('hidden');
  boxDesign.classList.add('hidden');
  boxForm.classList.add('hidden');
  boxShare.classList.remove('hidden');
}

iconShare.addEventListener('click', collapse);

function collapse(event) {
  const containerCollapse = event.currentTarget;
  console.log(containerCollapse);
  if (containerCollapse.classList.contains('js-design')) {
    clickDesign();
  } else if (containerCollapse.classList.contains('js-form')) {
    clickForm();
  } else if (containerCollapse.classList.contains('js-share')) {
    clickShare();
  }
}
