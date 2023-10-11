'use strict'

const botaoSomar = document.getElementById('somar')
const botaoIdentificar = document.getElementById('identificar')
const botaoMedia = document.getElementById('media')
const botaoOrdenar = document.getElementById('ordenar')

function somar(){
    const numero1 = parseInt (document.getElementById('numero1').value)
    const numero2 = parseInt (document.getElementById('numero2').value)
    const resultado = document.getElementById('resultado')

    const total = numero1+numero2

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

function calcularMedia(){
    const n1 = parseFloat (document.getElementById('n1').value)
    const n2 = parseFloat (document.getElementById('n2').value)
    const n3 = parseFloat (document.getElementById('n3').value)
    const n4 = parseFloat (document.getElementById('n4').value)
    const nota5 = document.getElementById('n5')
    const situacao = document.getElementById('situacao')

    const media = (n1+n2+n3+n4)/4

    if(media >= 7){
        situacao.textContent = 'Aprovado'
    } else if (media < 7) {
        situacao.textContent = 'Recuperação'
        
    } 
    var n5 = 0
    n5 = prompt ('Digite a Nota do Exame (nota 5)')
    nota5.textContent = n5
    const media2 = (media + n5)/2
    if(media2 >= 5){
        situacao2.textContent = 'Aprovado em Exame'
    } else {
        situacao2.textContent = 'Reprovado'
    }
}

function ordenar(){
    const vA = parseFloat(document.getElementById('vA'))
    const vB = parseFloat(document.getElementById('vB'))
    const vC = parseFloat(document.getElementById('vC'))

    if(vA - vB > 0 && vA - vC > 0 && vC - vB > 0){
        const valor1 = vA
        const valor2 = vC
        const valor3 = vB
        ordem.textContent = valor1 + valor2 + valor3

    } else if (vB - vA > 0 && vB - vC > 0 && vA - vC > 0){
        const valor1 = vB
        const valor2 = vA
        const valor3 = vC
        ordem.textContent = valor1 + valor2 + valor3


    } else if (vC - vA > 0 && vC - vB > 0 && vB - vA > 0){
        const valor1 = vC
        const valor2 = vB
        const valor3 = vA
        ordem.textContent = valor1 + valor2 + valor3

    }

}

botaoSomar.addEventListener('click', somar)
botaoIdentificar.addEventListener('click', identificar)
botaoMedia.addEventListener('click', calcularMedia)
botaoOrdenar.addEventListener('click', ordenar)