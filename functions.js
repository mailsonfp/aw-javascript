// function declaration
function somar(a,b){
    console.log('arguments', arguments);
    return a+b;
}

// function expression
var subtrair = function (a,b){
    return a-b;
}

var soma = somar(31,20);
console.log('Somar 31 + 20', soma);

console.log('Subtrair 2020 - 1988', subtrair(2020,1988));

console.log('typeof subtrair', typeof subtrair);