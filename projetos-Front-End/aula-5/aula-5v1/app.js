'use strict'

const funcioarios = [
    
    {
        nome: 'Maria Souza',
        cargo: 'Designer',
        imagem: 'maria.jpg'
    },
    {
        nome:'Hugo Pereira',
        cargo: 'Front End',
        imagem: 'hugo.jpg'
    },
    {
        nome: 'João Silva',
        cargo: ' DBA',
        imagem: 'joao.jpg'
    },
    {
        nome: 'Ana Maria',
        cargo: 'BackEnd',
        imagem: 'ana.jpg' 
    }

]

function mostrarCards(funcioarios){
    const cardContainer = document.getElementById('card-container')

    const card = document.createElement('div')
    card.classList.add('card')

    const imagem = document.createElement('img')
    imagem.src = `./img/${funcioarios.imagem}`
    imagem.alt = funcioarios.nome

    const cardDescricao = document.createElement('div')
    cardDescricao.classList.add('card-descricao')

    const nome = document.createElement('h2')
    nome.textContent = funcioarios.nome

    const cargo = document.createElement('p')
    cargo.textContent = funcioarios.cargo

    cardDescricao.replaceChildren(nome, cargo)
    card.replaceChildren(imagem, cardDescricao)
    cardContainer.appendChild(card)
}

funcioarios.forEach(mostrarCards)