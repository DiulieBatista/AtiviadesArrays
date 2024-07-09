const ler = require('readline-sync');


let nome =ler.question("digite seu nome: ");
let idade =ler.question("digite sua idade: ");

let x={
    nome : nome,
    idade: idade
}

console.log(x.nome);
console.log(x.idade );
