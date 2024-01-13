'use strict';

const phoneCard = document.querySelector ('.js-phone-card');
const emailCard = document.querySelector ('.js-mail-card');
const linkedinCard = document.querySelector ('.js-linkedin-card');
const gitCard = document.querySelector ('.js-git-card');
const phoneForm = document.querySelector ('.js-phone-form');
const emailForm = document.querySelector ('.js-mail-form');
const linkedinForm = document.querySelector ('.js-linkedin-form');
const gitForm = document.querySelector ('.js-git-form');


//1 constantes
//2 funciones recoja el valor del input y lo pegue en el valor del atributo de la etiqueta a
//3 evento 

function handleMail () {
 emailCard.href = `mailto:${emailForm.value}`; 
};
emailForm.addEventListener('input', handleMail);

function handlePhone () {
    phoneCard.href = `tel:${phoneForm.value}`; 
   };
phoneForm.addEventListener('input', handlePhone);
   
function handleLinkedin () {
    linkedinCard.href = `https://www.linkedin.com/in/${linkedinForm.value}`; 
   };
linkedinForm.addEventListener('input', handleLinkedin);

function handleGitHub () {
     gitCard.href = `https://github.com/${gitForm.value}`; 
    };
gitForm.addEventListener('input', handleGitHub);
