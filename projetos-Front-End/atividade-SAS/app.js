'use strict'

async function criarImagem(image_id){
    const url = `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`
    const response = await fetch(url)
    const imagens = await response.json()
    return imagens.message

}

async function pegarImagens(imagem){
    const artWork = document.getElementById('artWork')
    const tagImg = document.createElement('img')
    tagImg.src = imagem
    artWork.appendChild(tagImg)
}

async function pegarTitle(){

}

async function pegarAuthor(){

}

async function pegarYear(){

}

async function pegarID(id){
    const url = `https://api.artic.edu/api/v1/artworks/${id}`
    const response = await fetch(url)

}

async function preencherCampos(){

}