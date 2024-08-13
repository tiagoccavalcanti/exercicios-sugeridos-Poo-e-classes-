// Crie uma classe chamada “LojaVirtual” que represente uma plataforma de vendas online. Essa classe deve ter funcionalidades para cadastrar produtos, gerar carrinho de compras, aplicar descontos e calcular o valor total da compra.

/* class Produto { 
    nome:string;
    preco:number;
    codigo:number;

    constructor(nome:string, preco:number, codigo:number){
        this.nome=nome;
        this.preco=preco;
        this.codigo=codigo;
    }
}

class lojaVirtual {
    produtos:Produto[];
    carrinho:Produto[];

    constructor(produtos:Produto[], carrinho:Produto[]){
        this.produtos=produtos;
        this.carrinho=carrinho;
    }

    cadastraProduto(produto:Produto){
        return this.produtos.push(produto);
    }

    adicionarCarrinho(produto:Produto){
        if(this.produtos.includes(produto)){
            return this.carrinho.push(produto)
        }else{
            return `produto nao disponível`
        }
    }

    valorTotal(){

        var valorT = 0
        for(var i = 0; i < this.carrinho.length; i++){
            valorT += this.carrinho[i].preco
        }
        return valorT
    }

    desconto(porcentagem:number){
        return this.valorTotal() * porcentagem;
    }
} */