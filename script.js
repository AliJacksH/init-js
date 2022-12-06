// document.write("Bla bla bla bla");

// console.log("Ola");

// variável é um local de armazenamento de informações


// let nome = "Jackson";
// var idade = 29;
// var alturaEmCm = 184;

//TIPOS de dado presentes na linguagem JS são: Number / Numerico e String / Texto

// document.write(nome);
// document.write(alturaEmCm);

// console.log(idade);

// DECLARE TRÊS VARIÁVEIS DIFERENTES, E MOSTRE-AS NO DOCUMENTO E NO CONSOLE

//declaração de variáveis
// var fruta = "maça";
// var melhorComida = "batata";
// var filme = "matrix";

// document.write(fruta);
// document.write(melhorComida);
// document.write(filme);

// console.log(fruta);
// console.log(melhorComida);
// console.log(filme);






// let num1 = 10;
// let num2 = 15;
// let num3 = 2;
// let resultado = ((((num1 + num2) / num3) + num3) * num2);

// console.log(resultado);

// sinail para soma é o +
// subtração -
// multiplicação *
// divisão /


// NÚMERO em js sejam eles inteiros ou decimais são sempre do tipo number

// TEXTO em js sejam eles uma letra/caractere ou uma palavra ou um paragrafo, etc serão sempre string

//VERDADEIRO OU FALSO é sempre boolean






// window.alert("o que eu quiser");
// window.confirm("Você é legal?");
// window.prompt("Qual o seu nome?");


// let nome = window.prompt("Qual o seu nome?");
// console.log(nome)
// let altura = window.prompt("Qual a sua altura em centímetros?");
// let idade = window.prompt("Qual sua idade?");

// document.write('Olá ' + nome + '! Legal saber que você tem ' + altura + 'cm de altura e ' + idade + ' anos!</br>');
// document.write(nome+', então quer dizer que você tem '+idade+' anos e '+altura+'cm de altura?')
// document.write(`Oi seu ${nome} você vem sempre aqui?`)
// document.write(`Olá ${nome}! Legal saber que você tem ${idade} anos e ${altura}cm de altura</br>`)
// document.write(`Seu nome tem ${nome.length} letras</br>`)
// document.write(`Seu nome em MAIÚSCULAS é: ${nome.toUpperCase()}</br>`)
// document.write(`Seu nome em MAIÚSCULAS é: ${nome.toLowerCase()}`)


//Escrever na página com o document.write()
//escrever na janela com o window.alert()
//perguntar com o window.prompt()
// confirmar com o window.confirm()




// Number.pasrseInt() para converter em NÚMERO INTEIRO
// Number.pasrseFloat() para converter em NÚMERO REAL / DECIMAL
// Number() para converter em número


// let n1 = window.prompt("Insira um número:")
// let n2 = window.prompt("Insira outro número:")

// let n1 = Number.parseInt(window.prompt("Informe o primeiro número:"))
// let n2 = Number.parseInt(window.prompt("Informe o segundo número:"))

// let resultado = n1 + n2

// document.write(`O resultado da soma é ${resultado}`)


// var n1 = Number(window.prompt("Informe o primeiro número:"));
// var n2 = Number(window.prompt("Informe o segundo número:"));

// var soma = n1 + n2;

// document.write("O <strong>resultado</strong> da <strong>soma</strong> é: " + soma + '</br>');


// var n3 = Number(window.prompt("Informe o primeiro número:"));
// var n4 = Number(window.prompt("Informe o segundo número:"));

// var subtracao = n3 - n4;

// document.write("O resultado da <strong>subtração</strong> é: " + subtracao + '</br>');


// var n5 = Number.parseFloat(window.prompt("Informe o primeiro número:"));
// var n6 = Number.parseInt(window.prompt("Informe o segundo número:"));

// var multiplicacao = n5 * n6;

// document.write("O resultado da multiplicação é: " + multiplicacao + '</br>');


// var n7 = Number.parseFloat(window.prompt("Informe o primeiro número:"));
// var n8 = Number.parseInt(window.prompt("Informe o segundo número:"));

// var divisao = n7 / n8;

// document.write("O resultado da divisão é: " + divisao + '</br>');


// Conversão de número para texto: String(n)   ou    n.toString()

// let batata = 95

// batata.toString()

// String(batata)





// OPERADORES MATEMÁTICOS


// let n1 = 7;
// let n2 = 2;
// let n3 = 4;


/** 
 Parentesis ()
 Potenciação **
 Multiplicação *     Divisão /     Resto de divisão %
 Soma +     Subtração -
 **/


//  let resultado = ((n2 + (n1 - n3)) ** (n2 + n2 % n1))
//  console.log(resultado)

// ATRIBUIÇÃO

// let n1 = 5 + 3
// let n2 = n1 % 5
// let n3 = 5 * n2 ** 2

// AUTO ATRIBUIÇÃO

// let n = 5
// n = n + 5     n += 5
// n = n - 5     n -= 5
// n = n * 2     n *= 2
// m = n / 2     n /= 2
// n = n ** 2    n **= 2
// n = n % 2     n %= 2

// INCREMENTO E DECREMENTO

// let num = 5
// num = num + 1     num++
// num = num - 1     num--

// OPERADORES RELACIONAIS

// maior > 
// menor < 

// 5 > 2 // cinco é maior que dois
// 2 < 5 // dois é menor que cinco

// operador relacional sempre vai ter como resultado booleano (verdadeiro ou falso)

// 5 > 2 = true // > maior
// 5 < 2 = false // < menor
// 2 > 5 = false
// 2 < 5 = true
// 3 > 3 = false
// 3 < 3 = false

// 3 <= 3 = true
// 3 >= 3 = true

// 5 >= 2 = true // >= maior ou igual
// 9 <= 5 = false // <= menor ou igual

// 5 == 5 = true // == igualdede
// 5 == 3 = false

// 5 === 5 = true // === idêntico
// 5 == '5' = true
// 5 === '5' = false

// 5 != 5 = false // != diferente
// 5 != 3 = true

//OPERADORES LÓGICOS

// ! negação
// && conjunção E AND
// || disjunção OU OR XOR

// !true = false
// !false = true

// true && true = true     
// true && false = false
// false && true = false
// false && false = false

// true || true = true
// true || false = true
// false || true = true
// false || false = false



// DOM - DOCUMENT OBJECT MODEL - MODELO DE DOCUMENTO OBJETO

// let n = window.document.getElementById('texto')
// n.style.background = 'blue'

// let variavel = document.getElementsByTagName('p')[1]
// variavel.style.color = 'white'

// let aula = window.document.getElementsByClassName('teste')
// aula.style.color = 'azure'

// document.querySelectorAll('#texto')



// EVENTOS DOM


/* 1- o que são eventos?
exemplos básicos: movimentos do mouse, clicks, toque...


2 - como uso eventos em JS?
função -> function

DICA: pesquisar funções, métodos, classes e parâmetros


3 - Quais são as 2 formas de disparar eventos JS?


4 - pq não é legal usar variáveis dentro de funções? 

para tratar erro usamos muito 'try catch'

*/


let espaco = document.querySelector(".area")
espaco.addEventListener('click', clicar)
espaco.addEventListener('mouseenter', entrar)
espaco.addEventListener('mouseout', sair)

function clicar() {
    espaco.innerText = "Clicou!"
    espaco.style.background = 'tomato'
}

function entrar(){
    espaco.innerText = "Entrou!"
    espaco.style.background = 'green'
}

function sair(){
    espaco.innerText = "Saiu!"
    espaco.style.background = 'tomato'
}

