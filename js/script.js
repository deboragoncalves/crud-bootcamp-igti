// Lista inicial 

var globalNames = ["Luis", "Roberto", "Maria", "Luciana"];

// Input

var inputName = document.querySelector("#name");

// Evitar recarregar a página quando submeter formulário: prevent default

function preventFormSubmit() {
  var form = document.querySelector("form")

  // Escutar evento de submit e executar função

  form.addEventListener('submit', formSubmit)

  function formSubmit(event) {
    event.preventDefault();
  }
}

preventFormSubmit();

// Input onfocus quando carregar a página

function inputFocus() {
  inputName.focus()
}

inputFocus();