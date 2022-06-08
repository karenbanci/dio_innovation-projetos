// a diferença de map para objeto, é que map é uma coleção de arrays de chave e valor
// pode ser iterado por um loop for...of

// myApp.set('Apple', 'Fruit') --- metodo set adiciona chave e valor na array
// myApp.get(Apple) --- // fruit  (ele checa o valor)
// myApp.delete('Apple') --- deleta o valor

//diferenças: valores tem o mesmo tipo
// pode ter chaves de qualquer tipo
// possuem a propriedade length


function getAdmins(map) {
  let admins = [];
  for([key, value] of map){
    if(value === 'Admin') {
      admins.push(key)
    }
  }
  return admins;
}

const usuarios = new Map();

usuarios.set('Karen', 'Admin');
usuarios.set("Jairo", "Admin");
usuarios.set("Theodora", "User");
usuarios.set("Nala", "User");

console.log(getAdmins(usuarios));
