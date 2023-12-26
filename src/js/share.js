// ARROW
const iconShare = document.querySelector('.js-iconShare');
const arrowUpShare = document.querySelector('.fieldset__legend--arrowupShare');
const arrowDownShare = document.querySelector('.fieldset__legend--arrowDownShare');
const boxShare = document.querySelector('.fieldset__boxcontent');
arrowDownShare.classList.add('hidden');
function handleClickShare() {    
    boxShare.classList.toggle('hidden'); 
    arrowUpShare.classList.toggle('hidden');
    arrowDownShare.classList.toggle('hidden');  
};
iconShare.addEventListener('click', handleClickShare);
