const btnHamburguer = document.querySelector('#btnHamburguer');
const body =document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems =document.querySelectorAll('.has-fade');

btnHamburguer.addEventListener('click', function(){
    
    if(header.classList.contains('open')){ // close hamburguer menu
        body.classList.remove('noscroll')
        header.classList.remove('open'); // remove open
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in'); // remove fade-in
            element.classList.add('fade-out'); // add fade-out
        });
        

    } else {
        body.classList.add('noscroll')
        header.classList.add('open'); // add open
        fadeElems.forEach(function(element){
            element.classList.remove('fade-out'); // remove fadeout
            element.classList.add('fade-in'); // add fade-in
        });
    }
});