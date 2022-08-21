const custo = 80;
const precoVenda = 150;
// lucro (precoVenda - custo) para 1.000 unidades
// sobre o custo tem 20% de imposto
const custoTotal = custo + (0.2 * custo);
const lucro = precoVenda - custoTotal;
const lucroTotal = lucro * 1000

console.log (lucroTotal)

