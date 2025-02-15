
let listaDeAmigos = [];

// Função para adicionar um amigo à lista
 
function adicionarAmigo() {
    
    let inputAmigo = document.getElementById('amigo');
    let amigo = inputAmigo.value.trim(); 

    
    if (amigo === "") {
        alert("Digite um nome válido!");
        return; // Sai da função se o nome for inválido
    }else if (listaDeAmigos.includes(amigo)) 
    {
        alert("Nome informado já está na sua lista");
        limparCampo();
        return;
    }

    
    listaDeAmigos.push(amigo);
    
   
    inputAmigo.value = '';

 
    atualizarLista();   
}

 
 
function atualizarLista() {
   
    let listaElemento = document.getElementById('listaAmigos');
    
    
    listaElemento.innerHTML = '';

    
    for (let i = 0; i < listaDeAmigos.length; i++) {
        let li = document.createElement('li'); 
        li.textContent = listaDeAmigos[i];
        listaElemento.appendChild(li); 
    }
}
function limparCampo(){
    amigo = document.getElementById('amigo');
    amigo.value = '';
}

function sortearAmigo() {
   
    if (listaDeAmigos.length < 2) {
        alert("Adicione pelo menos dois amigos para o sorteio!"); 
        return;
    }

   
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
