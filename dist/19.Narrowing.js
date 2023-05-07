"use strict";
////////////////////NARROWING////////////////////////
//https://www.typescriptlang.org/docs/handbook/2/narrowing.html
//1.példa
function peldaFuggveny3(bemenet) {
    //akkor működik a length hogyha a bemenet string, ezt külön meg kell vizsgálni
    if (typeof bemenet === "string") {
        return bemenet.length;
    }
    //kizárásos alapon az else ágban már csak number típus lehet a bemenet
    return bemenet ** 2;
}
console.log(peldaFuggveny3(3));
console.log(peldaFuggveny3("alma"));
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        return `${account.isAdmin} - this is Admin acoount.`;
    }
    return "This is User account";
}
const user2222 = {
    name: "HEllo",
    email: "h@h.com",
};
console.log(isAdminAccount(user2222));
const user22222 = {
    name: "HEllo",
    email: "h@h.com",
    isAdmin: true,
};
console.log(isAdminAccount(user22222));
function move(animal) {
    if ("swim" in animal) {
        return animal.swim();
    }
    return animal.fly();
}
const animal1 = {
    swim: () => "This has swim method",
};
console.log(animal1.swim());
const animal2 = {
    fly: () => "This has fly method",
};
console.log(animal2.fly());
//INSTANCEOF ellenőrzi, hogy egy érték egy másik érték „példánya”-e vagy sem.
//https://www.typescriptlang.org/docs/handbook/2/narrowing.html#instanceof-narrowing
//itt a date változó a Date metódus példánya
const date = new Date();
function logValue(x) {
    if (x instanceof Date) {
        console.log("This is date");
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
logValue(date);
//így is ki lehet szűrni, hogy a pet az Fish2 típusú-e
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        return "fish food";
    }
    else {
        return "bird food";
    }
}
const pet1 = {
    fly: () => "",
};
console.log(getFood(pet1));
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    // return shape.side * shape.side;
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length * shape.width;
        default:
            const _defaultforshape = shape;
            return _defaultforshape;
    }
}
