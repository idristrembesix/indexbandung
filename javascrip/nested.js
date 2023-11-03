//var s ="";
//for(p = 0; p <= 7; p++) {
    //for(l = 0; l < p; l++) {
      //s += "*";
   // }
   // s += "\n";//
//} 
//onsole.log(s);      
                                                                    
// segitiga kebalik

// var s ="";
// var baris = 7
// for(p = 1;p <= baris ; p++) {
//     for(l = baris;l >= p; l--){
//       s += "*";
//     }
//     s += "\n";
// } 
// console.log(s);

// var s ="";
// var baris = 7
// for(p = 1;p <= baris ; p++) {
//     for(l = baris-1 ; l >= p; l--){
//       s += " ";
//     }
//     for(let k=1;k <= p; k++){
//       s +="*"
//     }
//     for(let m = 1;m <= p-1; m++){
//       s +="*"
//     } 
//     s += "\n";
// } 
// console.log(s);

var s = "";
var baris = 7;
var space = baris - 1;

// Segitiga Atas
for (var p = 1; p <= baris; p++) {
    for (var L = 1; L <= space; L++) {
        s += " ";
    }
    space--;
    for (var K = 1; K <= 2 * p - 1; K++) {
        s += "";
    }
    s += "\n";
}


space = 1;
for (var p = 1; p <= baris - 1; p++) {
    for (var L = 1; L <= space; L++) {
        s += " ";
    }
    space++;
    for (var K = 1; K = 2 (baris - p) - 1; K++) {
        s += "*";
    }
    s += "\n";
}

console.log(s);

