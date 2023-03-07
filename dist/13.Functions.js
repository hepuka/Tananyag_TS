"use strict";
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
let multiply = function (c, d) {
    return c * d;
};
console.log(multiply(10, 5));
let multiply2 = function (c, d) {
    return c * d;
};
console.log(multiply(3, 4));
//optional parameter
const addAll = (a, b, c) => {
    //Narrowing
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
/////////////////////////////default parameter value//////////////////////
const sumAll = (a, b, c = 2) => {
    //
    return a + b + c;
};
console.log(addAll(2, 3, 2));
console.log(addAll(2, 3));
console.log(sumAll(2, 3));
//////////////////////////////////Rest parameters////////////////////////////
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
console.log(total(1, 2, 3));
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (typeof value === "number")
        return "number";
};
