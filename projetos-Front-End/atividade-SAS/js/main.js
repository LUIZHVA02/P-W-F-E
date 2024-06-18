'use strict'

import { pegarImagens, pegarObrasArte } from "./app.js"

export function criaCardObra(obraDeArte) {
    const id = obraDeArte.id
    const image_ids_content = obraDeArte.imageLink
    const artist_title_content = obraDeArte.artist_title
    const date_display_content = obraDeArte.date_display
    const title_content = obraDeArte.title

    const card = document.createElement('div')
    card.classList.add('cardObras')

    const id_obra = document.createElement('h2')
    id_obra.classList.add('id-obra')
    id_obra.textContent = id

    const image_id = document.createElement('img')
    image_id.classList.add('image_ids')
    if(image_ids_content){
        image_id.src = image_ids_content
    } else {
        image_id.src = "../img/png/image_not_found.png"
    }
    
    const artist_title = document.createElement('h2')
    artist_title.classList.add('artist_titles')
    artist_title.textContent = artist_title_content
    
    const date_display = document.createElement('h2')
    date_display.classList.add('date_displays')
    date_display.textContent = date_display_content
    
    const title = document.createElement('h2')
    title.classList.add('titles')
    title.textContent = title_content

    

    card.append(id_obra, image_id, artist_title, date_display, title)

    return card
}

export async function preencherCampos() {
    const all = document.getElementById('all')
    const obrasArte = await pegarObrasArte()
    let i = 0
    const arrayArtes = obrasArte.data
    for(let obra of arrayArtes){

        let image_id =  await pegarImagens(obra.image_id)

        const id = obra.id
        const imageLink = image_id
        const artist_title = obra.artist_title
        const date_display = obra.date_display
        const title = obra.title

        let jsonObraDeArte = {
            id,
            imageLink,
            artist_title,
            date_display,
            title
        }

        const card = criaCardObra(jsonObraDeArte)
        all.appendChild(card)
        
        i++
    }
}

window.onload = async () => {
    
    const obrasArte = await pegarObrasArte()
    preencherCampos()
    // criaCardObra()
}