export async function pegarObrasArte() {
    const url = `https://api.artic.edu/api/v1/artworks/?fields=id,title,image_id,place_of_origin,artist_display,date_start,date_end,dimensions_detail,exhibition_history,artwork_type_title,department_title,artist_titles,artist_ids,provenance_text,date_display`
    const response = await fetch(url)
    const obrasDeArte = await response.json()

    return obrasDeArte
}

export async function pegarImagens(image_id) {

    let id = image_id

    const imageLink = `https://www.artic.edu/iiif/2/${id}/full/843,/0/default.jpg`

    if (!imageLink) {
        console.log(imageLink);
    } else {
        return imageLink
    }
}