// throw trata qualquer mensagem como erro e isso é mostrado no console do navegador

/* O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

Crie uma função que recebe um array e um número
Realize as seguintes validações
Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
Se o array não for do tipo 'object', lance um erro do tipo TypeError
Se o número não for do tipo 'number', lance um erro do tipo TypeError
Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
Utilize a declaração try...catch
Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof
*/

const array = ['1', '2', '3', '4', '5', '6'];
const numero = 2;

function mensagemDeErro(arr, num) {
  try {
    if(!arr && !num) throw new ReferenceError('Envie os parâmetros');

    if( typeof arr !== 'object') throw new TypeError('Esse array é diferente de um objeto');

    if( typeof num !== 'number') throw new TypeError("Esse num é diferente de um número");

    if(arr.length !== num) throw new RangeError('O tamanho é diferente');

    return arr
  } catch (e) {
    if (e instanceof ReferenceError) {
      console.log("Esse é um referenceError");
      console.log(e.message);
    } else if (e instanceof TypeError) {
      console.log("Esse é um erro de TypeError");
      console.log(e.message);
    } else if (e instanceof RangeError) {
      console.log("Esse é um erro de RangeError");
      console.log(e.message);
    } else {
      console.log('Esse é um tipo de erro:' + e)
    }
  }

}

console.log(mensagemDeErro(array,numero));
