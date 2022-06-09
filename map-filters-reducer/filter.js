// filter filtra elemento específico da array

const alunos = [
  { nome: "Amanda", nota: 10 },
  { nome: "Gabi", nota: 5 },
  { nome: "Karen", nota: 8 },
  { nome: "Choquita", nota: 3 },
];

const aprovados = alunos.filter((aluno) => {
  if (aluno.nota >= 5){
    return aluno;
  }
})
 console.log(aprovados);

console.log("----------------------");

const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

const pares = numeros.filter((numero) => {
  if(numero % 2 == 0){
    return numero;
  }
})

console.log(pares);
