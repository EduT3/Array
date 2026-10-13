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

const meuArray = [];
const h4 = document.querySelector("#h4");


meuFormulario.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const valor = inputNovoValor.value.trim();
  if (!valor) {
    inputNovoValor.focus();
    return;
  }
  meuArray.push(valor);

  inputNovoValor.value = '';
  
  h4.textContent = meuArray.join(", ");
  inputNovoValor.focus();
  
});


function mostraOArray() {
  const h1 = document.querySelector("#h1");
  h1.textContent = umArray.join(", ");
  console.log(umArray);
}

function adicionarNumero() {
  umArray.push(6);
  const h2 = document.querySelector("#h2");
  h2.textContent = umArray.join(", ");
  console.log(umArray);
}

function inverterLista() {
  umArray.reverse();
  const h3 = document.querySelector("#h3");
  h3.textContent = umArray.join(", ");
  console.log(umArray);
}

