//Array para guardar os nomes dos amigos
let listaDeAmigos = [];




// Função para adicionar um amigo à lista
 
function adicionarAmigo() {
    // Obtém o valor digitado no input
    let inputAmigo = document.getElementById('amigo');
    let amigo = inputAmigo.value.trim(); // Remove espaços extras antes e depois do nome

    // Verifica se o campo está vazio
    if (amigo === "") {
        alert("Digite um nome válido!");
        return; // Sai da função se o nome for inválido
    }

    // Adiciona o nome à lista de amigos
    listaDeAmigos.push(amigo);
    
    // Limpa o campo de entrada após adicionar o nome
    inputAmigo.value = '';

   
}



function sortearAmigo(){
    sorteado = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
    document.getElementById('amigo').value = sorteado;
    console.log(sorteado);
}

//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
