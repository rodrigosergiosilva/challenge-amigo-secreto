//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo(){
    let amigo = document.querySelector("input");
    if (amigo.value == '') {
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