"use strict";
let myObject;
//TYPE INFERENCE révén nem kell típusokat megadni, automatikusan felismeri
let album = {
    id: 1,
    name: "valami",
    title: "Bla Bla",
};
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
