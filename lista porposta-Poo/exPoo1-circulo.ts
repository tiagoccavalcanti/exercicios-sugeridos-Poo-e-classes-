// Crie uma classe chamada “Círculo” que possua um atributo para armazenar o raio e métodos para calcular a área e o perímetro do círculo.

class Circulo {
    raio:number;

    constructor(raio:number){
        this.raio = raio;
    }

    // levando em consideração o raio como pi*R^2 e pi=3,14
    area(){
        return 3.14 * this.raio ** 2;
    }

    // levando em consideração o perimetro como 2*pi*R, e pi=3.14
    perimetro(){
        return 2*3.14*this.raio;
    }
}

const mesa = new Circulo (25)

console.log(mesa.area)

console.log(mesa.perimetro)