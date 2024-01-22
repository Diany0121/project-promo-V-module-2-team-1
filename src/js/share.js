'use strict';
const createBtn = document.querySelector('.js-createBtn'); //boton crear naranja
const createdCard = document.querySelector('.js-createdcard'); //ya creado
const linkCard = document.querySelector('.js-linkCard');
createdCard.classList.add('hidden');

function handleShare(event) {
  //esto postea lo la usuaria ha metido
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
      renderButton();
    });
}

createBtn.addEventListener('click', handleShare); //esto devuelve un objeto

const finalCard = {
  success: '',
  cardURL: '',
};

function renderButton(results) {
  for (let result in finalCard) {
    if (results.success) {
      // Si el evento es exitoso
      linkCard.href = result.cardURL;
      linkCard.innerHTML = result.cardURL;
      createBtn.disabled = true;
      createdCard.innerHTML = 'La tarjeta ha sido creada: ';
    } else {
      // Si el evento no es exitoso
      createdCard.innerHTML =
        'Error: revisa los datos introducidos y haz click de nuevo en Crear Tarjeta';
      createBtn.disabled = false;
      createBtn.classList.remove('backgroundgrey');
    }
    createdCard.classList.toggle('hidden');
    createBtn.classList.toggle('backgroundgrey');
  }
}

/*
const responseObject = {
  success: true,
  cardURL: 'https://dev.adalab.es/card/17059309836014204',
};

// Acceder a la URL mediante la notación de punto
const url = responseObject.cardURL;

console.log(url); // Imprimirá "https://dev.adalab.es/card/17059309836014204"

// buttonShare.addEventListener('click', handleclickbutton);

/*
//boton naranja/gris y ocualtar seccion

const createClickCard = document.querySelector('.js-createCard');
const createdCard = document.querySelector('.js-createdcard');
const linkCard = document.querySelector('.js-linkCard');
const twiterBtn = document.querySelector('.js-twiterbtn');

createdCard.classList.add('hidden');

function api(event) {
  event.preventDefault();
  fetch('https://dev.adalab.es/api/card/', {
    method: 'POST',
    body: JSON.stringify(dataForm), //lo q rellena la usuaria
    headers: { 'Content-type': 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => {
      renderButton(data);
    })
    .catch((error) => {
      console.error('Ups! ha ocurrido un error', error);
    });
}

function handleShare(event) {
  if (event.success) {
    // Si el evento es exitoso
    linkCard.href = event.cardURL;
    linkCard.innerHTML = event.cardURL;
    buttonShare.disabled = true;
    createdCard.innerHTML = 'La tarjeta ha sido creada: ';
  } else {
    // Si el evento no es exitoso
    createdCard.innerHTML =
      'Error: revisa los datos introducidos y haz click de nuevo en Crear Tarjeta';
    buttonShare.disabled = false;
    buttonShare.classList.remove('backgroundgrey');
  }

  createdCard.classList.toggle('hidden');
  buttonShare.classList.toggle('backgroundgrey');
}

createClickCard.addEventListener('click', handleShare);

//buttonShare.addEventListener('click', handleclickbutton);

// function G(event) {
//   event.success ? (d.href = eevent.cardURL,
//   (js-linkCard) d.innerHTML = event.cardURL,
//    (boton naranja) l.disabled = !0,
//    (share error) m.innerHTML = "La tarjeta ha sido creada: ") : (m.innerHTML = "Error: revisa los datos introducidos y haz click de nuevo en Crear Tarjeta",
//    (btn0orange)l.disabled = !1,
//   (btn0orange) l.classList.remove("btnGrey"))

//   }

/*

const buttonShare = document.querySelector('.js-buttoncreate');
const createdCard = document.querySelector('.js-createdcard');
const linkCard = document.querySelector('.js-linkCard');
const orangeButton = document.querySelector('.btn0orange');

createdCard.classList.add('hidden');

function handleShare(event) {
  event.preventDefault();

  fetch('https://dev.adalab.es/api/card/', {
    method: 'POST',
    body: JSON.stringify(dataForm), //lo que rellena la usuaria
    headers: { 'Content-type': 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => {
      renderButton(data); // Pasa los datos del servidor a la función renderButton
    })
    .catch((error) => {
      console.error('Error:', error);
      renderButton({ success: false }); // Llama a renderButton con un objeto de éxito falso en caso de error
    });
}

buttonShare.addEventListener('click', handleShare);

function renderButton(event) {
  if (event.success) {
    // Si el evento es exitoso
    linkCard.href = event.cardURL;
    linkCard.innerHTML = event.cardURL;
    orangeButton.disabled = true;
    createdCard.innerHTML = 'La tarjeta ha sido creada: ';
  } else {
    // Si el evento no es exitoso
    createdCard.innerHTML =
      'Error: revisa los datos introducidos y haz click de nuevo en Crear Tarjeta';
    orangeButton.disabled = false;
    orangeButton.classList.remove('backgroundgrey');
  }

  createdCard.classList.toggle('hidden');
  orangeButton.classList.toggle('backgroundgrey');
}

*/
