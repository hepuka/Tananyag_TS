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
let regex = /\w+/g;
//////////////////////////////////NEVER//////////////////////////////
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 10)
            break;
    }
};
////////////////////////UNKNOWN,TYPE ASSERTION/////////////////////
//Typescipt3-ban volt bevezetve
let pageNumber = "1";
let numericPageNumber = pageNumber;
console.log(typeof numericPageNumber); //string típust ad visza, utánanézni miért??? miért nincs string to number konverzió
