'use strict';

// const resetButton = document.querySelector('.');
// function resetForm() {
//     const holeForm = document.querySelector('.holeForm');
//     holeForm.reset();
// };
// resetButton.addEventListener('click', resetForm);



// ARROW
const iconDesign = document.querySelector('.js-iconDesign');
const arrowUpDesign = document.querySelector('.fieldset__legend--arrowupDesign');
const arrowDownDesign = document.querySelector('.fieldset__legend--arrowDownDesign');
const boxDesign = document.querySelector('.form__design--colors');
arrowDownDesign.classList.add('hidden');
function handleClickDesign() {    
    boxDesign.classList.toggle('hidden'); 
    arrowUpDesign.classList.toggle('hidden');
    arrowDownDesign.classList.toggle('hidden');  
};
iconDesign.addEventListener('click', handleClickDesign);



//const paleteOne = document.querySelector('.js-paleteOne');
//const cardDesign = document.querySelector('.js-design');


//function handleClick(){
    //cardDesign.classList.toggle('paletteOne');
//};
//paleteOne.addEventListener('click', handleClick);

//paleteOne.removeEventListener('click', () => {
    //cardDesign.classList.add("paletteOne");
//});


