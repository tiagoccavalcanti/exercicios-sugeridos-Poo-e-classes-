"use strict";
// Crie uma classe chamada “Funcionário” com atributos para armazenar o nome, o salário e o cargo do funcionário. Implemente métodos para calcular o salário líquido, considerando descontos de impostos e benefícios.
class Funcionario {
    nome;
    salario;
    cargo;
    constructor(nome, salario, cargo) {
        this.nome = nome;
        this.salario = salario;
        this.cargo = cargo;
    }
    // para determinar o salario liquido eh necessario chamar a função pagamento e informar o valor do incremento ou decremento
    pagamento(adicional) {
        if (this.cargo == "estagiario") {
            // imaginemos que o estagiario tem 25% em descontos de impostos aleatorios e adicional de passsagem
            return this.salario - this.salario * 0.25 + adicional;
        }
        else if (this.cargo == "secretario") {
            // imaginando que o secretario tem 15% de desconto e 300 de adicionais
            return this.salario - this.salario * 0.15 + adicional;
        }
        else if (this.cargo == "gerente") {
            // pensando num gerente que tem os mesmos 15% de desconto e um desconto posterior de 20% alem dos adicionais
            this.salario -= this.salario * 0.15;
            this.salario -= this.salario * 0.20;
            return this.salario + adicional;
        }
        else {
            return `cargo nao existente`;
        }
    }
}
// teste
const func1 = new Funcionario("fulano de tal", 1000, "estagiario");
const func2 = new Funcionario("ciclano de tal", 1500, "secretario");
const func3 = new Funcionario("januario", 3000, "gerente");
console.log(`o ${func1.nome} trabalha na empresa como ${func1.cargo} e com adicional de 65 recebe ${func1.pagamento(65)}`);
console.log(`o ${func2.nome} trabalha na empresa como ${func2.cargo} e com adicional de 200 recebe ${func2.pagamento(200)}`);
console.log(`o ${func3.nome} trabalha na empresa como ${func3.cargo} e com adicional de 500 recebe ${func3.pagamento(500)}`);
