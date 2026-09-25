/*
Nome de classe SEMPRE é maiúsculo!
Se precisar escrever um nome composto, a letra inicial de cada palavra é maiúsculam,
e o resto em minúscula.
Por exemplo:
GatoDeBotas
*/

class Gato {
    /*
    Um construtor contrói (instância, cria),
    Um objeto e uma classe.
    */
    constructor(nome, idade, pelagem, peso) { // Coisas que são informações para contruir um gato.
        // Copia informações que "vem de fora", para uma ficha interna.
        // Atributos
        this.nome = nome         
        this.idade = idade      
        this.pelagem = pelagem  
        this.peso = peso       
    }

    // Métodos
    brincar() {
        console.log("*perseguindo o laser*\n")
    }

    comer() {
        console.log("*comendo wiskas sachê*\n")
    }

    domir() {
        console.log("ZzZzZzZ....\n")
    }

    brincarCom(outroGato) {
        console.log(`*${this.nome} está brincando com ${outroGato.nome}*\n`)
    }
}

let tuco = new Gato("Tuco", 5, "Siamês", 4)
let walter = new Gato("Walter", 4, "Branco", 3)



// Exibe informações do Tuco
console.log(`Tuco:\n Idade: ${tuco.idade}\n Pelagem: ${tuco.pelagem}\n Peso: ${tuco.peso}Kg`)
tuco.brincarCom(walter) // Chama um método

// Exibe informações do Walter
console.log(`Walter:\n Idade: ${walter.idade}\n Pelagem: ${walter.pelagem}\n Peso: ${walter.peso}Kg`)
walter.domir() // Chama um método