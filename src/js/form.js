'use strict';
// INTRODUCIR DATOS
const nameCard = document.querySelector('.js-name-card');
const nameForm = document.querySelector('.js-name-form');
const jobCard = document.querySelector('.js-job-card');
const jobForm = document.querySelector('.js-job-form');
const form = document.querySelector('.js-form');
const formContainer = document.querySelector('.js-form-container');
// const imgCard = document.querySelector('.js-img-card');
// const imgForm = document.querySelector('.js-img-form');

// ESTO ES PARA TENER LOS DATOS Q METE EL USUARIO EN EL OBJETO QUE LUEGO IRA A LA API
const dataForm = {
  palette: '',
  name: '',
  job: '',
  phone: '',
  email: '',
  linkedin: '',
  github: '',
  photo: '',
};

// CADA INPUT DEL FORM TIENE QUE TENER UN ID CON EL NOMBRE DE CADA OBJETO

const handleForm = (event) => {
  const inputName = event.target.name; //DA EL VALOR QUE TIENE LOS INPUT EN EL VALOR ID, QUE SERA EL OBJETO
  dataForm[inputName] = event.target.value; //CON dataForm ENTRO EN LA PROPIEDAD [--inputId--] y con target.value cojo el valor
};

formContainer.addEventListener('input', handleForm);

function writeName(event) {
  event.preventDefault();
  const nameFormValue = nameForm.value;
  if (nameFormValue === '') {
    nameCard.innerHTML = 'Nombre Apellido';
  } else {
    nameCard.innerHTML = nameFormValue;
  }
}
function writeJob(event) {
  event.preventDefault();
  const jobFormValue = jobForm.value;
  if (jobFormValue === '') {
    jobCard.innerHTML = 'Front-end developer';
  } else {
    jobCard.innerHTML = jobFormValue;
  }
}

nameForm.addEventListener('input', writeName);
jobForm.addEventListener('input', writeJob);
