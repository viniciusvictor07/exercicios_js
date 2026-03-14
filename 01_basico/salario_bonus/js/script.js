const salario = Number(prompt('Digite seu salário: '));
const vendas = Number(prompt('Digite suas vendas: '));
const bonus = 0.1;
let salarioTotal;
let bonusTxt = '';

if (vendas > 1000) {
  salarioTotal = salario + salario * bonus;
  bonusTxt = '(bônus de 10% aplicado)';
} else {
  salarioTotal = salario;
  bonusTxt = '(sem bônus adicional)';
}
alert(
  `Total de vendas: ${vendas}. Salário final: R$${salarioTotal.toFixed(2)} ${bonusTxt}`,
);
