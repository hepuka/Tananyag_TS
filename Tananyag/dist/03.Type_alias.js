"use strict";
//https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases
//majd a megadott címkét használhatjuk a típusdefinícióban, változóknál és függvényeknél is
let ertek4 = 42;
function pelda(bemenet) {
    return 42;
}
function createUsers(user) {
    return user;
}
let user11 = createUsers({ name: "Zolika", email: "z@z.com", isActive: true });
console.log(user11);
//függvény ami Point típusú objektumot kap bemenetként
function printCoord(pt) {
    console.log(`The coordinate's x value is ${pt.x}`);
    console.log(`The coordinate's y value is ${pt.y}`);
}
printCoord({ x: 100, y: 300 });
//a progress változó ezeket az értékeket veheti fel pl. egy AJAX kérés közben
let progress;
progress = "Elkezdve";
progress = "Folyamatban";
progress = "Befizetve";
//eredetileg a PopularTag egy string, de a használatkor megadható string tömbnek is
const popularTags = ["dragon", "coffee"];
console.log(popularTags);
const dragonsTag = "dragon;";
const myCard = {
    cardNumber: "546465465646",
    cardDate: "20230523",
    cvv: 43265646,
};
console.log(myCard);
