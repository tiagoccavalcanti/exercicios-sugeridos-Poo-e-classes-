// Implemente uma classe chamada “Agenda” que represente uma agenda telefônica. Essa classe deve permitir adicionar, editar e remover contatos, além de buscar por contatos a partir de um nome ou número de telefone. 

interface Contato {
    nome:string;
    numero:number;
}

class Agenda {
    private contatos:Contato[]=[];

    constructor(contatos:Contato[]){
        this.contatos=contatos;
    }

   public adicionar(contato:Contato){
        this.contatos.push(contato);
    }

    public remover(removendo:string|number){
        if(typeof removendo === "string"){
            let nomes = this.contatos.map((contato)=>(contato.nome))
            return this.contatos.splice(nomes.findIndex((nome)=>(removendo==nome)), 1)
        }
        let numeros = this.contatos.map((contato)=>(contato.numero))
        return this.contatos.splice(numeros.findIndex((numero)=>(removendo==numero), 1))
        
    }

    public buscarContatos(buscando:string|number){
        if(typeof buscando === "string"){
           let nomesEncontrados = this.contatos.filter((contato)=>contato.nome==buscando)
           return nomesEncontrados;
        }
        let numerosEncontrados = this.contatos.filter((contato)=>contato.numero == buscando)
        return numerosEncontrados;
    }


    editar(contatoAntigo:string|number, contatoNovo:Contato){
        this.remover(contatoAntigo);
        this.adicionar(contatoNovo)
    }

}

/* const agenda = new Agenda([])
agenda.adicionar({nome:"tiago", numero: 245462345345})
agenda.adicionar({nome:"leticia", numero: 4871150431})
agenda.adicionar({nome:"tiago", numero: 23455293485})

// agenda.remover("tiago")
console.log(agenda.buscarContatos("tiago"))
console.log(agenda.contatos)
agenda.editar("tiago", {nome:"rafaelo", numero:324574295})
console.log(agenda.contatos) */