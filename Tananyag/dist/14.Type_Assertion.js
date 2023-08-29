"use strict";
//convert to more or less specific
let a = "hello";
let b = a; //less spesific
let c = a; //more specific
console.log(b);
console.log(c);
//2.példa
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(2, 2, "concat");
//be careful, TS see np problem, but a string is returned
let nextVal = addOrConcat(2, 2, "concat");
