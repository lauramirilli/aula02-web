// tipos primitivos
// boolean
var boolean = false;
console.log(`A variável ${boolean} tem o tipo ${typeof(boolean)}`);

var number = 1;
console.log(`A variável ${number} tem o tipo ${typeof(number)}`);

// usando variável global
var nome = 'Laura';
// usando variavel local
function nomeFuncao() {
    var sobrenome = 'Mirilli';
    console.log(sobrenome);
}

console.log(nome);
nomeFuncao();

// comparação
var comparacao = '0' == 0;
console.log(comparacao);

var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

// operadores relacionais
    // >, <, ==, !=, <=, >=
var maiorIgual = 5 >= 6;
console.log(maiorIgual);

var diferente = 4 != 8;
console.log(diferente);

// operadores lógicos
    // && (e), || (ou), ! (not)
var e = true && true;
console.log(e);

var ou = true || false;
console.log(ou);

var not = !true;
console.log(not);