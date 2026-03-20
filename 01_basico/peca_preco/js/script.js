// função para avaliar o custo-benefício
function avaliarCustoBeneficio(peca) {
  if (peca.preco < 1000) {
    return 'Custo-benefício para upgrade vertical';
  } else {
    return 'Investimento Premium';
  }
}

//  validar valores informados pelo usuário
try {
  const tipoInformado = prompt('Digite o tipo de peça:');
  if (tipoInformado.trim() === '')
    throw new Error('O tipo da peça é obrigatório!');

  const modeloInformado = prompt('Digite o modelo da peça:');
  if (modeloInformado.trim() === '')
    throw new Error('O modelo da peça é obrigatório!');

  const precoInformado = Number(prompt('Digite o valor em R$: '));
  if (isNaN(precoInformado) || precoInformado < 0)
    throw new Error('Digite um valor válido!');
  // atribuir valores ao objeto
  const processador = {
    tipo: tipoInformado,
    modelo: modeloInformado,
    preco: precoInformado,
  };

  // exibir resultado
  const resultado = avaliarCustoBeneficio(processador);
  alert(
    `Peça: ${processador.tipo}\nModelo: ${processador.modelo}\nPreço: R$ ${processador.preco.toFixed(2)}\nAvaliação: ${resultado}`,
  );
} catch (error) {
  // tratar erros
  alert(`ERRO: ${error.message}`);
}
