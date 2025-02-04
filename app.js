let listaDeAmigos = [];
let amigo;
let nomeDoAmigoOculto;


function adicionarAmigo(){
    
    amigo = document.getElementById('amigo').value;
    
    listaDeAmigos.push(amigo);
    
    (document.getElementById('amigo').value = '') ;
    
    return console.log(listaDeAmigos) ;
}
//function nomeEmDuplicata(){
    //if(listaDeAmigos.includes(amigo)){
        
        //console.log('O amigo já está nalista, digite o nome de outro amigo');
        
        //listaDeAmigos.pop(amigo);
    //} 
//}



function sortearAmigo(){
    sorteado = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
    document.getElementById('amigo').value = sorteado;
    console.log(sorteado);
}

//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
