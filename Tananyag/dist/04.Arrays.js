"use strict";
//https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays
//ez esetben bármilyen típusúak lehet a tömb elemei
let all = [];
all.push(56);
all.push(true);
all.push("hello");
console.log(all);
let stringArr = ["one", "two", "three"];
let guitars = ["Strat", "Les Paul", 5150];
let mixedArr = ["EVH", 1984, true];
let arr = stringArr.map((item, index) => {
    return `${index}. item: ${item}`;
});
console.log(arr.join(", "));
//ez esetben csak number típusú értékeket tartalmazhat a tömb
//ilyen formában csak akkor kell megadni, ha kezdetben üres a tömb
let szamok = [];
//így is megadhatjuk
let szamok2 = [];
szamok2.push(23);
//szamok2.push("hello"); hibára fut, mert a tömb csak számokat tartalmazhat
//ez esetben már nem kell a típust megadni a TYPE INFERENCE miatt
let szamok3 = [15, 12, 34];
const allUsers = [];
allUsers.push({ name: "", isActive: true });
console.log(allUsers);
//Array in Array
const MLModels = [
    [255, 255, 255, 0],
    [1, 1, 1, 1],
];
MLModels.push([234, 234, 234, 0]);
console.log(MLModels);
//Readonly Array
//https://www.typescriptlang.org/docs/handbook/2/objects.html#the-readonlyarray-type
//1.példa
const roArray = ["red", "green", "blue"];
//2.példa
function doStuff(values) {
    const copy = values.slice();
    console.log(`The first value is ${values[0]}`);
    //values.push("hello!"); Property 'push' does not exist on type 'readonly string[]'.
}
/////////////////////////////TUPLE (értéktöbbes)//////////////////////////
//Olyan tömb ami kevés elemet tartalmaz és az elemek a típusaiban eltérnek
//string csak a 0.indexen, number pedig csak az 1.indexen lehet
let szemely = ["Zolika", 45];
//ellentéteben az unionnál ott bármilyen sorrendben lehetnek az elemek
let mixedArray2 = [true, "alma", 2];
let szemely01 = [100, "Zolika", 45];
//a TUPLE-nél pontosan lehet tudni, hogy az 1.elem az string, így biztosan meg lehet változtatni, míg az unio esetében nem biztos, hogy az 1. helyen string van
szemely01[1] = "Hepuka";
console.log(szemely01);
//TUPLE-t használata distucturing révén érdemes használni
const [nev, eletkor] = szemely01;
console.log(nev, eletkor);
