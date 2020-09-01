var x = 1;
do{
x = 2;
console .log(0 ? 'É true' : 'É false');
console.log(!0 ? 'É true' : 'É false');
console.log(!!0 ? 'É true' : 'É false');
console.log('' ? 'É true' : 'É false');
console.log(NaN ? 'É true' : 'É false');
console.log( null ? 'É true' : 'É false');
console.log( undefined ? 'É true' : 'É false');
console.log( false ? 'É true' : 'É false');
console.log( 1===1 ? 'É true' : 'É false');
} while(x===1);