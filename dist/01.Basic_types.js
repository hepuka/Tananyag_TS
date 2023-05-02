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
let userId = 33445;
//////////////////////////////////NEVER//////////////////////////////
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        console.log(i);
        i++;
        if (i > 10)
            break;
    }
};
infinite();
////////////////////////ANY/////////////////////
//Typescipt3-ban volt bevezetve
let pageNumber = "1";
let numericPageNumber = pageNumber;
console.log(typeof numericPageNumber); //string típust ad visza, utánanézni miért??? miért nincs string to number konverzió
////////////UNKNOWN////////////////
// unknown - The unknown type represents any value. This is similar to the any type, but is safer because it’s not legal to do anything with an unknown value:
function f1(a) {
    a.b(); // OK
}
function f2(a) {
    // a.b(); 'a' is of type 'unknown'.
}
// This is useful when describing function types because you can describe functions that accept any value without having any values in your function body.
// Conversely, you can describe a function that returns a value of unknown type:
function safeParse(s) {
    return JSON.parse(s);
}
// Need to be careful with 'obj'!
//const obj = safeParse(someRandomString);
/////////////////////NEVER/////////////////////
//Some functions never return a value
//The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program.
function fail(msg) {
    throw new Error(msg);
}
