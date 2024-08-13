"use strict";
// Crie uma classe chamada “Paciente” que possua atributos para armazenar o nome, a idade e o histórico de consultas de um paciente. Implemente métodos para adicionar uma nova consulta ao histórico e exibir as consultas realizadas.
class Paciente {
    nome;
    idade;
    historicoDeConsultas;
    constructor(nome, idade, historicoDeConsultas) {
        this.nome = nome;
        this.idade = idade;
        this.historicoDeConsultas = historicoDeConsultas;
    }
    novaConsulta(consulta) {
        this.historicoDeConsultas.push(consulta);
    }
    consultas() {
        return this.historicoDeConsultas;
    }
}
const paciente = new Paciente("tiago", 24, []);
console.log(paciente);
paciente.novaConsulta(new Date(2014, 0, 29));
console.log(paciente.consultas());
paciente.novaConsulta(new Date);
console.log(paciente.consultas());
