var x = 1;
var a = 10;
var b = '10';
do{
    x = 2;
    console .log( a==b ? 'É true' : 'É false');
    console .log( a===b ? 'É true' : 'É false');
    console .log( a!=b ? 'É true' : 'É false');
    console .log( a!==b ? 'É true' : 'É false');
} while(x===1);