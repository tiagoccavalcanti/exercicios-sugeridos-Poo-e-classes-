"use strict";
// Crie uma classe chamada “MáquinaDeVendas” que simule uma máquina de venda de produtos. Essa classe deve permitir cadastrar produtos, selecionar um produto para compra, inserir dinheiro, retornar o troco e exibir o estoque disponível.
/* abstract class Carrinho{
    carrinho:Produto[]=[];
    constructor(carrinho:Produto[]){
    this.carrinho = carrinho
    }
} */
class MaquinaDeVendas {
    produtos;
    constructor(produtos) {
        this.produtos = produtos;
    }
    cadastraProduto(produto) {
        return this.produtos.push(produto);
    }
    exibirEstoque() {
        console.log(this.produtos);
    }
    comprar(comprando, valorInserido) {
        this.inserirDinheiro(comprando, valorInserido);
        let index = this.produtos.findIndex((produto) => produto.nome == comprando);
        console.log(`${this.produtos[index].nome} selecionado com sucesso`);
        return this.produtos[index].quantidadeEmEstoque -= 1;
    }
    inserirDinheiro(comprando, valorInserido) {
        if (this.produtos[this.produtos.findIndex((produto) => produto.nome == comprando)].preco >= valorInserido) {
            console.log(`seu troco é ${this.produtos[this.produtos.findIndex((produto) => produto.nome == comprando)].preco - valorInserido}`);
            return true;
        }
        else if (this.produtos[this.produtos.findIndex((produto) => produto.nome == comprando)].preco < valorInserido) {
            console.log(`valor incorreto ainda falta ${valorInserido - this.produtos[this.produtos.findIndex((produto) => produto.nome == comprando)].preco}`);
            this.inserirDinheiro(comprando, valorInserido);
        }
    }
}
