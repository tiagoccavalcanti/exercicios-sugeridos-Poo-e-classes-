"use strict";
// Implemente uma classe chamada “ContaBancária” que possua atributos para armazenar o número da conta, nome do titular e saldo. Adicione métodos para realizar depósitos e saques.
class ContaBancária {
    numConta;
    nomeTitular;
    saldo;
    constructor(numConta, nomeTitular, saldo) {
        this.numConta = numConta;
        this.nomeTitular = nomeTitular;
        this.saldo = saldo;
    }
    deposito(valor) {
        return this.saldo += valor;
    }
    saque(valor) {
        return this.saldo -= valor;
    }
}
/* teste
const conta1 = new ContaBancária(222, "tiago", 1000);
const conta3 = new ContaBancária(666, "letra", 5000);

conta1.saque(500)
console.log(`seu dinheiro é ${conta1.saque(300)}`) */ 
