'use strict'

const clientes = [
    {
        nome: 'Jerome Bueno',
        imagem: 'jerome.png',
        mensagem: 'Posso realizar o pagamento por...',
        appIcon: 'whatsapp.jpg',
        empregado: 'João Paulo',
        tempo: '30 minutos',
        quantidade: '1'
    },
    {
        nome: 'Daniel Silva',
        imagem: 'daniel.png',
        mensagem: 'Márcia diz: Bom dia, como posso ajudar...',
        appIcon: 'messenger.jpg',
        empregado: 'Márcia',
        tempo: '30 minutos',
        quantidade: '1'
    },
    {
        nome: 'Bruno Adorno',
        imagem: 'bruno.png',
        mensagem: 'Bom dia, gostaria de saber quanto...',
        appIcon: 'sms.jpg',
        empregado: 'Joysi',
        tempo: '30 minutos',
        quantidade: '1'
    },
    {
        nome: 'Viviane Ribeiro',
        imagem: 'viviane.png',
        mensagem: 'Adorei o atendimento, foi nota 10...',
        appIcon: 'instagram.jpg',
        empregado: 'Geovana',
        tempo: '30 minutos',
        quantidade: '1'
    },
    {
        nome: 'Maria Joana',
        imagem: 'maria.png',
        mensagem: 'Jhonatan diz: A senhora necessita de mais ...',
        appIcon: 'whatsapp.jpg',
        empregado: 'Jhonatan',
        tempo: '30 minutos',
        quantidade: '1'
    },
    {
        nome: 'Juliana Pereira',
        imagem: 'jerome.png',
        mensagem: 'Saulo diz: Estarei enviando o comprovante...',
        appIcon: 'instagram.jpg',
        empregado: 'Saulo',
        tempo: '30 minutos',
        quantidade: '1'
    },
    {
        nome: 'Henrique Martins',
        imagem: 'jerome.png',
        mensagem: 'Joysi diz: Estarei enviando o comprovante...',
        appIcon: 'whatsapp.jpg',
        empregado: 'Joysi',
        tempo: '30 minutos',
        quantidade: '1'
    }
]

function mostrarConversas(clientes) {
    const card = document.getElementById('card')

    const cardContainer = document.getElementById('cardContainer')

    const cardPerfilCliente = document.createElement('div')
    cardPerfilCliente.classList.add('cardPerfilCliente')

    const clienteIMG = document.createElement('div')
    clienteIMG.classList.add(clienteIMG)

    const imagem = document.createElement('img')
    imagem.src = `./img/${clientes.imagem}`
    imagem.alt = clientes.imagem
    
    const nome = document.createElement('h2')
    nome.textContent = clientes.nome
    
    const mensagem = document.createElement('p')
    mensagem.textContent = clientes.mensagem

    const cardContatoEmpregado = document.createElement('div')
    cardContatoEmpregado.classList.add('cardContatoEmpregado')
    
    const icon = document.createElement('div')
    icon.classList.add('icon')

    const iconMidia = document.createElement('img')
    iconMidia.src = `./icons/${clientes.appIcon}`
    iconMidia.alt = clientes.appIcon


    card.replaceChild(cardContainer)
    cardContainer.replaceChild(cardPerfilCliente)
    cardPerfilCliente.replaceChildren(clienteIMG, nome, mensagem, cardContatoEmpregado)
    cardContatoEmpregado.replaceChildren()
}
clientes.forEach(mostrarConversas);