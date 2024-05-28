// Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.

alert("Hello word")

// Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
var num1 = 10;
var num2 = 20;

var total = num1 + num2;

alert(`A soma de  ${num1} + ${num2} é igual a ${total}`);


// Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
var valor = '3';

function verificar(valor) {
    if (typeof valor === 'number' && !isNaN(valor)) {
        alert("É um número");
    } else {
        alert("Não é um número");
    }
}
verificar(valor);


// Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

var string = '8';

function verificarString(string) {
    if (typeof string === 'string') {
        alert("É uma string");
    } else {
        alert("Não é uma string");
    }
}

verificarString(string);


// Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
var booleano = 5;

function verificarBooleano(booleano) {
    if (typeof booleano === 'boolean') {
        alert("É um booleano");
    } else {
        alert("Não é um booleano");
    }
}

verificarBooleano(booleano);


// Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
var num1 = 10;
var num2 = 20;

var total = num1 - num2;

alert(`A subtração de  ${num1} - ${num2} é igual a ${total}`);


// Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
var num1 = 10;
var num2 = 20;

var total = num1 * num2;

alert(`A multiplicação de  ${num1} * ${num2} é igual a ${total}`);

// Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
var num1 = 10;
var num2 = 20;

var total = num1 / num2;

alert(`A divisão de  ${num1} / ${num2} é igual a ${total}`);


// Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
var numero = 10;

function verificarPar(numero) {
    if (numero % 2 === 0) {
        alert("É um número par");
    } else {
        alert("Não é um número par");
    }
}

verificarPar(numero);


// Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
var numero = 11;

function verificarImpar(numero) {
    if (numero % 2 !== 0) {
        alert("É um número ímpar");
    } else {
        alert("Não é um número ímpar");
    }
}