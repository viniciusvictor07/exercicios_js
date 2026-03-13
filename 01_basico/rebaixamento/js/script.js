const timeNome = prompt('Digite o nome do seu time: ').trim();
const pontos = Number(prompt('Digite quantos pontos seu time tem: '));

if (isNaN(pontos)) {
  alert('Por favor, digite um número!');
} else if (pontos >= 45) {
  alert(`${timeNome} escapou do rebaixamento!`);
} else {
  alert(`${timeNome} está em uma situação complicada!`);
}
