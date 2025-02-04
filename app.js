//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    let novoAmigo = document.getElementById("amigo").value;
    if(novoAmigo !== ""){
        amigos.push(novoAmigo);
        atualizarLista();
        document.getElementById("amigo").value = "";
    } else {
        alert("Por favor, digite um nome válido! O campo não pode estar vazio!");
    };
};

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.innerText = amigos[i]; 
        lista.appendChild(item); 
    };
};


