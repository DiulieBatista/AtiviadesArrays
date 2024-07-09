// quantidade de elementos 
const ler = require('readline-sync');

let elementos = [];


console.log("Digite 5 elementos do supermecado:");
for (let i = 0; i < 5; i++) {
   
    let element = ler.question( "elemento ");
    elementos.push(element);
}

console.log("--------------- Os elementos cadastrados foram: ---------------------------");
for (let i = 0; i < elementos.length; i++) {
    console.log(`=> ${elementos[i]}`);
}

console.log(elementos.length);
