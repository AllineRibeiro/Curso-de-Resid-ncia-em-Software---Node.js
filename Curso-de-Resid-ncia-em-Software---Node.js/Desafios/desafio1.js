class Vertice{

   #x;
   #y;

   constructor(x,y){
    this.#x = x;
    this.#y = y;
   }

   getX(){ return this.#x;}

   getY(){ return this.#y;}

   distanciaEuclidiana(vertice){
     const deltaX = vertice.getX() - this.#x;
     const deltaY = vertice.getY() - this.#y;

     return Math.sqrt(deltaX ** 2 + deltaY ** 2);
   }

   move(newX, newY){
    this.#x = newX;
    this.#y = newY;
    console.log(`As novas coordenadas do Vertice são: ${this.getX()} e ${this.getY()}`);
   }

   equals(vertice){
    return this.#x === vertice.getX() && this.#y === vertice.getY();
   }

}
function criaVertice(){
    x = Number((prompt(`Digite a coordenada X:  `)));
    y = Number((prompt(`Digite a coordenada Y:  `)));
    return new Vertice(x,y);

}
var prompt  = require ('prompt-sync')();

const ver = [];

for (let i = 0; i<3; i++){
    ver[i] = criaVertice();
}

// Calculando a DISTANCIA EUCLIDIANA

console.log(ver[0].distanciaEuclidiana(ver[1]));
console.log(ver[1].distanciaEuclidiana(ver[2]));
console.log(ver[0].distanciaEuclidiana(ver[2]));

// Movendo os vertices
for (let i = 0; i<3; i++){
    console.log(`Vertice [${i+1}]:`,  ver[i].getX(), ver[i].getY());
}
let opcao = Number(prompt('Qual dos vertices deseja trocar: ' ));
let novoX = Number(prompt('Digite o novo X : ' ));
let novoY = Number(prompt('Digite o novo Y : ' ))

// ver[0].move(novoX,novoY);
switch(opcao){

    case 1:
        ver[0].move(novoX,novoY);
    break;

    case 2:
        ver[1].move(novoX, novoY);

    break;

    case 3:
        ver[2].move(novoX, novoY);
    break;
    
}

// Iguais
let ver1 = Number(prompt('Qual dos vertices deseja comparar ( 0, 1 ou 2): ' ));
let ver2 = Number(prompt('Qual dos vertices deseja comparar ( 0, 1 ou 2): ' ));
console.log(`Os vertices são: ${ver[ver1].equals(ver[ver2])}` );