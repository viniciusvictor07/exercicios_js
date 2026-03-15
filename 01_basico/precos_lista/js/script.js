const listaItens = [];

function somarPrecos(apenasPrecos) {
  let total_soma = 0;
  for (let i = 0; i < apenasPrecos.length; i++) {
    total_soma += apenasPrecos[i];
  }
  return total_soma;
}

while (true) {
  const itemInfo = {
    nome: prompt('Digite o nome do item: ').trim(),
    valor: Number(prompt('Digite o valor do item em R$: ')),
  };

  listaItens.push(itemInfo);

  let escolha = prompt('Deseja continuar? [S/N]: ').trim().toUpperCase();
  if (escolha !== 'S') break;
}

const apenasItens = listaItens.map((item) => item.nome);
const apenasPrecos = listaItens.map((item) => item.valor);
const total_preco = somarPrecos(apenasPrecos);

alert(
  `Lista de itens: ${apenasItens.join(', ')}. Total somado: R$${total_preco.toFixed(2)}`,
);
