// Implemente uma classe chamada “Livro” com atributos para armazenar o título, o autor e o número de páginas do livro. Adicione métodos para emprestar o livro, devolvê-lo e verificar se está disponível.

class Livro {
    titulo:string;
    autor:string;
    numeroPaginas:number;
    disponivel:boolean;

    constructor(titulo:string, autor:string, numeroPaginas:number, disponivel:boolean){
        this.titulo=titulo;
        this.autor=autor;
        this.numeroPaginas=numeroPaginas;
        this.disponivel=disponivel;
    }

    
    emprestimo(){
        return this.disponivel = false
    }

    devolve(){
        return this.disponivel = true
    }

    verificaDisponivel(){
        if(this.disponivel){
            return `o livro ${this.titulo} está disponível`
        }else{
            return `o livro ${this.titulo} não está disponível`
        }
}
}
// teste
const livro1 = new Livro("deuses americanos", "niel gaiman", 500, true)

console.log(livro1.verificaDisponivel())

livro1.emprestimo()
console.log(livro1.verificaDisponivel())

livro1.devolve()
console.log(livro1.verificaDisponivel)

