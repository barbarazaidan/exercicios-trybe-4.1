let porcentagem = prompt ("Digite a nota:");
let conceito = "";

if (porcentagem < 0 || porcentagem > 100) {
    console.log ("A nota informada é inválida!")
} else if (porcentagem >= 90) {
    conceito ="A"; 
} else if (porcentagem >= 80) {
    conceito ="B"; 
} else if (porcentagem >= 70) {
    conceito ="C";  
} else if (porcentagem >= 60) {
    conceito ="D"; 
} else if (porcentagem >= 50) {
    conceito ="E"; 
} else if (porcentagem < 50) {
    conceito ="F"; 
} 
console.log (conceito)