// O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação.
//  Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let amigoSorteado = '';

function exibirAlertTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagem(){
    exibirAlertTela('h3', '');
}

function adicionarAmigo(){
    let nome = document.querySelector('input').value.trim(); //trim() remove espaços
   
   if (nome == ''){
       exibirAlertTela('h3','Por favor, insira um nome');
       return;
    } 
    // Verificado se o  amigo  foi adicionado
    if(amigos.some(amigo => amigo.toLowerCase() === nome.toLowerCase())){
        exibirAlertTela('h3','O amigo já foi adicionado! Adiciona outro');
        limparCampo();
        return
    }
    amigos.push(nome);
    exibirMensagem();
    atualizaListaAmigos();
    limparCampo();  
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
        exibirAlertTela('h3','Nenhum **amigo** para sortear! Adiciona nome do amigo');
        return;
    } else if (amigos.length < 3){
        exibirAlertTela('h3', `Você adicionou apenas ${amigos.length} amigos. Adicione pelo menos 3`);
        return;
    } else {
        let indexSorteado = Math.floor(Math.random() * amigos.length);
        amigoSorteado = amigos[indexSorteado];
        resultado();
        limparReiniciar();
    }
    
}

function resultado(){ 
    let resultado = document.getElementById('resultado');    
    resultado.innerHTML = `O amigo secreto sorteado é: ${amigoSorteado}`;
    amigos = [];
    atualizaListaAmigos();
   
}

function limparReiniciar(){
    let reiniciar = document.getElementById('resultado');
    // timer 
    setTimeout(() => {
        reiniciar.innerHTML = '';
    }, 10000);
   
}