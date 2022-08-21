let a = 80;
let b = 150;
let c = -50;
let isTriangulo;
if (a + b + c === 180 && a > 0 && b > 0 && c > 0) {
    isTriangulo = true;
} else {
    isTriangulo = false;
}
console.log (isTriangulo)

if (a < 0 || b < 0 || c < 0) {
    console.log ("Erro: nenhum ângulo pode ter valor negativo")
}
