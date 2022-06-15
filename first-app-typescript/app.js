// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
var botaoAtualizar = document.getElementById('atualizar-saldo');
var botaoLimpar = document.getElementById('limpar-saldo');
var soma = document.getElementById('soma');
var campoSaldo = document.getElementById('campo-saldo');
function somarAoSaldo(soma) {
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
