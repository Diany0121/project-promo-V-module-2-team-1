// ARROW-Desing
const iconDesign = document.querySelector(".js-fieldset__legend");
const arrowUpDesign = document.querySelector(".fieldset__legend--arrowupDesign");
const arrowDownDesign = document.querySelector( ".fieldset__legend--arrowDownDesign");
const boxDesign = document.querySelector(".form__design--colors");



arrowDownDesign.classList.add("hidden");
function handleClickDesign() {
  boxDesign.classList.toggle("hidden");
  arrowUpDesign.classList.toggle("hidden");
  arrowDownDesign.classList.toggle("hidden");
}
iconDesign.addEventListener("click", handleClickDesign);

// ARROW-form
const iconForm = document.querySelector(".js-fieldsetLegendForm");
const arrowUpForm = document.querySelector(".fieldset__legend--arrowupForm");
const arrowDownForm = document.querySelector(".fieldset__legend--arrowDownForm");
const boxForm = document.querySelector(".boxToBeHidden");

boxForm.classList.add("hidden");
arrowUpForm.classList.add("hidden");
function handleClick(box, arrowUp, arrowDown) {
  box.classList.toggle("hidden");
  arrowUp.classList.toggle("hidden");
  arrowDown.classList.toggle("hidden");
}
iconForm.addEventListener("click", function () {
  handleClick(boxForm, arrowUpForm, arrowDownForm);
});

// ARROW-Share

const iconShare = document.querySelector(".js-fieldsetLegendShare");
const arrowUpShare = document.querySelector(".fieldset__legend--arrowupShare");
const arrowDownShare = document.querySelector( ".fieldset__legend--arrowDownShare");
const boxShare = document.querySelector(".fieldset__boxcontent");

boxShare.classList.add("hidden");
arrowUpShare.classList.add("hidden");
function handleClickShare() {
  boxShare.classList.toggle("hidden");
  arrowUpShare.classList.toggle("hidden");
  arrowDownShare.classList.toggle("hidden");
}
iconShare.addEventListener("click", handleClickShare);


// function newfuncion () {
// if(handleClickDesign){
//     boxDesign.classList.remove ('hidden');
//     boxForm.classList.add ('hidden');
//     boxShare.classList.add('hidden');  
//  } else if (handleClick){
//     boxDesign.classList.add ('hidden');
//     boxForm.classList.remove ('hidden');
//     boxShare.classList.add('hidden'); 
//  } else if (handleClickShare){
//     boxDesign.classList.add ('hidden');
//     boxForm.classList.add ('hidden');
//     boxShare.classList.remove('hidden'); 
//  }

//  }

//  newfuncion();

