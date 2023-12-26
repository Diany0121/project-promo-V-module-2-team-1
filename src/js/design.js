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
