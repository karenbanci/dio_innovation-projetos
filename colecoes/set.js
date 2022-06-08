// a diferença de array para set, é que set só mantém um elemento exclusivo dentro das [], n
// não tem elemento exclusivos

const array = [3,4,5,12,12,15,18,20,20,23,26,29,32,32,33,34,36];

function valoresUnicos(arr) {

  const meuArr = new Set(arr);

  // elemento spread é quando eu coloco esses tres pontos assim ele vai me retornar em muna nova array
  return [...meuArr]
}

console.log(valoresUnicos(array))
