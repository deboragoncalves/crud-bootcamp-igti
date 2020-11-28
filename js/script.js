// Lista inicial

let globalNames = ['Luis', 'Roberto', 'Maria', 'Luciana', 'Débora'];

// Input

let inputName = document.querySelector('#name');

// Detectar edição

let isEditing = false;

// Indice nome

let indexName = null;

function start() {
  preventFormSubmit();
  inputFocus();
  populateList();
}

start();

// Evitar recarregar a página quando submeter formulário: prevent default

function preventFormSubmit() {
  let form = document.querySelector('form');

  // Escutar evento de submit e executar função

  form.addEventListener('submit', formSubmit);

  function formSubmit(event) {
    event.preventDefault();
  }
}

// Input onfocus quando carregar a página

function inputFocus() {

  // Pegar nome input

  getInputValue();

  inputName.focus();
}

function getInputValue() {
  // Keyup: quando solta a tecla

  inputName.addEventListener('keyup', getValue);

  function getValue(event) {

    // Pegar valor quando apertar enter, se não for vazio
    // Trim: verifica se não tem espaços em branco

    if (event.key === 'Enter' && (event.target.value.length > 0 && event.target.value.trim() !== "")) {

      console.log(event.target.value)

      let newName = event.target.value;

      if (isEditing) {

        // Atualizar nome conforme o index do nome clicado

        globalNames[indexName] = newName;

        clearInput();

      } else {

        // Adicionar nome na lista 

        globalNames = [...globalNames, newName];

        clearInput();

      }

      // Mostrar lista 

      populateList();

      // Desativar edição

      isEditing = false;

    } 
  }
}

function populateList() {

  // Pegar div

  let divNames = document.querySelector('#names');

  // Limpar Lista

  divNames.innerHTML = "";

  // Criar ul: createElement

  let ul = document.createElement('ul');

  // Percorrer array de Nomes

  for (let i = 0; i < globalNames.length; i++) {

    let currentName = globalNames[i];

    // Criar li, span e button

    let li = document.createElement('li');
    let span = createSpan(currentName, i);
    let button = createDeleteButton(i);

    // Adicionar nome e button ao item da Lista

    li.appendChild(button);
    li.appendChild(span);

    // Adicionar item a ul

    ul.appendChild(li);
  }

  // Adicionar ul a div

  divNames.appendChild(ul);
  clearInput();
}

function createSpan(name, index) {

  let span = document.createElement('span');

  span.textContent = name;

  // Adicionar classe ao span

  span.classList.add('item-list');

  // click

  span.addEventListener('click', editName);

  function editName() {

    // Inserir valor no input e trocar variável para true

    inputName.value = name;
    inputName.focus();
    isEditing = true;
    indexName = index;
  }

  return span;

}

// Criar button delete

function createDeleteButton(index) {
  let button = document.createElement('button');

  button.textContent = "x";

  // Adicionar classe ao button

  button.classList.add("deleteButton");

  // Escutar click

  button.addEventListener('click', deleteName);

  function deleteName() {

    // Splice: exclui elementos. posição (1o argumento), qtde elementos (2o), elementos a serem acrescentados (3o - opcional)

    // Filter: índice atual (i) for igual ao index do item clicado = excluir, retornar diferença.

    globalNames = globalNames.filter((name, i) => i !== index);

    // Mostrar lista

    populateList();
    
  }

  return button;
}

// Limpar input ao adicionar na lista

function clearInput() {

  inputName.value = "";

  // Focus

  inputName.focus();

};