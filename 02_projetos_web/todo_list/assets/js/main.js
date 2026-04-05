function meuEscopo() {
  const adicionarBtn = document.getElementById("adicionarBtn");
  const tarefaInput = document.getElementById("tarefaInput");
  const tarefaLista = document.getElementById("tarefaLista");

  function adicionarTarefa() {
    const tarefaTexto = tarefaInput.value.trim();
    if (tarefaTexto !== "") {
      const novoItem = criarElemento(tarefaTexto);
      tarefaLista.appendChild(novoItem);

      tarefaInput.value = "";
      salvarTarefas();
    }
  }
  function criarElemento(tarefaTexto) {
    // botões excluirBnt e marcarFeitaBtn serão colocados dentro na div para melhor organização
    const tarefaItem = document.createElement("li");
    tarefaItem.textContent = tarefaTexto;
    const botoesContainer = document.createElement("div");

    const excluirBtn = document.createElement("button");
    excluirBtn.textContent = "Excluir";
    excluirBtn.addEventListener("click", function () {
      tarefaItem.remove();
      salvarTarefas();
    });
    botoesContainer.appendChild(excluirBtn);

    const marcarFeitaBtn = document.createElement("button");
    marcarFeitaBtn.textContent = "Marcar como feita";
    marcarFeitaBtn.addEventListener("click", function () {
      tarefaItem.classList.toggle("feita");
    });
    botoesContainer.appendChild(marcarFeitaBtn);

    tarefaItem.appendChild(botoesContainer);
    return tarefaItem;
  }

  adicionarBtn.addEventListener("click", adicionarTarefa);

  tarefaInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      adicionarTarefa();
    }
  });
  // salvar as tarefas no localStorage
  function salvarTarefas() {
    const listaParaSalvar = [];
    const tarefas = document.querySelectorAll("#tarefaLista li");

    tarefas.forEach((item) => {
      const tarefa = item.firstChild.textContent;
      listaParaSalvar.push(tarefa);
    });

    localStorage.setItem("listaTarefas", JSON.stringify(listaParaSalvar));
  }
  function carregarTarefas() {
    const tarefasSalvas = JSON.parse(localStorage.getItem("listaTarefas"));
    if (tarefasSalvas) {
      tarefasSalvas.forEach((tarefa) => {
        const novoItem = criarElemento(tarefa);
        tarefaLista.appendChild(novoItem);
      });
    }
  }
  carregarTarefas();
}
meuEscopo();
