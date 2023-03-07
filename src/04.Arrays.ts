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
