// O reducer executa uma função em todos os elementos do array, retornando um único valor

const numeros = [2,4,6,8,10,12,14,15,16,17,18,19,20];

function somaNumeros(array){
  return array.reduce( function(prev, current) {
    // console.log(prev + current);
    return prev + current
  })
}

console.log(somaNumeros(numeros));
