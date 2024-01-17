// Const-Desing
const iconDesign = document.querySelector('.js-fieldset__legend');
const arrowUpDesign = document.querySelector(
  '.fieldset__legend--arrowupDesign'
);
const arrowDownDesign = document.querySelector(
  '.fieldset__legend--arrowDownDesign'
);
const boxDesign = document.querySelector('.form__design--colors');
// Const-form
const iconForm = document.querySelector('.js-fieldsetLegendForm');
const arrowUpForm = document.querySelector('.fieldset__legend--arrowupForm');
const arrowDownForm = document.querySelector(
  '.fieldset__legend--arrowDownForm'
);
const boxForm = document.querySelector('.boxToBeHidden');
// Const-Share
const iconShare = document.querySelector('.js-fieldsetLegendShare');
const arrowUpShare = document.querySelector('.fieldset__legend--arrowupShare');
const arrowDownShare = document.querySelector(
  '.fieldset__legend--arrowDownShare'
);
const boxShare = document.querySelector('.fieldset__boxcontent');
// Plantilla inicial de la página
arrowDownDesign.classList.add('hidden');
boxForm.classList.add('hidden');
arrowUpForm.classList.add('hidden');
boxShare.classList.add('hidden');
arrowUpShare.classList.add('hidden');
// MEGA FUNCTION
function renderClick(event) {
  const containerCollapse = event.currentTarget;
  console.log(containerCollapse);
  if (containerCollapse.classList.contains('js-design')) {
    boxDesignOpen();
    boxFormClose();
    boxShareClose();
  } else if (containerCollapse.classList.contains('js-form')) {
    boxDesignClose();
    boxFormOpen();
    boxShareClose();
  } else if (containerCollapse.classList.contains('js-share')) {
    boxDesignClose();
    boxFormClose();
    boxShareOpen();
  }
}
// boxDesign close
function boxDesignClose() {
  arrowUpDesign.classList.add('hidden');
  arrowDownDesign.classList.remove('hidden');
  boxDesign.classList.add('hidden');
}
// boxDesign Open
function boxDesignOpen() {
  arrowUpDesign.classList.remove('hidden');
  arrowDownDesign.classList.add('hidden');
  boxDesign.classList.remove('hidden');
}
// boxForm close
function boxFormClose() {
  arrowUpForm.classList.add('hidden');
  arrowDownForm.classList.remove('hidden');
  boxForm.classList.add('hidden');
}
// boxForm Open
function boxFormOpen() {
  arrowUpForm.classList.remove('hidden');
  arrowDownForm.classList.add('hidden');
  boxForm.classList.remove('hidden');
}
// boxShare close
function boxShareClose() {
  arrowUpShare.classList.add('hidden');
  arrowDownShare.classList.remove('hidden');
  boxShare.classList.add('hidden');
}
// boxShare Open
function boxShareOpen() {
  arrowUpShare.classList.remove('hidden');
  arrowDownShare.classList.add('hidden');
  boxShare.classList.remove('hidden');
}
// Eventos
iconDesign.addEventListener('click', renderClick);
iconForm.addEventListener('click', renderClick);
iconShare.addEventListener('click', renderClick);
