"use strict";
//////////////////////////Type Inference//////////////////
let ertek = "teszt";
//ertek = 2; hibát dob, mert eredetileg string a típusa a változónak
let ertek2 = Math.random();
//ertek2="Béla"; ez is hibára fut mert a Math.random értéke number
////////////////////Függvények definiálása/////////////
//Bemenetnek meghatároztuk,hogy az csak string típusú lehet és a kiment csak number típusú
function peldaFuggveny(bemeneti) {
    return 2;
}
//ez esetben nem kell kimeneti típust megadni, mert a length alapból numberrel tér vissza
function peldaFuggveny2(bemeneti) {
    return bemeneti.length;
}
console.log(peldaFuggveny2("Zolika"));
///////////////////////////////UNION TYPE////////////////////////////////////
//a változó típusa lehet string is és number is
let valtozo = "Hello";
//valtozo:true; hibára fut
function peldaFuggveny3(bemeneti) {
    //Narrowing
    //hogyha a bemenet string csak akkor akkor működik a length
    if (typeof bemeneti === "string") {
        return bemeneti.length;
    }
    //kizárásos alapon az else ágban már csak number típus lehet
}
//LITERAL TÍPUS
//a típus defínícióban kell megadni explicite azokat az értékeket amelyeket a változó felvehet
let ertek3 = 42;
console.log(ertek3);
//majd a megadott címkét használhatjuk a típusdefinícióban, változóknál és függvényeknél is
let ertek4 = 42;
function pelda(bemenet) {
    return 42;
}
//a progress változó ezeket az értékeket veheti fel pl. egy AJAX kérés közben
let progress;
progress = "Elkezdve";
progress = "Folyamatban";
progress = "Befizetve";
//ARRAY
//ez esetben bármilyen típusú lehet a tömb
let szamok = [];
//ez esetben csak number típusú értékeket tartalmazhat a tömb
//ilyen formában csak akkor kell megadni, ha kezdetben üres a tömb
let szamok2 = [];
//így is megadhatjuk
let szamok22 = [];
//szamok2.push("hello"); hibára fut, mert a tömb csak számokat tartalmazhat
//ez esetben már nem kell a típust megadni a TYPE INFERENCE miatt
let szamok3 = [15, 12, 34];
//TUPLE (értéktöbbes)
//Olyan tömb ami kevés elemet tartalmaz és az elemek a típusaiban eltérnek
//string a 0.indexen van a number pedig az 1.indexen
let szemely = ["Zolika", 45];
let szemely2 = ["Zolika", 45];
//hivatkozás az elemekre
szemely2[1]; //visszaadja az 1.indexen lévő értéket
//TUPLE-t használata distucturing révén érdemes használni
const [nev, eletkor] = szemely2;
console.log(nev, eletkor);
//OBJEKTUM
//TYPE INFERENCE révén nem kell típusokat megadni, automatikusan felismeri
let album = {
    id: 1,
    name: "valami",
    title: "Bla Bla",
};
let album2 = {
    id: 2,
    name: "Halihó",
    title: "Bla Bla",
};
