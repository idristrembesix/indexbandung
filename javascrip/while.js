// var i = 1
// while (i <=10) {
//     console.log("idris ganteng"+i);
//     i++
// }

// var i = 1;
// do {
//     console.log("hello indo"+i);
//     i++;
// }  while (i <= 10);

// Membuat array olahraga
var olahragaArray = ["sepak bola"];
// Menambahkan beberapa olahraga menggunakan method push()

olahragaArray.push("Bulu tangkis");
olahragaArray.push("sepak bola");
olahragaArray.push("basket");
olahragaArray.push("voli");
olahragaArray.push("tenis meja");

// Menampilkan isi array dengan perulangan for dan length

console.log("Daftar Olahraga:");
for (var i = 0; i < olahragaArray.length; i++) {
  console.log((i + 1) + ". " + olahragaArray[i]);
}


// Menghapus olahraga terakhir menggunakan method pop()
var olahragaTerakhir = olahragaArray.pop();
console.log("Olahraga terakhir yang dihapus: " + olahragaTerakhir);


// Menampilkan isi array setelah menghapus olahraga terakhir
console.log("Daftar Olahraga setelah menghapus olahraga terakhir:");
for (var i = 0; i < olahragaArray.length; i++) {
  console.log((i + 1) + ". " + olahragaArray[i]);
}