// ARROW
const icon = document.querySelector('.icon');
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
// RESET

const resetButton = document.querySelector('.');
function resetForm() {
    const holeForm = document.querySelector('.holeForm');
    holeForm.reset();
};
resetButton.addEventListener('click', resetForm);

