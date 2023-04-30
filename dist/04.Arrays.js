"use strict";
//ez esetben bármilyen típusúak lehet a tömb elemei
let all = [];
all.push(56);
all.push(true);
all.push("hello");
console.log(all);
let stringArr = ["one", "two", "three"];
let guitars = ["Strat", "Les Paul", 5150];
let mixedArr = ["EVH", 1984, true];
//ez esetben csak number típusú értékeket tartalmazhat a tömb
//ilyen formában csak akkor kell megadni, ha kezdetben üres a tömb
let szamok = [];
//így is megadhatjuk
let szamok2 = [];
szamok2.push(23);
//szamok2.push("hello"); hibára fut, mert a tömb csak számokat tartalmazhat
//ez esetben már nem kell a típust megadni a TYPE INFERENCE miatt
let szamok3 = [15, 12, 34];
/////////////////////////////TUPLE (értéktöbbes)//////////////////////////
//Olyan tömb ami kevés elemet tartalmaz és az elemek a típusaiban eltérnek
//string csak a 0.indexen, number pedig csak az 1.indexen lehet
let szemely = ["Zolika", 45];
let szemely2 = ["Zolika", 45];
//hivatkozás az elemekre
szemely2[1]; //visszaadja az 1.indexen lévő értéket
//TUPLE-t használata distucturing révén érdemes használni
const [nev, eletkor] = szemely2;
console.log(nev, eletkor);
