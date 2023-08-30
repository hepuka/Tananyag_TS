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
  return `${index}.item: ${item}`;
});

console.log(arr.join(", "));

//ez esetben csak number típusú értékeket tartalmazhat a tömb
//ilyen formában csak akkor kell megadni, ha kezdetben üres a tömb
let szamok: Array<number> = [];

//így is megadhatjuk
let szamok2: number[] = [];
szamok2.push(23);

//ez esetben már nem kell a típust megadni a TYPE INFERENCE miatt
let szamok3 = [15, 12, 34];

//Array type alias-al
type User2 = {
  name: string;
  isActive: boolean;
};

const allUsers: User2[] = [];

allUsers.push({ name: "", isActive: true });
console.log(allUsers);

//Array in Array

const MLModels: number[][] = [
  [255, 255, 255, 0],
  [1, 1, 1, 1],
];
MLModels.push([234, 234, 234, 0]);
console.log(MLModels);

//Readonly Array
//https://www.typescriptlang.org/docs/handbook/2/objects.html#the-readonlyarray-type

//1.példa
const roArray: ReadonlyArray<string> = ["red", "green", "blue"];

//2.példa
function doStuff(values: ReadonlyArray<string>) {
  console.log(`The first value is ${values[0]}`);

  //values.push("hello!"); Property 'push' does not exist on type 'readonly string[]'.
}
doStuff(roArray);

/////////////////////////////TUPLE (értéktöbbes)//////////////////////////

//Olyan tömb ami kevés elemet tartalmaz és az elemek a típusaiban eltérnek

//string csak a 0.indexen, number pedig csak az 1.indexen lehet ...
let szemely: [string, number, boolean] = ["Zolika", 45, true];

//ellentéteben az unionnál ott bármilyen sorrendben lehetnek az elemek
let mixedArray2: (string | number | boolean)[] = [true, "alma", 2];

//type alias használatával
type Szemely = [string, number];
let szemely0 = ["zolika", 46];

//címkéket is meg lehet adni a TUPLE definíciójába
type Szemely2 = [id: number, nev: string, eletkor: number];
let szemely01: Szemely2 = [100, "Zolika", 45];

//ez egy hiba a Tuple-ben, engedélyezi a 4 alap array metódus használatát
szemely01.push(2);

//a TUPLE-nél pontosan lehet tudni, hogy az 1.elem az string, így biztosan meg lehet változtatni, míg az unio esetében nem biztos, hogy az 1. helyen string van
szemely01[1] = "Hepuka";

//TUPLE-t használata distucturing révén érdemes használni
const [id, nev, eletkor] = szemely01;
console.log(id, nev, eletkor);
