'use strict'

const botaoSomar = document.getElementById('somar')

function somar(){
    const numero1 = parseInt (document.getElementById('numero1').value)
    const numero2 = parseInt (document.getElementById('numero2').value)
    const resultado = document.getElementById('resultado')

    const total= numero1+numero2

    resultado.textContent = total
}

botaoSomar.addEventListener('click', somar)