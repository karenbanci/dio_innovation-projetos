// o método map retorna uma nova string

const animais = ['cachorro', 'coelho', 'gato', 'passarinho'];
const wish = animais.map((animal) => `Eu gostaria de ter um ${animal}`);
console.log(wish);

/* VALOR RETORNADO
[
  'Eu gostaria de ter um cachorro',
  'Eu gostaria de ter um coelho',
  'Eu gostaria de ter um gato',
  'Eu gostaria de ter um passarinho'
]
*/

console.log('----------------------');

// exercício
// Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um objeto criado por você, e depois sem ele.

const tabuadaDo5 = [1,2,3,4,5,6,7,8,9,10];
const resultadoTabuadaDo5 = tabuadaDo5.map((numero) => numero * 5);
console.log(resultadoTabuadaDo5);

console.log("----------------------");

const dipirona = {
  preco: 5
}

const aspirina = {
  preco: 4.5,
};

function total(arr, thisArg) {
   return arr.map(function(item){
     return item * this.preco;
   }, thisArg);
}

const quantidade = [3, 10]

console.log(total(quantidade, dipirona));
console.log(total(quantidade, aspirina));

console.log("----------------------");

const serie = ['TWD', 'HYMYM', 'FRIENDS', 'METEOR GARDEN'];

function episodios(array) {
  return array.map((item) => {
    return `Eu assisti ${item}`
  })
}

console.log(episodios(serie))
