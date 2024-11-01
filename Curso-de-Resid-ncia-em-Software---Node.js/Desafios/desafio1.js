
let qtdVertice = 0;
var prompt  = require ('prompt-sync')();
console.log('1 - Criar Vertices \n2 - Criar Triangulos \n3 - Criar Poligonos \n');
let escolha = Number((prompt(`Selecione qual programa deseja usar:`)));

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
    console.log(`Coordenadas Trocadas`,this.getX(), this.getY());
   }

   equals(vertice){
    return this.#x === vertice.getX() && this.#y === vertice.getY();
    
   }

}
function criaVertice(qtdVertice){
    let vertice = [];
    for (let i = 0; i<qtdVertice; i++){
        const x = Number((prompt(`Digite a coordenada X:  `)));
        const y = Number((prompt(`Digite a coordenada Y:  `)));
        vertice.push(new Vertice(x,y));
    }
    return vertice;
}
class Triangulos{
    
    #vertice1;
    #vertice2;
    #vertice3;

   
    constructor(vertice1, vertice2, vertice3){
        
        this.#vertice1 = vertice1;
        this.#vertice2 = vertice2;
        this.#vertice3 = vertice3;

        if (this.areaTriangulo() === 0 ) {
            console.log('Os vértices não formam um triângulo válido.');
            exit(1);
         }
    }

    getVertice1(){return this.#vertice1;}
    getVertice2(){return this.#vertice2;}
    getVertice3(){return this.#vertice3;}


    areaTriangulo() {
        const area = 0.5 * Math.abs(
            this.#vertice1.getX() * (this.#vertice2.getY() - this.#vertice3.getY()) +
            this.#vertice2.getX() * (this.#vertice3.getY() - this.#vertice1.getY()) +
            this.#vertice3.getX() * (this.#vertice1.getY() - this.#vertice2.getY())
        );
        return area; 
    }

    cloneTriangulo(){
        return new Triangulos(this.#vertice1, this.#vertice2,this.#vertice3);
    }
}
switch(escolha){
    case 1:
        qtdVertice = Number((prompt(`Quantos vertices deseja adicionar?: \n`)));
        // Calculando a DISTANCIA EUCLIDIANA
        const ver =  criaVertice(qtdVertice);
        for (let i = 0; i<qtdVertice; i++){
            for(let j = i+1; j<qtdVertice; j++){
                console.log(`A euclidiana entre X:`,  ver[i].getX(),`e Y:`,  ver[i].getY(),` e X:`,ver[j].getX(),`e Y:`,ver[j].getY(),`é`, ver[i].distanciaEuclidiana(ver[j]));
            }
        }
        // Movendo os vertices
        for (let i = 0; i<qtdVertice; i++){
            console.log(`Vertice [${i}]:`,  ver[i].getX(), ver[i].getY());
        }
        let opcao = Number(prompt('Qual dos vertices deseja trocar: ' ));
        let novoX = Number(prompt('Digite o novo X : ' ));
        let novoY = Number(prompt('Digite o novo Y : ' ))

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
        for (let i = 0; i<qtdVertice; i++){
            for(let j = i+1; j<qtdVertice; j++){
                if(ver[i].equals(ver[j])){
                    console.log(`O vertice ${ver[i].getX()},${ver[i].getY()}  é  igual ${ver[j].getX()},${ver[j].getY()} `);
                }
                else{
                    console.log(`O vertice ${ver[i].getX()},${ver[i].getY()}  é  diferente ${ver[j].getX()},${ver[j].getY()} `);
                }
            }
        }
       
    break;

    case 2:
        
        let qtdTriangulo = Number((prompt(`Quantos Triangulos deseja adicionar?: `)));
        const tri = [];
        
        for(let i = 0; i<qtdTriangulo; i++){
            const vertices = criaVertice(3);
            const triangulos = new Triangulos(vertices[0], vertices[1], vertices[2]);
            tri.push(triangulos);
        }
       
        tri.forEach((triangulo, indice) => {
            console.log(
            `Triângulo ${indice + 1}: Vértices -> 
            (${triangulo.getVertice1().getX()}, ${triangulo.getVertice1().getY()},
            (${triangulo.getVertice2().getX()}, ${triangulo.getVertice2().getY()}), 
            (${triangulo.getVertice3().getX()}, ${triangulo.getVertice3().getY()})`);
        });
        // Iguais 
        for (let i = 0; i<qtdTriangulo; i++){
            for(let j = i+1; j<qtdTriangulo; j++){
                console.log('ENTROU');
                if(
                tri[i].getVertice1().equals(tri[j].getVertice1()) && 
                tri[i].getVertice2().equals(tri[j].getVertice2()) && 
                tri[i].getVertice3().equals(tri[j].getVertice3())
                )
                {
                    console.log(
                    tri[i].getVertice1().equals(tri[j].getVertice1()),
                    tri[i].getVertice2().equals(tri[j].getVertice2()),  
                    tri[i].getVertice3().equals(tri[j].getVertice3())
                    );
                    console.log('Triangulos Iguais');
                }
                else{
                    console.log('Triangulos diferentes ')
                }
            }
        }

        //clone
        let copia = Number(prompt('Qual triangulo escolhe para clonar'))
        qtdTriangulo += 1;
        tri.push(tri[copia].getVertice1().cloneTriangulo);
        console.log(
            tri[copia].getVertice1().getX(), tri[copia].getVertice1().getY(),
            tri[copia].getVertice2().getX(), tri[copia].getVertice2().getY(),
            tri[copia].getVertice3().getX(), tri[copia].getVertice3().getY()
        );

    break;
    case 3:
        qtdVertice = Number((prompt(`Quantos vertices desja adicionar?: `)));
    break;
}




