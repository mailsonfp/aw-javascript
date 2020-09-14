var x = 1;
do{
x = 2;
console.log('Zero:', 0 ? 'É true' : 'É false');
console.log('Negando Zero:', !0 ? 'É true' : 'É false');
console.log('Negação dupla de zero:', !!0 ? 'É true' : 'É false');
console.log('String vazia:', '' ? 'É true' : 'É false');
console.log('Not a Number:', NaN ? 'É true' : 'É false');
console.log('null:', null ? 'É true' : 'É false');
console.log('undefined:', undefined ? 'É true' : 'É false');
console.log('false:', false ? 'É true' : 'É false');
console.log('1===1:', 1===1 ? 'É true' : 'É false');
} while(x===1);