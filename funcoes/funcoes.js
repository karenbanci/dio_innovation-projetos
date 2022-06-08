// atividade 1
const alunos = [{
  nome: 'Juliana',
  nota: 5,
  turma: '1C',
},
{
  nome: 'Barbara',
  nota: 9,
  turma: '1B',
},
{
  nome: 'João',
  nota: 7,
  turma: '1A',
},
{
  nome: 'Ana',
  nota: 7,
  turma: '1C',
},
{
  nome: 'Paulo',
  nota: 3,
  turma: '1A',
}]

function alunosAprovados(arr, media) {
  let aprovados = [];

  for(let i = 0; i < arr.length; i++) {
    const {nota, nome} = arr[i];

    if(nota >= media) {
      aprovados.push(nome);
      console.log(`aprovados ${aprovados}`)
    }
  }
  return aprovados;
}

console.log(alunosAprovados(alunos, 6));
