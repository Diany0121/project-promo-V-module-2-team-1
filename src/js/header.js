/*

window.onscroll = function(){
    if (document.window.scrollTop>0){
        document.getElementsByClassName('header2').style.position = 'fixed';
    } else {
        document.getElementsByClassName('header2').style.position = 'unset';
    }
};*/

const header = document.querySelector('.js-header');
const btn = document.querySelector('.js-buton');

btn.addEventListener('click', () => {
    header.classList.toggle ('header2');
    header.classList.toggle ('header');
});


/*if{
    btn.addEventListener ('click', () =>{
        classList.toggle ('header2')
    })
}*/

