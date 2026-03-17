// array itens
const bauDeItens = [
  'Erva Verde',
  'Munição de Pistola',
  'Erva Amarela',
  'Spray de Ajuda',
  'Munição de Pistola',
  'Erva Vermelha',
];
// função vasculharBau
function vasculharBau() {
  const bauValor = Math.floor(Math.random() * 3) + 1;
  // condições do baú
  if (bauValor === 3) {
    alert('Você achou um Lançador de Granadas!');
    bauDeItens.push('Lançador de Granadas');
  } else alert('Você não achou nada.');
  return bauDeItens;
}
// adicionar "Faca" no final da lista
alert('Você achou uma Faca!');
bauDeItens.push('Faca');
// adicionar "Chave da Mansão" no começo da lista
alert('Você achou a Chave da Mansão!');
bauDeItens.unshift('Chave da Mansão');
// perguntar ao usuário se ele deseja vasculhar baú
let escolha = prompt('Deseja vasculhar baú? [S/N]: ').trim().toUpperCase();
if (escolha === 'S') {
  vasculharBau();
}
// verificar se "Lançador de Granadas" está na lista
if (bauDeItens.includes('Lançador de Granadas')) {
  alert('Você está armado!');
} else {
  alert('Você não está armado!');
}
// array soErvas
const soErvas = bauDeItens.filter((item) => item.includes('Erva'));

// criar lista inventario com nomes formatados
const inventario = bauDeItens.map((item) => `Item: ${item}`);

// exibir inventário
alert(inventario.join('\n'));
alert(`Você tem ${soErvas.length} ervas.`);
