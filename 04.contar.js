const ler = require('readline-sync');

let elementos = [];

let cont=0;
console.log("Digite 5 elementos que tenha no sacolão :");
for (let i = 0; i < 5; i++) {
   
    let element = ler.question( "elemento ");
    elementos.push(element);
 
}
let x = ler.question( "digite um elemento :");

for (let i = 0; i < elementos.length; i++) {
  if ( x===elementos[i]) {
    
    cont++;  
}
    
}

console.log( "o elemento "+x+" digitado foi :"+ cont++);

