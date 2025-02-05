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

  // Atualiza a exibição da lista de amigos na tela
    atualizarLista();   
}
 // Função para atualizar a lista de amigos na interface do usuário
 
function atualizarLista() {
    // Obtém o elemento da lista no HTML
    let listaElemento = document.getElementById('listaAmigos');
    
    // Limpa a lista antes de recriá-la para evitar duplicação
    listaElemento.innerHTML = '';

    // Percorre a lista de amigos e adiciona cada um como um item <li>
    for (let i = 0; i < listaDeAmigos.length; i++) {
        let li = document.createElement('li'); // Cria um elemento de lista <li>
        li.textContent = listaDeAmigos[i]; // Define o texto do <li> com o nome do amigo
        listaElemento.appendChild(li); // Adiciona o <li> à lista no HTML
    }
}

function sortearAmigo() {
    //Se alista de amigos não tiver pelo menos dois amigos...mensagem de erro
    if (listaDeAmigos.length < 2) {
        alert("Adicione pelo menos dois amigos para o sorteio!"); 
        return;
    }

    // Usando for para percorrer e escolher um nome aleatório
    let indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    let sorteado;

    for (let i = 0; i < listaDeAmigos.length; i++) {
        if (i === indiceSorteado) {
            sorteado = listaDeAmigos[i];
            break;
        }
    }

    document.getElementById('resultado').textContent = `O seu amigo oculto é: ${sorteado}`;
}




//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
