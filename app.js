let listaDeAmigos = [];

 
function adicionarAmigo(){
    
    let inputAmigo = document.getElementById('amigo');
    let amigo = inputAmigo.value.trim(); 

    const mensagem = document.getElementById('mensagem');
    
    if (amigo === "") {
        exibirMensagemNomeInvalido();
        
        let mensagemErro = 'Digite um nome válido, por favor!';
        mensagem.textContent = mensagemErro;
        return;   
         
    }else if (listaDeAmigos.includes(amigo)) 
    {
        exibirNomeEstaNaLista();
        mensagem.textContent= 'O nome já está na lista! Por favor, digite outro nome!'
        limparCampo();
        return;        
        
    }

    
    listaDeAmigos.push(amigo);
    mensagem.textContent = 'Nome adicionado'
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

        let botaoRemover = document.createElement('button');
        botaoRemover.className = 'remover';
        botaoRemover.textContent = 'Remover';
        botaoRemover.onclick = () => removerNome(i);
        li.appendChild(botaoRemover);
        listaElemento.appendChild(li); 
    }
}

function removerNome(i){
    listaDeAmigos.splice(i,1);
    mensagem.textContent= 'Nome removido';
    atualizarLista();
}

function limparCampo(){
    amigo = document.getElementById('amigo');
    amigo.value = '';
}

function sortearAmigo() {
   
    if (listaDeAmigos.length < 2) {
        peloMenosDois();
        mensagem.textContent = 'Adicione pelo menos dois amigos para o sorteio, por favor digite outro nome!' 
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









