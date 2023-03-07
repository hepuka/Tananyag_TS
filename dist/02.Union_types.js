"use strict";
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
//kezdetben null értéket adunk a változónak, majd később adjuk hozzá az interface-ben meghatározottakat
let user2 = null;
/////////////////////////LITERAL TÍPUS////////////////////////
//a típus defínícióban kell megadni explicite azokat az értékeket amelyeket a változó felvehet
let ertek3 = 42;
console.log(ertek3);
