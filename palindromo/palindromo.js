// exemplo 1
function verificarPalindromo(string){
  if(!string){
    return "Esse palindromo não existe";
  }

  return string.split("").reverse().join("") === string;
}

var string = "love"
// console.log(verificarPalindromo(string))

// exemplo 2
function verificarPalindromo2(string){
  if(!string) return "Esse palindromo não existe";

  for(let i=0; i < string.length / 2; i++){
    if(string[i] !== string[string.length - i - 1]){
      return false;
    }
  }
  return true;
}

console.log(verificarPalindromo2(string))
