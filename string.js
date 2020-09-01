var string1 = 'Algaworks';
var string2 = 'Algaworks';
console.log(string1===string2);

var string3 = 'Mailson Fernando Pereira';
console.log(string3);
console.log(string3.lastIndexOf('e'));
console.log(string3.lastIndexOf('x'));
console.log('\nstring3.substring(2,10) pega do caracter informado no primeiro parâmetro até o caracter do segundo parâmetro-1');
console.log(string3.substring(2,10));
console.log('\nstring3.substring(2) pega tudo a partir do caracter informado');
console.log(string3.substring(2));
console.log('\nstring3.slice(-10, -2) dá pra pegar do fim para o começo informando valores negativos');
console.log(string3.slice(-10, -2));
console.log('\nstring3.slice(-10) dá pra pegar do fim para o começo informando valores negativos');
console.log(string3.slice(-10));
console.log('\nstring3.substr(2,10) pega por quantidade de caracteres a partir da posição informada');
console.log(string3.substr(2,10));
var string4 = 'Olá <pessoa>!';
console.log("\nstring4.replace(''<pessoa>'',''Enfermeira'')");
console.log(string4.replace('<pessoa>','Enfermeira'));

console.log("\nstring4.replace('<pessoa>','Enfermeira').toUpperCase()");
console.log(string4.replace('<pessoa>','Enfermeira').toUpperCase().concat('\n'));

var string5 = 'Olá ';
console.log(string5);
console.log("string5.concat('Enfermeira')");
console.log(string5.concat('Enfermeira\n'));

console.log(string3);
console.log("string3.charAt(8)");
console.log(string3.charAt(8));