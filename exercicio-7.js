const a = 5;
const b = 50;
const c = 61;
let maiorNumero;

if (a > b && a > c) {
    maiorNumero = a;
} else if (b > a && b > c) {
    maiorNumero = b;
} else if (c > a && c > b) {
    maiorNumero = c;
}
console.log (maiorNumero)