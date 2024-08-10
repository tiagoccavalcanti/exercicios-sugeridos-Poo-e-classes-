// Crie uma classe chamada “MáquinaDeVendas” que simule uma máquina de venda de produtos. Essa classe deve permitir cadastrar produtos, selecionar um produto para compra, inserir dinheiro, retornar o troco e exibir o estoque disponível.

// esse codigo acabou travando o transpilador online ent nao testei as funcionalidades, mas vi que se inserir o valor correte ele funciona (acredito que a recursao fudeu tudo)
interface Produto{
    nome:string;
    preco:number;
    quantidadeEmEstoque:number;
}

/* abstract class Carrinho{
    carrinho:Produto[]=[];
    constructor(carrinho:Produto[]){
    this.carrinho = carrinho
    }
} */

class MaquinaDeVendas {
    private produtos:Produto[];
    constructor(produtos:Produto[]){
        this.produtos=produtos;
        
    }
    cadastraProduto(produto:Produto){
        return this.produtos.push(produto)
    }

    exibirEstoque(){
        console.log(this.produtos)
    }

    comprar(comprando:string, valorInserido:number){
        this.inserirDinheiro(comprando, valorInserido)
        let index = this.produtos.findIndex((produto) => produto.nome==comprando)
        console.log(`${this.produtos[index].nome} selecionado com sucesso`);

        return this.produtos[index].quantidadeEmEstoque -= 1
        }
    

    inserirDinheiro(comprando:string, valorInserido:number){
    if(this.produtos[this.produtos.findIndex((produto) => produto.nome==comprando)].preco >= valorInserido){
        console.log(`seu troco é ${this.produtos[this.produtos.findIndex((produto) => produto.nome==comprando)].preco - valorInserido}`);
        return true;
    }
    else if(this.produtos[this.produtos.findIndex((produto) => produto.nome==comprando)].preco < valorInserido){
        console.log(`valor incorreto ainda falta ${valorInserido-this.produtos[this.produtos.findIndex((produto) => produto.nome==comprando)].preco}`);
        this.inserirDinheiro(comprando, valorInserido)
    }
    }
}

