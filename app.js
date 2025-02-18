
let listaDeAmigos = [];

// Função para adicionar um amigo à lista
 
function adicionarAmigo() {
    
    let inputAmigo = document.getElementById('amigo');
    let amigo = inputAmigo.value.trim(); 

    
    if (amigo === "") {
        exibirMensagemNomeInvalido();
        return; 
    }else if (listaDeAmigos.includes(amigo)) 
    {
        exibirNomeEstaNaLista();
        limparCampo();
        return;
    }

    
    listaDeAmigos.push(amigo);
    
   
    inputAmigo.value = '';

 
    atualizarLista();   
}

function exibirTextoNaTela(id, texto){
    let campo = document.getElementById(id);
    campo.innerHTML = texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

function exibirMensagemNomeInvalido(){
    exibirTextoNaTela('amigo','Digite um nome válido, por favor!');
}
function exibirNomeEstaNaLista(){
    exibirTextoNaTela('amigo','O nome já está na lista, por favor digite outro nome!');
}
function peloMenosDois(){
    exibirTextoNaTela('amigo','Adicione pelo menos dois amigos para o sorteio!, por favor digite outro nome!');
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
        peloMenosDois(); 
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
