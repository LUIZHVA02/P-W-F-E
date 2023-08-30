'use strict'

const botaoMostrarTodosNumeros = document.getElementById('botao-mostrar-todos-numeros')
const botaoMostrarNumerosPares = document.getElementById('botao-mostrar-numeros-pares')
const botaoMostrarNumerosImpares = document.getElementById('botao-mostrar-numeros-impares')
const botaoMostrarNumerosMultiplosTresEQuatro = document.getElementById('botaoMostrarNumerosMultiplosTresEQuatro')

function mostrarTodosNumeros (){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-todos-numeros')

    container.replaceChildren('')
    const ultimoIndice = numeros.length
    
    for(let contador = 0; contador < ultimoIndice; contador++){
        const novoSpan = document.createElement('span')
        novoSpan.textContent = numeros[contador]
        
        container.appendChild(novoSpan)
    }
}

function mostrarNumerosPares (){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-numeros-pares')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for(let contador = 0; contador < ultimoIndice; contador++){
        if(numeros[contador] % 2 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[contador]
            container.appendChild(novoSpan)
        }
    }
}

function mostrarNumerosImpares (){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-numeros-impares')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for(let contador = 0; contador < ultimoIndice; contador++){
        if(numeros[contador] % 2 == 1){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[contador]
            container.appendChild(novoSpan)
        }
    }
}

function mostrarNumerosMultiplosTresEQuatro (){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-numeros-multiplos-tres-e-quatro')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for(let contador = 0; contador < ultimoIndice; contador++){
        if(numeros[contador] % 3 == 0 && numeros[contador] % 4 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[contador]
            container.appendChild(novoSpan)
        }
    }
}

botaoMostrarTodosNumeros.addEventListener('click', mostrarTodosNumeros)
botaoMostrarNumerosPares.addEventListener('click', mostrarNumerosPares)
botaoMostrarNumerosImpares.addEventListener('click', mostrarNumerosImpares)
botaoMostrarNumerosMultiplosTresEQuatro.addEventListener('click', mostrarNumerosMultiplosTresEQuatro)