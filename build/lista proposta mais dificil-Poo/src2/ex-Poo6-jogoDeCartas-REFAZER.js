"use strict";
// Implemente uma classe chamada “JogoCartas” que represente um jogo de cartas simples, como o Uno. Essa classe deve ter métodos para embaralhar as cartas, distribuir as cartas aos jogadores e permitir jogadas.
class JogoCartas {
    jogadores;
    constructor(jogadores) {
        this.jogadores = jogadores;
    }
    misturarCartas() {
        return this.jogadores.map((jogador) => jogador.numeroDeCartas = 0);
    }
    distribuirCartas() {
        return this.jogadores.map((jogador) => jogador.numeroDeCartas = 7);
    }
    jogada(jogando) {
        let nomeJogadores = this.jogadores.map((jogador) => jogador.nome);
        return this.jogadores[nomeJogadores.findIndex((jogador) => jogador == jogando)].numeroDeCartas -= 1;
    }
    status() {
        console.log(this.jogadores);
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
