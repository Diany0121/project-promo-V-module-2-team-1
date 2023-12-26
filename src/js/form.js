
// ARROW
const icon = document.querySelector('.js-iconForm');
const arrowUp = document.querySelector('.fieldset__legend--arrowup');
const arrowDown = document.querySelector('.fieldset__legend--arrowDown');
const box = document.querySelector('.boxToBeHidden');
arrowDown.classList.add('hidden');
function handleClick() {    
    box.classList.toggle('hidden'); 
    arrowUp.classList.toggle('hidden');
    arrowDown.classList.toggle('hidden');  
};
icon.addEventListener('click', handleClick);

//AÑADIR NOMBRE
// inputName.addEventListener("input", () => {
//     previewName.innerHTML = inputName.value;
//     previewJob.innerHTML = inputJob.value;
// });
