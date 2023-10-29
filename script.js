const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event){
    if (event.type === 'touchstart') event.preventDeafault();
    const nav = document.getElementById('nav');   
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active){
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

window.addEventListener("scroll", function(){ //adiciona um evento para scrool (rolagem da tela)
    let header = document.querySelector('#header') //seleciona a id "header" e transforma em uma variavel
    header.classList.toggle('rolagem', window.scrollY > 300) //add uma classe ao header, ela n existia antes, ela podera ser add ou removida usando o JS
})