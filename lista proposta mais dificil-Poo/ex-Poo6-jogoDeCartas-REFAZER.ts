// Implemente uma classe chamada “JogoCartas” que represente um jogo de cartas simples, como o Uno. Essa classe deve ter métodos para embaralhar as cartas, distribuir as cartas aos jogadores e permitir jogadas.

// fiz do jeito mais simples que poderia fzr, mas farei novamente adicionando algumas cartas para que fique mais complexo
interface Jogador{
    nome:string;
    numeroDeCartas:number;
}

class JogoCartas {
    jogadores:Jogador[];

    constructor(jogadores:Jogador[]){
        this.jogadores=jogadores;
    }

    misturarCartas(){
        return this.jogadores.map((jogador)=>jogador.numeroDeCartas = 0);
    }

    distribuirCartas(){
        return this.jogadores.map((jogador)=>jogador.numeroDeCartas = 7);
    }

    jogada(jogando:string){
        let nomeJogadores = this.jogadores.map((jogador)=>jogador.nome)
        return this.jogadores[nomeJogadores.findIndex((jogador)=> jogador == jogando)].numeroDeCartas -= 1

    }

    status(){
        console.log(this.jogadores)
    }
}

/* const novoJogo = new JogoCartas([{nome:"tiago", numeroDeCartas: 5},{nome:"carlos", numeroDeCartas: 2},{nome:"letra", numeroDeCartas: 3}]);

novoJogo.status();
novoJogo.misturarCartas();
novoJogo.status();

novoJogo.distribuirCartas();
novoJogo.status();

novoJogo.jogada("tiago")
novoJogo.status() */
