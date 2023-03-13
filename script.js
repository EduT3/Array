const botao = {
  botao1: document.getElementById("botao1"),
  botao2: document.getElementById("botao2"),
  botao3: document.getElementById("botao3")
};

botao.botao1.addEventListener("click", mostraOArray);
botao.botao2.addEventListener("click", adicionarNumero);
botao.botao3.addEventListener("click", inverterLista);

const umArray = [1, 2, 3, 4, 5];

const meuFormulario = document.getElementById('meuFormulario');
const inputNovoValor = document.getElementById('novoValor');

let meuArray = [];
const h4 = document.querySelector("#h4");


meuFormulario.addEventListener('submit', function(event) {
  event.preventDefault(); 

  meuArray.push(inputNovoValor.value);

  inputNovoValor.value = '';
  
  h4.innerHTML = meuArray;
  
});


function mostraOArray() {
  const h1 = document.querySelector("#h1");
  h1.innerHTML = umArray;
  console.log(umArray);
}

function adicionarNumero() {
  umArray.push(6);
  const h2 = document.querySelector("#h2");
  h2.innerHTML = umArray;
  console.log(umArray);
}

function inverterLista() {
  umArray.reverse();
  const h3 = document.querySelector("#h3");
  h3.innerHTML = umArray;
  console.log(umArray);
}

