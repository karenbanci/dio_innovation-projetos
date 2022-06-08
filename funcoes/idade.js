function calculaIdade(anos) {
  return `Daqui ${anos} anos, a ${this.nome} terá ${this.idade + anos} anos de idade`
}

const karen = {
  nome: 'Karen',
  idade: 30
};

const jairo = {
  nome: "Jairo",
  idade: 28,
};

const theodora = {
  nome: "Theodora",
  idade: 5,
};

console.log(calculaIdade.call(karen, 5));
