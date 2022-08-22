# exercicios-trybe-4.1
## Exercício - Variáveis 
- Crie uma constante chamada **myName** e atribua a ela o seu nome (Exemplo: Carolina).
- Crie uma constante chamada **birthCity** e atribua a ela a sua cidade natal.
- Crie uma variável chamada **birthYear** e atribua a ela o ano em que você nasceu.
- Utilize o **console.log() **para imprimir as constantes e variáveis que você criou.
- Altere o valor atribuído à variável **birthYear** para 2030. Faça um **console.log(birthYear)** novamente para ver o que acontece!
- Altere o valor atribuído à constante **birthCity**. Faça um **console.log(birthCity) **novamente! Você saberia explicar por que recebemos uma mensagem de erro? 

## Exercício - Tipos de variáveis 
No exemplo abaixo, temos as informações de um paciente. Utilize o operador typeof para imprimir qual o tipo das variáveis **patientId**, **isEnrolled**, **patientInfo** e **patientEmail**. Esse operador retorna qual o tipo de uma variável, objeto, função ou expressão. Exemplo: *console.log(typeof patientId) *retornará *number*.
    let patientId = 50;
    let isEnrolled = true;
    const patientInfo = {
      firstName: 'Ana',
      lastName: 'Santos',
    };
    const patientEmail = 'ana@email.com';
    
## Exercício - operadores aritméticos
Agora que você já conhece os operadores aritméticos básicos do JavaScript, vamos praticá-los? Vamos fazer algumas operações simples para encontrarmos a área e o perímetro de um retângulo de base 5 e altura 8.
- Crie uma constante chamada base e uma variável chamada height e atribua os seus respectivos valores: 5 e 8.
- Crie uma constante chamada area e atribua a ela o resultado da multiplicação da base pela altura. Dica: lembre-se de usar sempre o console.log() para imprimir as variáveis e checar os resultados das operações!
- Crie uma constante chamada perimeter e atribua a ela a soma de todos os lados do retângulo.

## Exercício - condicionais if/else
Criar estruturas condicionais com operadores if/else e operadores lógicos será algo muito comum na sua carreira de pessoa desenvolvedora. Então vamos praticar o que aprendemos no vídeo?
- Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;
- Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se ela está na lista de espera. Para isso, considere as seguintes informações:
	1. - Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!"
	2. - Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera"
	3. - Se a nota for menor que 60, imprima "Você foi reprovada(o)"
	4. - Crie uma estrutura condicional utilizando o if, else if e else para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação.
	5. - Altere o valor da nota para verificar se as condições que você implementou funcionam;
	
## Exercício - operadores lógicos
- Crie uma constante chamada "currentHour" que recebe um número entre 4 e 24 de sua escolha, para representar as horas do dia.
- Crie uma variável chamada "message" que, inicialmente, é uma string vazia.
- Implemente condicionais para que:
- Se o horário for maior ou igual a 22, insira "Não deveríamos comer nada, é hora de dormir" na variável "message".
- Se o horário for maior ou igual a 18 e menor que 22, insira "Rango da noite, vamos jantar :D" na variável "message".
- Se o horário for maior ou igual a 14 e menor que 18, insira "Vamos fazer um bolo pro café da tarde?" na variável "message".
- Se o horário estiver entre 11 e 14, insira "Hora do almoço!!!" na variável "message".
- Se o horário estiver entre 4 e 11, insira "Hmmm, cheiro de café recém passado" na variável "message".
- Agora imprima a variável message fora das suas condições.

## Exercício - switch e case 
- Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada', 'lista' ou 'reprovada';
- Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada', 'lista' ou 'reprovada'. Como default, imprima a mensagem de 'não se aplica'.

## Exercícios - 1 ao 15
##### 0 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
1. - Adição (a + b)
2. - Subtração (a - b)
3. - Multiplicação (a * b)
4. - Divisão (a / b)
5. - Módulo (a % b)

*Dica: Neste link você encontra mais detalhes sobre operadores matemáticos 😉
##### 6 - Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
##### 7 - Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
##### 8 -  Faça um programa que, dado um valor recebido como parâmetro, retorne "positive" se esse valor for positivo, "negative" se for negativo, e caso não seja nem positivo e nem negativo retorne "zero".
##### 9 - Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne *true* se os ângulos representarem os ângulos de um triângulo e *false*, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
- Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
- Um ângulo será considerado inválido se não tiver um valor positivo.
##### 10 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
- Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras aiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
- Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
- Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

Exemplo: bishop (bispo) -> diagonals (diagonais)
##### 11 - Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
- Por-centagem >= 90 -> A
- Porcentagem >= 80 -> B
- Porcentagem >= 70 -> C
- Porcentagem >= 60 -> D
- Porcentagem >= 50 -> E
- Porcentagem < 50 -> F

O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
##### 12 - Escreva um programa que defina três números em constantes e retorne *true* se pelo menos uma das três for par. Caso contrário, ele retorna *false*.
	- Bonus: use somente um if.
##### 13- Escreva um programa que defina três números em constantes e retorne *true* se pelo menos uma das três for ímpar. Caso contrário, ele retorna *false*.
	- Bonus: use somente um if.
##### 14 - Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
	- Atente que, sobre o custo do produto, incide um imposto de 20%.
	- Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
	- O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
	- valorCustoTotal = valorCusto + impostoSobreOCusto
	- lucro = valorVenda - valorCustoTotal (lucro de um produto)
##### 15 - Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
- A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

 INSS (Instituto Nacional do Seguro Social)
- Salário bruto até R$ 1.556,94: alíquota de 8%
- Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
- Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
- Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

 IR (Imposto de Renda)
 
- Até R$ 1.903,98: isento de imposto de renda
- De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
- De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
 De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
- Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

*Exemplo: Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.*

*Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.*

*Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:*
- R$ 2.670,00: salário com INSS já deduzido;
- 7.5%: alíquota de imposto de renda;
- R$ 142,80 parcela a se deduzir do imposto.
- Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45

*O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
Resultado: R$ 2.612,55.
Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?*
	
