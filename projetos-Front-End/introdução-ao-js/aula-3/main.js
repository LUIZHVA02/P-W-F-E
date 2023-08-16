'use strict'

const botaoSomar = document.getElementById('somar')
const botaoIdentificar = document.getElementById('identificar')

function somar(){
    const numero1 = parseInt (document.getElementById('numero1').value)
    const numero2 = parseInt (document.getElementById('numero2').value)
    const resultado = document.getElementById('resultado')

    const total= numero1+numero2

    resultado.textContent = total
}

function identificar(){
    const numero = parseInt (document.getElementById('numero').value)
    const resultado = document.getElementById('resultado-item-2')

    if(numero > 0){
        resultado.textContent = 'Positivo'
    } else if (numero < 0) {
        resultado.textContent = 'Negativo'
    } else {
        resultado.textContent = 'Zero'
    }
}

botaoSomar.addEventListener('click', somar)
botaoIdentificar.addEventListener('click', identificar)