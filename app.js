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

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista está vazia! Digite alguns nomes!");
        return;
    };
    let nomeAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[nomeAleatorio];
    document.getElementById("resultado").innerHTML = 
    "🎉 O amigo sorteado é: <strong>" + amigoSorteado + "</strong>!";
    setTimeout(resetarCampos, 8000);
};

function resetarCampos() {
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("amigo").value = ""; 
    amigos = []; 
    document.getElementById("listaAmigos").innerHTML = ""; 
};
