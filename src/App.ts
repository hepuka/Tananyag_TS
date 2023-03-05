//////////////////////////Type Inference//////////////////
let ertek = "teszt";
//ertek = 2; hibát dob, mert eredetileg string a típusa a változónak

let ertek2 = Math.random();
//ertek2="Béla"; ez is hibára fut mert a Math.random értéke number

////////////////////Függvények definiálása/////////////

//Bemenetnek meghatároztuk,hogy az csak string típusú lehet és a kiment csak number típusú
function peldaFuggveny(bemeneti: string): number {
  return 2;
}

//ez esetben nem kell kimeneti típust megadni, mert a length alapból numberrel tér vissza
function peldaFuggveny2(bemeneti: string) {
  return bemeneti.length;
}

console.log(peldaFuggveny2("Zolika"));

///////////////////////////////UNION TYPE////////////////////////////////////

//a változó típusa lehet string is és number is
let valtozo: string | number = "Hello";

//valtozo:true; hibára fut

function peldaFuggveny3(bemeneti: string | number) {
  //Narrowing
  //hogyha a bemenet string csak akkor akkor működik a length
  if (typeof bemeneti === "string") {
    return bemeneti.length;
  }

  //kizárásos alapon az else ágban már csak number típus lehet
}

//LITERAL TÍPUS
//a típus defínícióban kell megadni explicite azokat az értékeket amelyeket a változó felvehet
let ertek3: 1 | 42 | 3.2 = 42;

console.log(ertek3);

//TYPE ALIAS
//type kulcsó után megadjuk a címkét majd a halmaz definícióját

type Szamok = 1 | 42 | 3.2;

//majd a megadott címkét használhatjuk a típusdefinícióban, változóknál és függvényeknél is

let ertek4: Szamok = 42;
function pelda(bemenet: Szamok): Szamok {
  return 42;
}

//létrehozunk egy status típust ami ezt a 3 értékre van deiniálva
type Status = "Elkezdve" | "Folyamatban" | "Befizetve";

//a progress változó ezeket az értékeket veheti fel pl. egy AJAX kérés közben
let progress: Status;

progress = "Elkezdve";
progress = "Folyamatban";
progress = "Befizetve";

//ARRAY

//ez esetben bármilyen típusú lehet a tömb
let szamok = [];

//ez esetben csak number típusú értékeket tartalmazhat a tömb
//ilyen formában csak akkor kell megadni, ha kezdetben üres a tömb
let szamok2: Array<number> = [];

//így is megadhatjuk
let szamok22: number[] = [];

//szamok2.push("hello"); hibára fut, mert a tömb csak számokat tartalmazhat

//ez esetben már nem kell a típust megadni a TYPE INFERENCE miatt
let szamok3 = [15, 12, 34];

//TUPLE (értéktöbbes)
//Olyan tömb ami kevés elemet tartalmaz és az elemek a típusaiban eltérnek
//string a 0.indexen van a number pedig az 1.indexen
let szemely: [string, number] = ["Zolika", 45];

//tape alias használatával
type Szemely = [string, number];

//címkéket is meg lehet adni a TUPLE definíciójába
type Szemely2 = [nev: string, eletkor: number];

let szemely2: Szemely2 = ["Zolika", 45];

//hivatkozás az elemekre
szemely2[1]; //visszaadja az 1.indexen lévő értéket

//TUPLE-t használata distucturing révén érdemes használni
const [nev, eletkor] = szemely2;

console.log(nev, eletkor);

//OBJEKTUM

//TYPE INFERENCE révén nem kell típusokat megadni, automatikusan felismeri
let album = {
  id: 1,
  name: "valami",
  title: "Bla Bla",
};

//Structural typing
//csak felépítésre figyel, az objektum property-ei csak a megadott típusú értékeket vehetik fel

//TYPE ALIAS használata:

type Album = {
  id: number;
  name: string;
  title: string;
};

let album2: Album = {
  id: 2,
  name: "Halihó",
  title: "Bla Bla",
};

//INTERFACE
//Ha egy objektum struktúráját egy általános referenciaként határozommeg mint a TYPE ALIAS-nál, akkor e helyett interface-t is használhatunk.
interface Album2 {
  id: number;
  name: string;
  title: string;
}

//különbség, hogy az INTERFACE bővíthető további kuécs-érték párral a TYPE ALIAS nem
interface Album2 {
  address: string;
}

//INTERFACE használható TYPE ALIAS-ban is mint a kulcs értéke
//ha ?-et rakok a kulcs után akkor az a kulcs opcionális, nem szükséges megadni
interface Photo {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

type Album3 = {
  id: number;
  name: string;
  title: string;
  photos?: Array<Photo>;
};
