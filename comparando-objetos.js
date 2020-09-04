var joao = {
    nome: 'João',
    idade: 25,
    email: 'teste@gmail.com',
    igualA: function(obj){
        return this.email === obj.email;
    }
}

var maria = {
    nome: 'Maria',
    idade: 27,
    email: 'testex@gmail.com',
}

console.log(joao === maria);

console.log("Emails iguais: ", joao.igualA(maria));