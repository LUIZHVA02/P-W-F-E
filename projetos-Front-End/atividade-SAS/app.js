'use strict'

const infoInput = document.getElementById('ids')

async function pegarIDImagem(image_ids) {
    const url = `https://www.artic.edu/iiif/2/${image_ids}/full/843,/0/default.jpg`
    const response = await fetch(url)
    const imagens = await response.json()
    return imagens.message

}
// https://api.artic.edu/api/v1/artworks/search?q=double-portrait-of-fran%C3%A7ois-heurtier-and-his-wife-marie-victoire-jobb%C3%A9-in-profile
async function pegarTitulo(titles) {
    const url = `https://api.artic.edu/api/v1/artworks/search?q=${titles}&&fields=id,title,artist_title,date_display,image_id,place_of_origin`
    const response = await fetch(url)
    const title = await response.json()
    return title
}

async function pegarAutor(artist_titles) {
    const url = `https://api.artic.edu/api/v1/artworks/search?q=${artist_titles}&&fields=id,title,artist_title,date_display,image_id,place_of_origin`
    const response = await fetch(url)
    const artist_title = await response.json()
    return artist_title
}

async function pegarAno(date_displays) {
    const url = `https://api.artic.edu/api/v1/artworks/search?q=${date_displays}&&fields=id,title,artist_title,date_display,image_id,place_of_origin`
    const response = await fetch(url)
    const date_display = await response.json()
    return date_display
}

async function pegarID(ids) {
    const url = `https://api.artic.edu/api/v1/artworks/${ids}`
    const response = await fetch(url)
    const artist_titles = await response.json()
    return artist_titles
}

async function preencherCamposID() {
    const image_ids = document.getElementById('image_ids')
    const artist_title = document.getElementById('artist_titles')
    const date_display = document.getElementById('date_displays')
    const title = document.getElementById('titles')

    const info = await pegarID(infoInput.value)

        image_ids.value = info.data.image_id
        artist_title.value = info.data.artist_title
        date_display.value = info.data.date_display
        title.value = info.data.title

}
infoInput.addEventListener('focusout', preencherCamposID)