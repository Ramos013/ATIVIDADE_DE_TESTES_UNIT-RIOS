
function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

 */
function dividir(a, b) {
  if (b === 0) {
    throw new Error('Divisão por zero não é permitida');
  }
  return a / b;
}

function potencia(base, expoente) {
  return Math.pow(base, expoente);
}

function media(numeros) {
  if (!Array.isArray(numeros) || numeros.length === 0) {
    throw new Error('A lista de números deve ter pelo menos um valor');
  }

  const soma = numeros.reduce((acumulador, numeroAtual) => acumulador + numeroAtual, 0);
  return soma / numeros.length;
}

function porcentagem(valor, percentual) {
  return (valor * percentual) / 100;
}

module.exports = {
  somar,
  subtrair,
  multiplicar,
  dividir,
  potencia,
  media,
  porcentagem,
};
