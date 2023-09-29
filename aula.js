/*
Variaveis em java script
    - let, const e var(não utiliza mais)
        -> let: variavel que pode ser alterada
        -> const: variavel que não pode ser alterada

    if, else, else if
    if -> se (condição) {executa o bloco de codigo}
    else -> senão {executa o bloco de codigo}
    else if -> senão se (condição) {executa o bloco de codigo}

    Funções em java script 
        -> function nome_da_função (parametros) {bloco de codigo}
        -> function nome_da_função (parametros) {return bloco de codigo}
        -> retorno em java script é opcional -> nome_da_função(parametros)

    Array em java script
        -> let nome_array = [valor1, valor2, valor3, valor4]
*/

let idade = 5;
// no let pode alterar o valor da variavel
console.log(idade);

function maio_ou_menor(idade) {
  if (idade >= 18) {
    console.log("Maior de idade");
  } else if (idade < 18) {
    console.log("Menor de idade");
  }
}
maio_ou_menor(idade);

// Array
let frutas = ["maça", "pera", "laranja"];

frutas.push("uva"); // adiciona um elemento no array

frutas.forEach((fruta) => {
  if (fruta == "uva") {
    console.log(fruta);
  } else {
    console.log("Não é uva");
  }
});
frutas.pop(); // remove o ultimo elemento do array -> (uva)
frutas.shift(); // remove o primeiro elemento do array -> (maça)

frutas.forEach((fruta) => {
  console.log(fruta);
});

let nomes = ["Antonio", "João", "Maria", "José"];

for (let i = 0; i < nomes.length; i++) {
  if (nomes[i] == "Antonio") {
    console.log(nomes[i]);
  }
}
