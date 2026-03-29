function meuEscopo() {
  // Atribuir elementos ao DOM
  const botaoReset = document.getElementById('meuBotaoReset');
  const botao = document.getElementById('meuBotao');
  const titulo = document.querySelector('h1');

  // Ocultar o botaoReset
  botaoReset.style.position = 'absolute';
  botaoReset.style.top = '65%';
  botaoReset.style.left = '50%';
  botaoReset.style.transform = 'translate(-50%, -50%)';
  botaoReset.style.display = 'none';

  // Adicionar um ouvinte de evento do #meuBotao
  botao.addEventListener('click', function () {
    // adicionar botão de reset
    botaoReset.style.display = 'block';

    // Muda a cor do fundo
    document.body.style.backgroundColor = '#000000';

    // Muda o texto do botão
    botao.innerText = 'JS CONECTADO!';

    // Muda a cor do meuBotao
    botao.style.backgroundColor = '#202020';

    // Muda a cor do meuBotaoReset
    botaoReset.style.backgroundColor = '#202020';

    // Muda o texto do titulo
    titulo.innerText = 'Foco no Objetivo';

    // Muda a cor do titulo
    titulo.style.color = '#ffffff';
  });

  // Adicionar um ouvinte de evento do #meuBotaoReset
  botaoReset.addEventListener('click', function () {
    // Faz o botão de reset sumir
    botaoReset.style.display = 'none';

    // Muda a cor do fundo
    document.body.style.backgroundColor = '#ffffff';

    // Muda a cor e nome do titulo
    titulo.innerText = 'Teste de Conexão JS';
    titulo.style.color = '#000000';

    // Muda o texto e cor do meuBotao
    botao.innerText = 'Clique para Ativar';
    botao.style.backgroundColor = '#5f27cd';

    // Faz o botão de reset sumir
    botaoReset.style.display = 'none';
  });
}
meuEscopo();
