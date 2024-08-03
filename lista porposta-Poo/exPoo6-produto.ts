// Implemente uma classe chamada “Produto” que possua atributos para armazenar o nome, o preço e a quantidade em estoque. Adicione métodos para calcular o valor total em estoque e verificar se o produto está disponível.

class Produto{ 
    nome:string;
    preco:number;
    estoque:number;

    constructor(nome:string, preco:number, estoque:number){
        this.nome=nome;
        this.preco=preco;
        this.estoque=estoque;
    }

    valorEstoque(){
        return this.estoque*this.preco;
    }

    disponibilidade(){
        if(this.estoque <= 0){
            return `${this.nome} está fora de estoque`
        }else{
            return `ainda temos estoque de ${this.nome}`
        }
    }
}

// teste
var prod1 = new Produto("papel higienico", 50, 0);
var prod2 = new Produto("chocolate", 10, 500)

console.log(prod1.disponibilidade());
console.log(prod2.disponibilidade())

console.log(`o valor do ${prod1.nome} em estoque é ${prod1.valorEstoque()}`)
console.log(`o valor do ${prod2.nome} em estoque é ${prod2.valorEstoque()}`)