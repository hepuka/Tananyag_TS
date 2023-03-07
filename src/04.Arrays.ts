//ez esetben bármilyen típusúak lehet a tömb elemei
let all = [];
all.push(56);
all.push(true);
all.push("hello");
console.log(all);

let stringArr = ["one", "two", "three"];
let guitars = ["Strat", "Les Paul", 5150];
let mixedArr = ["EVH", 1984, true];

//ez esetben csak number típusú értékeket tartalmazhat a tömb
//ilyen formában csak akkor kell megadni, ha kezdetben üres a tömb
let szamok: Array<number> = [];

//így is megadhatjuk
let szamok2: number[] = [];

//szamok2.push("hello"); hibára fut, mert a tömb csak számokat tartalmazhat

//ez esetben már nem kell a típust megadni a TYPE INFERENCE miatt
let szamok3 = [15, 12, 34];

/////////////////////////////TUPLE (értéktöbbes)//////////////////////////

//Olyan tömb ami kevés elemet tartalmaz és az elemek a típusaiban eltérnek

//string csak a 0.indexen, number pedig csak az 1.indexen lehet
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
