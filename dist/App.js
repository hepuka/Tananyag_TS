"use strict";
//////////////////////////Type Inference//////////////////
let ertek = "teszt";
//ertek = 2; hibát dob, mert eredetileg string a típusa a változónak
let ertek2 = Math.random();
//ertek2="Béla"; ez is hibára fut mert a Math.random értéke number
////////////////////Függvények definiálása/////////////
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
///////////////////////////////UNION TYPE////////////////////////////////////
//a változó típusa lehet string is és number is
let valtozo = "Hello";
//valtozo:true; hibára fut
function peldaFuggveny3(bemeneti) {
    //Narrowing
    //hogyha a bemenet string csak akkor akkor működik a length
    if (typeof bemeneti === "string") {
        return bemeneti.length;
    }
    //kizárásos alapon az else ágban már csak number típus lehet
}
//kezdetben null értéket adunk a változónak, majd később adjuk hozzá az interface-ben meghatározottakat
let user2 = null;
/////////////////////////LITERAL TÍPUS////////////////////////
//a típus defínícióban kell megadni explicite azokat az értékeket amelyeket a változó felvehet
let ertek3 = 42;
console.log(ertek3);
//majd a megadott címkét használhatjuk a típusdefinícióban, változóknál és függvényeknél is
let ertek4 = 42;
function pelda(bemenet) {
    return 42;
}
//a progress változó ezeket az értékeket veheti fel pl. egy AJAX kérés közben
let progress;
progress = "Elkezdve";
progress = "Folyamatban";
progress = "Befizetve";
//eredetileg a PopularTag egy string, de a használatkor megadható string tömbnek is
const popularTags = ["dragon", "coffee"];
console.log(popularTags);
const dragonsTag = "dragon;";
/////////////////////////////ARRAY///////////////////////////
//ez esetben bármilyen típusú lehet a tömb
let szamok = [];
//ez esetben csak number típusú értékeket tartalmazhat a tömb
//ilyen formában csak akkor kell megadni, ha kezdetben üres a tömb
let szamok2 = [];
//így is megadhatjuk
let szamok22 = [];
//szamok2.push("hello"); hibára fut, mert a tömb csak számokat tartalmazhat
//ez esetben már nem kell a típust megadni a TYPE INFERENCE miatt
let szamok3 = [15, 12, 34];
//TUPLE (értéktöbbes)
//Olyan tömb ami kevés elemet tartalmaz és az elemek a típusaiban eltérnek
//string a 0.indexen van a number pedig az 1.indexen
let szemely = ["Zolika", 45];
let szemely2 = ["Zolika", 45];
//hivatkozás az elemekre
szemely2[1]; //visszaadja az 1.indexen lévő értéket
//TUPLE-t használata distucturing révén érdemes használni
const [nev, eletkor] = szemely2;
console.log(nev, eletkor);
//////////////////////////////////OBJEKTUM///////////////////////////////
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
const user = {
    name: "Zoltan",
    age: 46,
    getMessage() {
        return `Hello ${this.name}`;
    },
};
console.log(user);
console.log(user.name);
console.log(user.getMessage());
/////////////////////////////////CLASSES////////////////////////////////////
class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangableName = firstName;
    }
    //nem változtatható meg a változó értéke mert readonly
    /*   changeUnchangableName(): void {
      this.unchangableName = "foo";
    } */
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
User.maxAge = 50;
let user3 = new User("Hepuka", "Kun-Fagyal");
console.log(user3.getFullName());
//console.log(user3.firstName); itt már nem lesz látható a firstname mert az osztályban private a láthatósága
//console.log(user.maxAge); itt már nem látható mert static
console.log(User.maxAge); //itt látható mert az osztálynévre hívtam meg és nem a példányosított objektumra (static)
////////////////////////////INHERITANCE////////////////////////
class Admin extends User {
    constructor() {
        super(...arguments);
        this.editor = "Editor: Hepuka";
    }
    setEditor(editor) {
        this.editor = editor;
    }
    getEditor() {
        return this.editor;
    }
}
const admin = new Admin("adminFirst", "AdminSurname");
console.log(admin);
console.log(admin.getFullName());
//csak az Admin osztály példányai férnek hozzá, a User-é nem
console.log(admin.getEditor());
//////////////////////////////GENERICS////////////////////
//T a default neve a generic-nek
//minden generic adattípust <>-be kell rakni
const addId = (obj) => {
    const id = Math.random().toString(16); //hexa számot ad vissza
    return Object.assign(Object.assign({}, obj), { id });
};
const user4 = {
    name: "Jack",
    age: 45,
    data: {
        meta: "foo",
    },
    meta: "bar",
};
const user5 = {
    name: "John",
    age: 20,
    data: ["foo", "bar", "baz"],
    meta: "Debrecen",
};
const result = addId(user4);
console.log(result);
//////////////////PUBLIC,PRIVATE,PROTECTED, READONLY////////////
//PUBLIC alapértelmezett
//PRIVATE - csak az osztályon belül használható
//PROTECTED - csak az osztályban látható és az örökölt osztályokban
//READONLY -   használhatjuk arra, hogy ha egy változót const-ként akarunk használni az osztályban
//////////////////////////////VOID,ANY,UNKNOWN//////////////////////////////
//VOID amikor nem térünk vissza semmivel egy függvényből. pl.csak console.log-ot használunk a függvény törzsében
const doSomething = () => {
    console.log("doSomething");
};
//ANY típusnál bármi lehet a változó típusa, nem ajánlott mivel atípus ebben nem definálható
let foo = 2;
foo = "str";
////////////////////////UNKNOWN,TYPE ASSERTION/////////////////////
//Typescipt3-ban volt bevezetve
let pageNumber = "1";
let numericPageNumber = pageNumber;
console.log(typeof numericPageNumber); //string típust ad visza, utánanézni miért??? miért nincs string to number konverzió
///////////////////////////DOM in TYPESCRIPT////////////////////////
//as HTMLInputElement meg kell adni mert csak ezzel tudjuk használni az elemre a metódusokat pl. a value
const someElement = document.querySelector(".foo");
//console.log(someElement.value);
//eseménykezőben is használni kell as HTMLInputElement-et, hogy az elem metódusait használni tudjuk
/* someElement.addEventListener("blur", (event) => {
  const target = event.target as HTMLInputElement;
  console.log(target.value);
});
 */
