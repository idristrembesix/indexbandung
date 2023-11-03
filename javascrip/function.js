// function luasSegitiga(a, b) {
//     var hasil;
//     hasil = a * b / 2; 

//     return hasil;
// }

// // alert(luasSegitiga(2, 5))

// var a = parseInt(prompt("masukan nilai a :"))
// var b = parseInt(prompt("masukan nilai b :"))

// var hasil = luasSegitiga(a, b);
// console.log(hasil);

// document.write(`hasinya ${hasil}`)


// // Local Scope (kalo local letnya di simpan di dalam function)
// const masukRumah = function() {
//     let manusia = {
//         nama: "udin",
//         umur: 24
//     }
//     console.log(`hai ${manusia.nama}, apakah umurmu ${manusia.umur} tahun?`);
// }
// masukRumah()


// // Global Scope (kalo global letnya di simpan di luar let)
// let orang = {
//     nama: "oelng",
//     hobi: "coding"
// }
// const keluarRumah = function() {
//     console.log(`dia ${orang.nama}, hobinya ${orang.hobi}`);
// }
// keluarRumah()

//Luas segitiga
function luasSegitiga(alas,tinggi){
    return alas*tinggi/2;
}
//Luas Persegi Panjang
function persegiPanjang(panjang,lebar){
    return panjang*lebar;
}
//Luas Persegi
function persegi(s){
    return s*s;
}
var pilihan = parseInt(prompt(`Pilih rumus matematika:  \n ${1}.Luas segitiga\n ${2}.Luas Persegi Panjang\n ${3}.Luas persegi`));
if (pilihan == 1){
    var alas = parseInt(prompt(`Masukkan luas alas :`));
    var tinggi = parseInt(prompt("Masukkan luas tinggi :"));
    var hasil = luasSegitiga(alas,tinggi);
    document.write(`hasilnya adalah ${hasil}`);
}
if (pilihan == 2){
    var panjang = parseInt(prompt(`Persegi Panjang\n Masukkan luas panjang:`));
    var lebar = parseInt(prompt(`Masukkan luas lebar:`));
    var hasil = persegiPanjang(panjang, lebar);
    document.write(`hasilnya adalah ${hasil}`);
} 
if(pilihan == 3){
    var s = parseInt(prompt(`Persegi\n Masukkan sisi:`));
    var hasil = persegi(s);
    document.write(`hasilnya adalah ${hasil}`);
} 
