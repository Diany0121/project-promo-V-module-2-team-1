//boton naranja/gris y ocualtar seccion

const buttonShare = document.querySelector('.js-buttoncreate');
const createdCard = document.querySelector('.js-createdcard');
createdCard.classList.add('hidden');

function handleShare(event) {
  event.preventDefault();
  console.log(dataForm);
  fetch('https://dev.adalab.es/api/card/', {
    method: 'POST',
    body: JSON.stringify(dataForm),
    headers: { 'Content-type': 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      renderButton ();
    });
   
    
}
buttonShare.addEventListener('click', handleShare); 

function renderButton() {
  
  createdCard.classList.toggle('hidden');
  buttonShare.classList.toggle('backgroundgrey');
}

// buttonShare.addEventListener('click', handleclickbutton);
