// cinco elementos no arrays
const ler = require('readline-sync');

let elementos = [];


console.log("Digite 5 elementos da tabela periódica:");
for (let i = 0; i < 5; i++) {
   
    let element = ler.question( "elemento ");
    elementos.push(element);
}

console.log("--------------- Os elementos cadastrados foram: ---------------------------");
for (let i = 0; i < elementos.length; i++) {
    console.log(`=> ${elementos[i]}`);
}
