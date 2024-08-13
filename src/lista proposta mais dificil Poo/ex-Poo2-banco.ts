// Implemente uma classe chamada “Banco” que represente uma instituição financeira. Essa classe deve conter métodos para cadastrar clientes, abrir contas bancárias e realizar operações como saques, depósitos e transferências.

class Banco {
    nome:string;
    numeroDaConta:number;
    saldo:number;
    cadastro:boolean = false;

    constructor(nome:string, numeroDaConta:number, saldo:number){
        this.nome=nome;
        this.numeroDaConta=numeroDaConta;
        this.saldo=saldo;
    }
    // essa função faz com que nao seja possivel adicionar o valor boolean na declaração da instancia (nao sei pq), mas funciona melhor ainda - eu mudei pra começar ja como false pq ele mandou inicializar nao sei bem se isso atrapalha muito mas o codigo ta rolando legal
    cadastrarCliente(){
        return this.cadastro = true
    }

    saque(valor:number){
        if(this.cadastro == true){
        return this.saldo -= valor;

        }else{
            return `Sr. ${this.nome} ainda nao é cliente da instituição`
        }
    }

    deposito(valor:number){
        if(this.cadastro == true){
        return this.saldo += valor;

        }else{
            return `Sr. ${this.nome} ainda nao é cliente da instituição`
        }
    }
    // eu tinha escolhido fzr de um jeito diferente (sacar de uma e depositar em outra, usando as funçoes deposito e saque), mas nao rolou pq tenho que usar alguma instancia pra poder chamar o metodo

    transferencia(valor:number, contaAdiciona:Banco){

        if(contaAdiciona.cadastro == true){
        this.saldo -= valor
        contaAdiciona.deposito(valor);
        return

        }
        else{
            return `Sr. ${this.nome} ainda nao é cliente da instituição`
        }

    }
}

const tiago = new Banco ("tiago", 1, 100);

tiago.cadastrarCliente();

console.log(tiago)

const leticia = new Banco("leticia", 2, 0);

leticia.cadastrarCliente()

leticia.deposito(500);
console.log(leticia);

leticia.transferencia(300, tiago)

console.log(tiago)
console.log(leticia)