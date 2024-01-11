

//boton naranja/gris y ocualtar seccion

const buttonShare = document.querySelector(".js-buttoncreate");
const createdCard = document.querySelector(".js-createdcard");
createdCard.classList.add("hidden");

 function handleclickbutton (event) {
   event.preventDefault();
   createdCard.classList.toggle("hidden");
  buttonShare.classList.toggle("backgroundgrey");
  
};

buttonShare.addEventListener("click", handleclickbutton);

