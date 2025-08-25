// O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação.
//  Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let amigoSorteado = '';

function adicionarAmigo(){
    let nome = document.querySelector('input').value.trim(); //trim() remove espaços
    
    if (nome){
        amigos.push(nome);
        limparCampo();
        atualizaListaAmigos();
        limparReiniciar();
    } else {
        alert('Por favor, insira um nome');
        return;
    }
}

function limparCampo(){
    let nome = document.querySelector('input');
    nome.value = '';
    nome.focus();    // adiciona o cursor no input
}

function atualizaListaAmigos(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
   // for percorre o array
    for (let i = 0; i < amigos.length; i++){
        let lista = document.createElement('li');
        lista.textContent = amigos[i];
        listaAmigos.appendChild(lista);
    }
}

function sortearAmigo(){
    if (amigos.length === 0){
        alert('Nenhum amingo para sortear! Adiciona nome do amigo');
    } else {
        let indexSorteado = Math.floor(Math.random() * amigos.length);
         amigoSorteado = amigos[indexSorteado];
        resultado();
    }
}

function resultado(){
    let resultado = document.getElementById('resultado');    
    resultado.innerHTML = `O amigo secreto sorteado é: ${amigoSorteado}`;
    amigos = [];
    atualizaListaAmigos();
   
}

function limparReiniciar(){
    let reinicia = document.getElementById('resultado');
    reinicia.innerHTML = '';
}