
const header = document.querySelector('.js-header');
const btn = document.querySelector('.js-buton'); //buton esta en landing

function handleClick () {

    if( estoy en landing){
        header.classList.add ('header');
    }
    else { //si estoy en las otras paginas 
        header.classList.add ('header2');
    }

};

btn.addEventListener('click', handleclick)






