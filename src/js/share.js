//boton naranja/gris y ocualtar seccion

const buttonShare = document.querySelector('.js-buttoncreate');
const createdCard = document.querySelector('.js-createdcard');
createdCard.classList.add('hidden');

function handleShare(event) {
  event.preventDefault();
  fetch('https://dev.adalab.es/api/card/', {
    method: 'POST',
    body: JSON.stringify(dataForm),
    headers: { 'Content-type': 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}
buttonShare.addEventListener('click', handleShare);

function handleclickbutton(event) {
  event.preventDefault();
  createdCard.classList.toggle('hidden');
  buttonShare.classList.toggle('backgroundgrey');
}

buttonShare.addEventListener('click', handleclickbutton);
