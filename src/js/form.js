
// ARROW
const iconForm = document.querySelector('.js-iconForm');
const arrowUpForm = document.querySelector('.fieldset__legend--arrowupForm');
const arrowDownForm = document.querySelector('.fieldset__legend--arrowDownForm');
const boxForm = document.querySelector('.boxToBeHidden');
arrowDownForm.classList.add('hidden');
function handleClick(box, arrowUp, arrowDown) {    
    box.classList.toggle('hidden'); 
    arrowUp.classList.toggle('hidden');
    arrowDown.classList.toggle('hidden');  
};
iconForm.addEventListener('click', handleClick(boxForm, arrowUpForm, arrowDownForm));

// CREAR TARJETA
// const buttonCard = document.querySelector('.js-buttonCreate');
// const nameCard = document.getElementById('name');
// console.Log(nameCard);

//AÑADIR NOMBRE
// inputName.addEventListener("input", () => {
//     previewName.innerHTML = inputName.value;
//     previewJob.innerHTML = inputJob.value;
// });
