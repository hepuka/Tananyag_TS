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
// Parameter type annotation
function greet(name) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}
greet("Zolika");
//Return Type Annotations
function getFavoriteNumber() {
    return 260;
}
console.log(getFavoriteNumber());
// No type annotations here, but TypeScript can spot the bug
const names = ["Alice", "Bob", "Eve"];
// Contextual typing for function
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
////////////////////////////Arrow functions////////////////////////
const getFullName = (name, surname, isPaid = false //default value declaration
) => {
    return `${name} ${surname}: ${isPaid ? "paid" : "unpaid"}`;
};
console.log(getFullName("Kun-Fagyal", "Zoltán", true));
console.log(getFullName("Kun-Fagyal", "Zoltán"));
let getValue = (val) => {
    return val > 5 ? true : "200 ok";
};
console.log(getValue(2));
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
