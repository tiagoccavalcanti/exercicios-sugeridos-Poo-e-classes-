// Crie uma classe chamada “Triângulo” com atributos para armazenar os três lados do triângulo. Implemente métodos para verificar se é um triângulo válido e calcular sua área.

class Triangulo{
    lado1:number;
    lado2:number;
    lado3:number;

    constructor(lado1:number, lado2:number, lado3:number){
        this.lado1=lado1;
        this.lado2=lado2;
        this.lado3=lado3;
    }

    validade(){
        if((this.lado1 > Math.abs(this.lado2)-Math.abs(this.lado3) && this.lado1 < this.lado2 + this.lado3) &&
            (this.lado2 > Math.abs(this.lado1)-Math.abs(this.lado3) && this.lado2 < this.lado2 + this.lado3) &&    
            (this.lado3 > Math.abs(this.lado2)-Math.abs(this.lado1) && this.lado3 < this.lado2 + this.lado1)  ){

                return `o triangulo de medidas ${this.lado1}, ${this.lado2}, ${this.lado3} é válido`;
            }else{
                return `o triangulo é inválido`;
            }
    }

    area(){
        var p = (this.lado1 + this.lado2 + this.lado3)/2;
        return Math.sqrt(p*(p - this.lado1) * (p - this.lado2) * (p-this.lado3));
    }
}

const triang1 = new Triangulo(23, 22, 25)

console.log(triang1.area())