/**
 * Chatlab - Conceitos de array/object em Javascript.
 *
 * Implemente as funções a partir daqui.
 */

// Exemplo: function minhaFuncao() { ... }

// --------------------------------
// Não remover estas linhas
// --------------------------------

let listaMensagens = [];
let mensagemFinal = "";

function adicionarMensagem(apelido, mensagem) {
  const novaMensagem = {
    apelido: apelido,
    mensagem: mensagem,
  };

  listaMensagens.push(novaMensagem);
}

function formatarMensagens() {
  mensagemFinal = "";

  for (let i = 0; i < listaMensagens.length; i++) {
    let mensagem = listaMensagens[i];

    let mensagemFinalizada = `
    <div class="chat-message">
      <span class="chat-message-apelido">${mensagem.apelido} => </span>
      <span class="chat-message-item">${mensagem.mensagem}</span>
    </div>
  `;

    mensagemFinal += mensagemFinalizada.trim();
  }

  console.log(mensagemFinal);
  return mensagemFinal;
}

function login() {
  const buscarApelido = document.getElementById("buscarApelido");
  const chatContainer = document.getElementById("chat-container");
  buscarApelido.classList.add("hide");
  chatContainer.classList.remove("hide");
}

function atualizarHTML() {
  const container = document.getElementById("chat-messages");
  if (container) {
    container.innerHTML = mensagemFinal;
  }
}

function commitMessageClickHandler() {
  const textoMensagem = document.getElementById("message-input");
  const textoApelido = document.getElementById("message-nickname");
  adicionarMensagem(textoApelido?.value, textoMensagem?.value);
  formatarMensagens();
  atualizarHTML();
  textoMensagem.value = "";
}

if (typeof module !== "undefined" && module.exports) {
  document.addEventListener("DOMContentLoaded", function () {
    const botaoEnviar = document.getElementById("message-commit");
    botaoEnviar.addEventListener("click", commitMessageClickHandler);
  });
}

module.exports = {
  listaMensagens,
  adicionarMensagem,
  formatarMensagens,
  login,
  atualizarHTML,
  commitMessageClickHandler,
};
// --------------------------------
