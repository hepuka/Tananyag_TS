"use strict";
//https://www.typescriptlang.org/docs/handbook/2/objects.html
let myObject;
//TYPE INFERENCE révén nem kell típusokat megadni, automatikusan felismeri
let album = {
    id: 1,
    name: "valami",
    title: "Bla Bla",
};
//Structural typing
//csak felépítésre figyel, az objektum property-ei csak a megadott típusú értékeket vehetik fel
let array = [];
function createUser(name, email, isPaid) {
    return { name: name, email: email, paid: `${isPaid ? "paid" : "unpaid"}` };
}
array.push(createUser("Zolika", "z@z.com", false));
array.push(createUser("Zolikaaaaa", "zzzzz@z.com", true));
console.log(array);
let album2 = {
    id: 2,
    name: "Halihó",
    title: "Bla Bla",
};
let simpleAlbum = {
    id: 1,
    name: "Simple",
    title: "Bla Bla2",
    editor: "Hepuka",
};
//album2.address= "Debrecen"; nem lehet új property-t hozzáadni, Album type nem módosítható
//egy függvény bemenete egy Album típusú objektum
const albumList = (albums) => {
    return `id: ${albums.id}, name: ${albums.name}, title: ${albums.title}`;
};
console.log(albumList(simpleAlbum));
