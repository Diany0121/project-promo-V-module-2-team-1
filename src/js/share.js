"use strict";
const createBtn = document.querySelector(".js-createBtn"); //boton crear naranja
const createdCard = document.querySelector(".js-createdcard"); //ya creado
const linkCard = document.querySelector(".js-linkCard");
const errorCard = document.querySelector(".js-errorcard");
const errorCardTitle = document.querySelector(".js-errorcard-title");

function handleShare(event) {
  //esto postea lo la usuaria ha metido
  event.preventDefault();

  fetch("https://dev.adalab.es/api/card/", {
    method: "POST",
    // eslint-disable-next-line no-undef
    body: JSON.stringify(dataForm),
    headers: { "Content-type": "application/json" },
  })
    .then((response) => response.json())
    .then((result) => {
      createdCard.classList.add("hidden");
      errorCard.classList.add("hidden");
      // api devuelve estos datos en caso de que todo vaya bien
      // { success: true, cardURL: 'https://dev.adalab.es/card/17059446533996460' }
      if (result.success === true) return renderShare(result.cardURL);

      if (result.error.includes("ER_DATA_TOO_LONG")) {
        renderError("La imagen es muy grande");
      } else {
        renderError(result.error);
      }
    });
  setInLocalStorage();
}

createBtn.addEventListener("click", handleShare); //esto devuelve un objeto

function renderShare(cardURL) {
  // 1. cambiar el link
  linkCard.setAttribute("href", cardURL);
  // 2. cambiar el contenido del link
  linkCard.innerHTML = cardURL;
  createBtn.classList.add("backgroundgrey");
  // 3. cambiar el texto de twitter
  const twitterButton = document.querySelector(".js-twitter-button");
  const twitterHref = twitterButton.getAttribute("href");
  twitterButton.setAttribute(
    "href",
    twitterHref + encodeURIComponent(`Mira mi nueva tarjeta ${cardURL}`)
  );
  // 4. quitar la clase hidden de share
  createdCard.classList.remove("hidden");
}

function renderError(errorMessage) {
  // 1. añadir el error a el titulo
  errorCardTitle.innerHTML = `Error! ${errorMessage}`;
  // 2. eliminar clase hidden de error card
  errorCard.classList.remove("hidden");
}

//LOCAL STORAGE

const setInLocalStorage = () => {
  const stringifyCard = JSON.stringify(dataForm);
  localStorage.setItem("AwesomeCard", stringifyCard);
};

function getFromLocalStorage() {
  const storedData = localStorage.getItem("AwesomeCard");
  if (storedData) {
    const parsedData = JSON.parse(storedData);
    return parsedData;
  } else {
    return null;
  }
}
// Ejemplo de cómo usar la función
const storedData = getFromLocalStorage();
if (storedData) {
  // Hacer algo con los datos recuperados, por ejemplo:
  profileName.innerHTML = storedData.name || "Nombre Apellido";
  profileJob.innerHTML = storedData.job || "Front-end developer";
  profileImage.style.backgroundImage = `url(${storedData.photo})` || "url(placeholder.jpg)";
  profilePreview.style.backgroundImage = `url(${storedData.photo})` || "url(placeholder.jpg)";
  phoneCard.href = `tel:${storedData.value}`; 
  emailCard.href = `mailto:${storedData.value}`;
  linkedinCard.href = `https://www.linkedin.com/in/${storedData.value}`;
  gitCard.href = `https://github.com/${storedData.value}`;

  if (storedData.palette === "1") {
    handleClickPaletteOne();
  } else if (storedData.palette === "2") {
    handleClickPaletteTwo();
  } else if (storedData.palette === "3") {
    handleClickPaletteThree();
  }
}
