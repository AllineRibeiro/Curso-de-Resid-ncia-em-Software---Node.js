import promptSync from prompt-sync;
const prompt = require('prompt-sync')({siginit: true});

var interruptor = "off";

if(interruptor == "on"){
    console.log("Ligada");
}
else if(interruptor == "off"){
    console.log("Desligado");
}
else{
    console.log("Queimou")
}

let nome = prompt("Digite o nome: ");
console.log('Pegou o nome', nome);