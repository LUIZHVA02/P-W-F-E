'use strict'

const forma1 = document.getElementById('forma1')
const forma2 = document.getElementById('forma2')
const forma3 = document.getElementById('forma3')
const forma4 = document.getElementById('forma4')
const forma5 = document.getElementById('forma5')
const forma6 = document.getElementById('forma6')
const forma7 = document.getElementById('forma7')
const forma8 = document.getElementById('forma8')

function mudarCor (){
    forma1.classList.toggle('vermelho')
}
function mudarForma (){
    forma2.classList.toggle('circulo')
}
function girar (){
    forma3.classList.toggle('girar')
}
function mudarForma2 (){
    forma4.classList.toggle('triangulo')
}
function link (){
    window.location.href ="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    forma5.classList.toggle('link')
}

forma1.addEventListener('click', mudarCor)
forma2.addEventListener('click', mudarForma)
forma3.addEventListener('click', girar)
forma4.addEventListener('click', mudarForma2)
forma5.addEventListener('click', link)