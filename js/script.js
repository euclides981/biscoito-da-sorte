import sortes from "./mockup.js";

var frase = document.querySelector('.frase')

var gerador = document.getElementById('gerador')

const fraseSorteada = sortes[Math.floor(Math.random() * sortes.length)]

frase.innerHTML = fraseSorteada

gerador.addEventListener('click', () => {

    window.location.reload()

})
