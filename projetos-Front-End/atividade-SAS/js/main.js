'use strict'

import { pegarObrasArte } from "./app.js"

async function criaCardObra(obrasDeArte, index) {
    console.log(obrasDeArte);

    const i = index
    const image_ids_content = obrasDeArte.id
    const id = obrasDeArte.id
    const artist_title_content = obrasDeArte.artist_title
    const date_display_content = obrasDeArte.date_display
    const title_content = obrasDeArte.title

    const card = document.createElement('div')
    card.classList.add('cardObras')

    const id_obra = document.createElement('h2')
    id_obra.classlist.add('id-obra')
    id_obra.textContent = id

    const image_id = document.createElement('h2')
    image_id.classlist.add('image_ids')
    image_id.textContent = image_ids_content
    
    const artist_title = document.createElement('h2')
    artist_title.classlist.add('artist_titles')
    artist_title.textContent = artist_title_content
    
    const date_display = document.createElement('h2')
    date_display.classlist.add('date_displays')
    date_display.textContent = date_display_content
    
    const title = document.createElement('h2')
    title.classlist.add('titles')
    title.textContent = title_content

    card.append(id_obra, image_id, artist_title, date_display, title)

    return card
}

async function preencherCampos() {
    const all = document.getElementById('all')
    const obrasArte = await pegarObrasArte()
    let i = 0


    obrasArte.data.forEach(obra => {

        const card = criaCardObra(obra, i)
        all.appendChild(card)
        
        i++
    });
}

window.onload = async () => {
    
    const obrasArte = await pegarObrasArte()
    preencherCampos()
    // criaCardObra()
}