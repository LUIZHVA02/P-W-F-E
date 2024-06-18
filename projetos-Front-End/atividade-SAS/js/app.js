export async function pegarObrasArte() {
    const url = `https://api.artic.edu/api/v1/artworks`
    const response = await fetch(url)
    const obrasDeArte = await response.json()

    return obrasDeArte
}