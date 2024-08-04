// Implemente uma classe chamada “Aluno” que possua atributos para armazenar o nome, a matrícula e as notas de um aluno. Adicione métodos para calcular a média das notas e verificar a situação do aluno (aprovado ou reprovado).

// resolução usando um vetor (preciso entender se eh possivel limitar esse vetor)(da pra limitar através das TUPLAS(?))
class Alunos {
    nome: string;
    matricula: number;
    notas:[number,number,number,number];

    constructor(nome:string, matricula:number, notas:[number,number,number,number]){
        this.nome = nome;
        this.matricula = matricula;
        this.notas = notas;
    }

    media():number{
        let mediaAlunos = 0
        for(var i = 0; i < this.notas.length; i++){
            mediaAlunos += this.notas[i]
        }
        // isso pode mas por algum motivo nao usar os parenteses se nao da erro
        return mediaAlunos/this.notas.length;
    }

    situacao(): string{
        if (this.media() >= 7){
            return `parabens! Aprovado com média ${this.media()}`
        }else{
            return `infelizmente você está reprovado, pois sua média é ${this.media()}`
        }
    }
}

const aluno1 = new Alunos("tiago", 100, [2, 3, 4, 5])

console.log(aluno1.media())
console.log(aluno1.situacao())


// refazendo sem usar a porra do array
// funcionou, mas talver eu tenha resolvido o de la de cima tbm
/* class Alunos {
    nome:string;
    matricula:number;
    nota1:number;
    nota2:number;
    nota3:number;
    nota4:number;

    constructor(nome:string, matricula:number, nota1:number, nota2:number, nota3:number, nota4:number){
        this.nome=nome;
        this.matricula=matricula;
        this.nota1=nota1;
        this.nota2=nota2;
        this.nota3=nota3;
        this.nota4=nota4;
    }

    media(){
        var mediaAluno=(this.nota1 + this.nota2 + this.nota3 + this.nota4)/4
        return mediaAluno
    }

    situacao(){
        if(this.media() < 7){
            return `O aluno ${this.nome}, infelizmente, está reprovado`

        }else{
            return `O aluno ${this.nome} está aprovado. Parabens!`
        }
    }
}

// teste
const aluno1 = new Alunos("tiago", 100, 40,50,10,20)

console.log(aluno1.media()) */