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
  console.log(inputName); //para comprobar q la info entra
  console.log(dataForm); //para comprobar que la info entra donde debe
  // if (inputId === 'name') {
  //   dataForm.name = event.target.value;
  // } else if (inputId === 'job') {
  //   dataForm.job = event.target.value;
  // } else if (inputId === 'phone') {
  //   dataForm.phone = event.target.value;
  // } else if (inputId === 'email') {
  //   dataForm.email = event.target.value;
  // } else if (inputId === 'linkedin') {
  //   dataForm.linkedin = event.target.value;
  // } else if (inputId === 'github') {
  //   dataForm.github = event.target.value;
  // } else if (inputId === 'photo') {
  //   dataForm.photo = writeImage(); // falta la foto y el url,paleta aqui.
  // }
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
