// Implemente uma classe chamada “Carro” com atributos para armazenar a marca, o modelo e a velocidade atual do carro. Adicione métodos para acelerar, frear e exibir a velocidade atual.

class Carro {
    marca:string;
    modelo:string;
    velocidadeAtual:number;

    constructor(marca:string, modelo:string, velocidadeAtual:number){
        this.marca=marca;
        this.modelo=modelo;
        this.velocidadeAtual=velocidadeAtual;
    }
acelerar(intensidade:string){
    if(intensidade == "muito"){
        return this.velocidadeAtual += 50
    }else if(intensidade == "medio"){
        return this.velocidadeAtual += 30
    }else if(intensidade == "pouco"){
        return this.velocidadeAtual += 10
    }
}

frear(intensidade:string){
    if(intensidade == "muito"){
         this.velocidadeAtual -= 50
    }else if(intensidade == "medio"){
         this.velocidadeAtual -= 30
    }else if(intensidade == "pouco"){
         this.velocidadeAtual -= 10
    }else if(intensidade == "parar"){
         this.velocidadeAtual = 0
    }
    if(this.velocidadeAtual <= 0){
        return this.velocidadeAtual = 0
    }else{
        return this.velocidadeAtual
    }
}

mostrarVelo(){
    return `a velocidade atual é ${this.velocidadeAtual}`
}

}
/* teste
var car = new Carro("gol", "wolks", 50)

car.frear("medio")
console.log(car.mostrarVelo());

car.frear("medio")
console.log(car.mostrarVelo()) */