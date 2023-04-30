"use strict";
//a változó típusa lehet string is és number is
let valtozo = "Hello";
valtozo = 15; //mivel a deklarációban 2 típust adtunk meg, a string értéket módosíthatjuk number értékre
//valtozo:true; itt hibára fut mert vagy string vagy number lehet az érték.
//tömbök deklarálása unióval
let stringArray;
let mixedArray;
//függvények definiálásánál is használható
function peldaFuggveny3(bemenet) {
    //Narrowing
    //akkor működik a length hogyha a bemenet string, ezt külön meg kell határozni
    if (typeof bemenet === "string") {
        return bemenet.length;
    }
    else {
        //kizárásos alapon az else ágban már csak number típus lehet a bemenet
    }
}
//kezdetben null értéket adunk a változónak, majd később adjuk hozzá az interface-ben meghatározottakat
let user2 = null;
/////////////////////////LITERAL TÍPUS////////////////////////
//a típus defínícióban kell megadni explicite azokat az értékeket amelyeket a változó felvehet
let ertek3 = 42;
console.log(ertek3);
let texts;
texts = "three";
