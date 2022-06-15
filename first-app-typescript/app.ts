// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLElement;



function somarAoSaldo(soma: number) {
  console.log(soma);
    campoSaldo.innerHTML = (parseInt(campoSaldo.innerHTML) + soma).toString();
}

function limparSaldo() {
    campoSaldo.innerHTML = '0';
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(parseInt(soma.value));
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
