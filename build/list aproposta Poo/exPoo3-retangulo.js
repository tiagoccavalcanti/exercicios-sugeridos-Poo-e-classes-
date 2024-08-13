"use strict";
// Crie uma classe chamada “Retângulo” que possua atributos para armazenar a largura e a altura. Implemente métodos para calcular a área e o perímetro do retângulo.
class Retangulo {
    altura;
    largura;
    constructor(altura, largura) {
        this.altura = altura;
        this.largura = largura;
    }
    // a area é calculada por area da base(largura) multiplicado pela altura
    area() {
        return this.altura * this.largura;
    }
    // o retangulo tem 2 pares de lados iguais entre si e o perimetro é a soma de todos os lados
    perimetro() {
        return this.altura * 2 + this.largura * 2;
    }
}
/*TESTE
 const retangulo = new Retangulo(10,10)

console.log(retangulo.area());
console.log(retangulo.perimetro()) */ 
