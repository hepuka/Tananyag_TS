"use strict";
let text;
let age;
let isgood;
let car;
//////////////////////////Type Inference//////////////////
//TS compiler az értékből levezeti a típust is
let ertek = "teszt";
let ertek2 = Math.random();
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
        if (i === 11)
            break;
    }
};
infinite();
////////////////////////ANY/////////////////////
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
