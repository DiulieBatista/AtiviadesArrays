const ler = require('readline-sync');

let nomes = [];

let cont=0;
console.log("Digite 10 nomes :");
for (let i = 0; i < 10; i++) {
   
    let nome = ler.question( "=> ");
    nomes.push(nome);

  
}
console.clear();

let x = ler.question( "digite um nome para pesquisa  :");

for (let i = 0; i < nomes.length; i++) {

  if ( x===nomes[i]) {

  console.log( " ACHEI o nome pesquisado "+ x);
  break;
  
  }else{
    console.log( "NÃO ACHEI o nome pesquisado "+ x);
    break;
  }

}