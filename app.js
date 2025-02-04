//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo(){
    let amigo = document.querySelector("input");
    let resultado = document.getElementById("resultado");   
    resultado.innerHTML = '';

    if (amigo.value === '') {
        alert("Por favor, insira um nome.");
    } else{
        amigos.push(amigo.value);
        amigo.value = '';
    }    
    atualizarListaAmigos();
    
}

function atualizarListaAmigos(){
    let lista = document.getElementById("listaAmigos");    
    lista.innerHTML = "";
    for(i = 0; i <= (amigos.length - 1) ; i++){
        let elementoLista = document.createElement("li");
        elementoLista.textContent = amigos[i];
        lista.appendChild(elementoLista) ;
    }
}

function sortearAmigo() {
    if ((amigos.length) > 1){
        let numeroLimite = amigos.length;
        let indiceAleatorio = parseInt(Math.floor(Math.random() * numeroLimite));
        let lista = document.getElementById("listaAmigos");    
        lista.innerHTML = "";        
        let resultado = document.getElementById("resultado");   
        resultado.innerHTML = `O amigo secreto sorteado é: ${amigos[indiceAleatorio]}`;
        amigos = [];
    } else {
        alert("A lista de amigos deve ter no mínimo 2 nomes para realizar o sorteio.")
    }
}