class PilotoF1{
    constructor(nome, idade, equipe){
        this.nome = nome;
        this.idade = idade;
        this.equipe = equipe;
    }
    correr(){
        console.log('VRUMMMMMM');
    }
}

const corredor = new PilotoF1('Alline', 19, 'Brasil');
const corredor2 = new PilotoF1('Alline', 19, 'Brasil');
const corredor3 = new PilotoF1('Alline', 19, 'Brasil');
const corredor4 = new PilotoF1('Alline', 19, 'Brasil');
const corredor5 = new PilotoF1('Alline', 19, 'Brasil');

console.log(corredor);
console.log(corredor2);
console.log(corredor3);
console.log(corredor4);
console.log(corredor5);