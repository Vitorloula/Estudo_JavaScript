let input = document.getElementById("input-principal"); // seleciona o input do html e armazena na variavel input
let button = document.getElementById("botao-adicionar"); // seleciona o button do html e armazena na variavel button
let button_remover = document.getElementById("botao-delete"); // seleciona o button do html e armazena na variavel button
let lista_de_tarefas = document.getElementById("tarefas"); // seleciona a ul do html e armazena na variavel lista_de_tarefas

// getElementsById é mais rapido do que querySelector
let vetor_de_tarefas = []; // cria um vetor vazio

function mostrarNaTela() {
  let novaLista = "";
  vetor_de_tarefas.forEach((tarefa) => {
    novaLista += `<li class = "item-tarefa">${tarefa}</li>`; // adiciona o valor do input no vetor e armazena na variavel novaLista
  });
  // <li> -> cria uma lista no html

  lista_de_tarefas.innerHTML = novaLista; // adiciona o valor da variavel novaLista na ul do html
}

function adicionar_tarefa() {
  vetor_de_tarefas.push(input.value); // adiciona o valor do input no vetor
  console.log(vetor_de_tarefas);
  mostrarNaTela();
}

function remover_tarefa() {
  vetor_de_tarefas.pop(); // remove o ultimo elemento do vetor
  mostrarNaTela();
}

button.addEventListener("click", adicionar_tarefa); // adiciona um evento de click no botao e executa a função adicionar_tarefa
button_remover.addEventListener("click", remover_tarefa); // adiciona um evento de click no botao e executa a função adicionar_tarefa
