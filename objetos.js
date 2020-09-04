var fox = {
    cor: 'prata',
    modelo: 'Fox',
    marca: 'vw'
}

console.log(fox);
console.log(typeof fox);

console.log('cor', fox.cor);
fox.cor = 'Azul';
console.log('\cor alterada', fox.cor);
console.log('Modelo',fox['modelo']);

fox.peso = 1100;
console.log('peso', fox.peso);

console.log('potência', fox.potencia);

fox.ligar = function() {console.log('Ligando o carro');};
console.log(fox);
fox.ligar();

var celta = {
    cor: 'branco',
    modelo: 'Celta',
    marca: 'GM',
    ligar: function() {
        console.log('Ligando o carro');
    }
}
console.log('\n celta',celta);

var classic = {
    cor: 'prata',
    modelo: 'Classic',
    marca: 'GM',
    ligar: function() {
        console.log('Ligando o carro');
    },
    motorista: {
        nome: 'Mailson',
        idade: 32
    }
}
console.log('\n classic',classic);

console.log('Navegando entre as propriedades');
for(var prop  in classic){
    console.log(prop, ' -> ', classic[prop]);
}

delete classic.motorista.idade;

console.log('\n classic',classic);
