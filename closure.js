function incrementar(){
    var valor = 0;
    
    return function(){
        return ++valor;
    }    
}

var fn = incrementar();

console.log(fn());
console.log(fn());
console.log(fn());

var incrementar2 = (function incrementar2(){
    var valor = 6;
    
    return function(){
        return ++valor;
    }    
})();

var fn = incrementar();

console.log(incrementar2());
console.log(incrementar2());
console.log(incrementar2());