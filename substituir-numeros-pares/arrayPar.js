function substituirPares(array) {
  if(!array) return -1;
  if(!array.length) return -1;

  for (let i = 0; i < array.length; i++) {
    if(array[i] === 0){
      console.log("Você já é um número zero");
    } else if (array[i] % 2 === 0){
      console.log(`Substituindo ${array[i]} por Zero`)
      array[i] = 0
    }
  }
  return array
}

let arr = [0,2,3,5,8,10,13,15,20,22,23,31];
console.log(substituirPares(arr))
