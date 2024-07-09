const ler = require('readline-sync');


let numeros = [];


console.log("Digite 10 números:");

for (let i = 0; i < 10; i++) {
    let numero = ler.questionInt( "numeros "+(i+1));
    numeros.push(numero);
}

let contPares = 0;


for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        contPares++;
    }
}


console.log("O array possui "+ contPares+" números pares.");


