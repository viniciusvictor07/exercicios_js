const usuario = prompt('Digite o nome de usuário: ').trim();
const senha = prompt('Digite a senha de usuário: ');

if (usuario !== 'admin' || senha !== '1234') {
  alert('Usuário ou senha incorretos.');
} else {
  alert(`Acesso liberado. Bem-vindo, ${usuario}!`);
}
