'use strict'

const id_image = document.getElementById('image_id')

function criarImagem(imagem){
    const all = document.getElementById('all')
    const artWorkIMG = document.createElement('div')
    artWorkIMG.classList.add('artWorkIMG')
    const tagImg = document.createElement('img')
    tagImg.src = imagem

    all.appendChild(artWorkIMG)
    artWorkIMG.appendChild(tagImg)
}

async function pegarIDImagem(image_id){
    const url = `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`
    const response = await fetch(url)
    const imagens = await response.json()
    return imagens.message

}

async function pegarTitulo(title){
    const url = `https://api.artic.edu/api/v1/artworks/search?q={${title}}&&fields=id,title,artist_display,date_display,image_id,place_of_origin`
    const response = await fetch(url)
    const title = await response.json()
    return title.message
}

async function pegarAutor(artist_display){
    const url = `https://api.artic.edu/api/v1/artworks/search?q={${artist_display}}&&fields=id,title,artist_display,date_display,image_id,place_of_origin`
    const response = await fetch(url)
    const artist_display = await response.json()
    return artist_display.message
}

async function pegarAno(date_display){
    const url = `https://api.artic.edu/api/v1/artworks/search?q={${date_display}}&&fields=id,title,artist_display,date_display,image_id,place_of_origin`
    const response = await fetch(url)
    const date_display = await response.json()
    return date_display.message
}

async function pegarID(id){
    const url = `https://api.artic.edu/api/v1/artworks/${id}`
    const response = await fetch(url)
    const id = await response.json()
    return id.message
}

async function preencherCampos(){
    const image_id = document.getElementById('image_id')
    const artist_display = document.getElementById('artist_display')
    const date_display = document.getElementById('date_display')
    const id = document.getElementById('id')
    const title = document.getElementById('title')

    if(pegarIDImagem(image_id)!=null){
        const info = await pegarIDImagem(infoInput.value)

        artist_display.value = info.artist_display
        date_display.value = info.date_display
        id.value = info.id
        title.value = info.title

    } else if (pegarAutor(artist_display)!=null){
        const info = await pegarAutor(infoInput.value)

        image_id.value = info.image_id

        date_display.value = info.date_display
        id.value = info.id
        title.value = info.title

    } else if(pegarAno(date_display)!=null){
        const info = await pegarAno(infoInput.value)
        
        image_id.value = info.image_id
        artist_display.value = info.artist_display
        
        id.value = info.id
        title.value = info.title

    } else if (pegarID(id)!=null){
        const info = await pegarID(infoInput.value)

        image_id.value = info.image_id
        artist_display.value = info.artist_display
        date_display.value = info.date_display
        
        title.value = info.title

    } else if (pegarTitulo(title)!=null){
        const info = await pegarTitulo(infoInput.value)

        image_id.value = info.image_id
        artist_display.value = info.artist_display
        date_display.value = info.date_display
        id.value = info.id

    }

}
infoInput.addEventListener('focusout',preencherCampos)