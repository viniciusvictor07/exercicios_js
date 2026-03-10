const nome = 'Luis Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const alturaEmM = 1.8;
const peso = 84;
let indiceMassaCorporal;
let anoNascimento;

indiceMassaCorporal = peso / alturaEmM ** 2;
anoNascimento = 2026 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg.`);
console.log(
  `tem ${alturaEmM}m de altura e seu IMC é de ${indiceMassaCorporal.toFixed(2)}.`,
);
console.log(`Nasceu em ${anoNascimento}.`);
