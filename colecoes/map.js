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
