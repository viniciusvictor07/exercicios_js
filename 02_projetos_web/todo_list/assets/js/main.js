const adicionarBtn = document.getElementById("adicionarBtn");
const tarefaInput = document.getElementById("tarefaInput");
const tarefaLista = document.getElementById("tarefaLista");

function adicionarTarefa() {
  // botões de excluir e marcar como feita serão colocados dentro dessa div para melhor organização
  const botoesContainer = document.createElement("div");

  const tarefaTexto = tarefaInput.value.trim();
  if (tarefaTexto !== "") {
    const tarefaItem = document.createElement("li");
    tarefaItem.textContent = tarefaTexto;

    const excluirBtn = document.createElement("button");
    excluirBtn.textContent = "Excluir";
    excluirBtn.addEventListener("click", function () {
      tarefaItem.remove();
    });
    botoesContainer.appendChild(excluirBtn);

    const marcarFeitaBtn = document.createElement("button");
    marcarFeitaBtn.textContent = "Marcar como feita";
    marcarFeitaBtn.addEventListener("click", function () {
      tarefaItem.classList.toggle("feita");
    });
    botoesContainer.appendChild(marcarFeitaBtn);

    tarefaItem.appendChild(botoesContainer);
    tarefaLista.appendChild(tarefaItem);
    tarefaInput.value = "";
  }
}

adicionarBtn.addEventListener("click", adicionarTarefa);

tarefaInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    adicionarTarefa();
  }
});
