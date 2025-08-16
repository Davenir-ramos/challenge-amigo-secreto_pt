// O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação.
//  Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let amigosSorteados = '';

function adicionarAmigo(){
    let nome = document.querySelector('input').value.trim(); //trim() remove espaços
    
    if (nome){
        amigos.push(nome);
        limparCampo();
        atualizaListaAmigos();
    } else {
        alert('Por favor, insire um nome');
        return;
    }
}

function limparCampo(){
    let nome = document.querySelector('input');
    nome.value = '';
}

function atualizaListaAmigos(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for (let i = 0; i < amigos.length; i++){
        let lista = document.createElement('li');
        lista.textContent = amigos[i];
        listaAmigos.appendChild(lista);
    }
}