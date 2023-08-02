//'use strict': serve pra aumentar a restrição de erros

//3º var   -> Mutável  -> Global
//2º let   -> Mutável  -> Bloco
//1º const -> Imutável -> Bloco
//const nomeConst = 'Const Ana'
//var nomeVar = 'Var Ana'
//let nomeLet = 'Let Ana'
//console.log(nomeConst)
//console.log(nomeVar)
//console.log(nomeLet)
//nomeVar = 'Var José'
//nomeLet = 'Let José'
//console.log(nomeConst)
//console.log(nomeVar)
//console.log(nomeLet)

'use strict'

function trocarTitulo (){
    const tituloAtual = document.getElementById('titulo')
    const tituloNovo = prompt('Digite um título')
    tituloAtual.textContent = `Escola ${tituloNovo}`

}

const botaoTrocarTitulo = document.getElementById('trocar-titulo')
botaoTrocarTitulo.addEventListener('click', trocarTitulo)


function cadastro(){
    
    const nome = document.getElementById('nome')
    const novoNome = prompt('Digite um nome')
    nome.textContent = `Nome: ${novoNome}`

    const idade = document.getElementById('idade')
    const novaIdade = prompt('Digite uma idade')
    idade.textContent = `Idade: ${novaIdade}`

    const cidade = document.getElementById('cidade')
    const novaCidade = prompt('Digite uma cidade')
    cidade.textContent = `Cidade: ${novaCidade}`

}

const botaoMudarCadastro = document.getElementById('mudarCadastro')
botaoMudarCadastro.addEventListener('click', cadastro)