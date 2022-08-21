let salarioBruto = 7000;
let salarioMenosInss;
let salarioLiquido;
let impostoRenda;

if (salarioBruto <= 1556.94) {
    salarioMenosInss = salarioBruto - (salarioBruto * 0.08);
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    salarioMenosInss = salarioBruto - (salarioBruto * 0.09); 
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    salarioMenosInss = salarioBruto - (salarioBruto * 0.11);
} else {
    salarioMenosInss = salarioBruto - 570.88;
}

if (salarioMenosInss <= 1903.98) {
    impostoRenda = 0;
} else if (salarioMenosInss >= 1903.99 && salarioMenosInss <= 2826.65) {
    impostoRenda = (salarioMenosInss * 0.075) - 142.80;
} else if (salarioMenosInss >= 2826.66 && salarioMenosInss <= 3751.05) {
    impostoRenda = (salarioMenosInss * 0.15) - 354.80;
} else if (salarioMenosInss >= 3751.06 && salarioMenosInss <= 4664.68) {
    impostoRenda = (salarioMenosInss * 0.225) - 636.13;
} else {
    impostoRenda = (salarioMenosInss * 0.275) - 869.36;
}
salarioLiquido = (salarioMenosInss - impostoRenda).toFixed (2);

console.log ("O salário líquido é R$ ", salarioLiquido)



