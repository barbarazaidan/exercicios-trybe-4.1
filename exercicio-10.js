let rei = "vertical, horizontal e diagonal, porém uma casa por vez";
let rainha = "vertical, horizontal e diagonal, quantas casas quiser";
let torre = "vertical e horizontal, quantas casas quiser";
let bispo = "diagonal, quantas casas quiser";
let cavalo = "movimento em L, andando três casas";
let peao = "vertical, um casa por vez";
let pecaXadrez= prompt ("Qual a peça de xadrez? ").toLowerCase();

switch (pecaXadrez) {
    case "rainha":
        console.log (rainha);
        break;
    case "rei":
        console.log (rei);
        break;
    case "torre":
        console.log (torre);
        break;
    case "bispo":
        console.log (bispo);
        break;
    case "cavalo":
        console.log (cavalo);
        break;
    case "peão":
        console.log (peao);
        break;
    default:
        console.log ("Erro! Essa peça não existe no xadrez.");
}

