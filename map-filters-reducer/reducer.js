// O reducer executa uma função em todos os elementos do array, retornando um único valor

const numeros = [2,4,6,8,10,12,14,15,16,17,18,19,20];

function somaNumeros(array){
  return array.reduce( function(prev, current) {
    // console.log(prev + current);
    // console.log({ prev });
    // console.log({ current });
    return prev + current;
  })
}

console.log(somaNumeros(numeros));

console.log("----------------------");

const compras = [
  { item: "Leite", valor: 4 },
  { item: "Café", valor: 3 },
  { item: "Pão", valor: 2 },
  { item: "Queijo", valor: 8 },
];

const saldoDisponivel = 30;

function calculaSaldo(saldoDisponivel, compras) {
  // console.log(saldoDisponivel);
  return compras.reduce(function (prev, current) {
    // console.log({ prev });
    // console.log({ current });
    return prev - current.valor;
  }, saldoDisponivel)
}
console.log(calculaSaldo(saldoDisponivel, compras));
