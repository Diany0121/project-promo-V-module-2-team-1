
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
iconForm.addEventListener('click', function() {
    handleClick(boxForm, arrowUpForm, arrowDownForm);
});
 // INTRODUCIR DATOS
const nameCard = document.querySelector('.js-name-card');
const nameForm = document.querySelector('.js-name-form');
const jobCard = document.querySelector('.js-job-card');
const jobForm = document.querySelector('.js-job-form');
// const imgCard = document.querySelector('.js-img-card');
// const imgForm = document.querySelector('.js-img-form');
function writeName (event) {
    event.preventDefault();
    const nameFormValue = nameForm.value;
    if (nameFormValue === '' ){
        nameCard.innerHTML = 'Nombre Apellido'; 
    } else {
        nameCard.innerHTML= nameFormValue;
    };
};
function writeJob (event) {
    event.preventDefault();
    const jobFormValue = jobForm.value;
    if (jobFormValue === '' ){
        jobCard.innerHTML= 'Front-end developer';
    } else {
        jobCard.innerHTML = jobFormValue;
    }
};

nameForm.addEventListener('input', writeName);
jobForm.addEventListener('input', writeJob);

const dataForm = {
  palette: 1,
  name: "",
  job: "",
  phone: "",
  email: "",
  linkedin: "",
  github: "",
  photo: "",
};

pepino.addEventListener('input', )





















