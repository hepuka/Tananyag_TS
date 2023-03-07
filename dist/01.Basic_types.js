"use strict";
let text;
let age;
let isgood;
let car;
//////////////////////////Type Inference//////////////////
let ertek = "teszt";
//ertek = 2; hibát dob, mert eredetileg string a típusa a változónak
let ertek2 = Math.random();
//ertek2="Béla"; ez is hibára fut mert a Math.random értéke number
////////////////////////////////FUNCTIONS//////////////////////////////////
//Bemenetnek meghatároztuk,hogy az csak string típusú lehet és a kiment csak number típusú
function peldaFuggveny(bemeneti) {
    return 2;
}
//ez esetben nem kell kimeneti típust megadni, mert a length alapból numberrel tér vissza
function peldaFuggveny2(bemeneti) {
    return bemeneti.length;
}
console.log(peldaFuggveny2("Zolika"));
//Arrow functions
const getFullName = (name, surname) => {
    return `${name} ${surname}`;
};
console.log(getFullName("Kun-Fagyal", "Zoltán"));
////////////////////////UNKNOWN,TYPE ASSERTION/////////////////////
//Typescipt3-ban volt bevezetve
let pageNumber = "1";
let numericPageNumber = pageNumber;
console.log(typeof numericPageNumber); //string típust ad visza, utánanézni miért??? miért nincs string to number konverzió
