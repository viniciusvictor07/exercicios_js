// Atribuir
const botaoReset = document.getElementById('meuBotaoReset');
const botao = document.getElementById('meuBotao');
const titulo = document.querySelector('h1');

// O Título e o Botão 1 precisam de um espaço fixo entre eles
titulo.style.marginBottom = '10px';

// O Botão de Reset vira o "Fantasma Centralizado"
botaoReset.style.position = 'absolute';
botaoReset.style.top = '70%';
botaoReset.style.left = '50%';
botaoReset.style.transform = 'translate(-50%, -50%)';
botaoReset.style.display = 'none';

// Adicionar um ouvinte de evento do #meuBotao
botao.addEventListener('click', function () {
  // adicionar botão de reset
  botaoReset.style.display = 'block';

  // Muda a cor do fundo para um verde "sucesso"
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

  // Muda a cor e titulo
  titulo.innerText = 'Teste de Conexão JS';
  titulo.style.color = '#000000';

  // Muda o texto e cor do meuBotao
  botao.innerText = 'Clique para Ativar';
  botao.style.backgroundColor = '#5f27cd';

  // Faz o botão de reset sumir
  botaoReset.style.display = 'none';
});
