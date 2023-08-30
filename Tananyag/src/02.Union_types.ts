//https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types

//a változó típusa lehet string is és number is
let valtozo: string | number = "Hello";

valtozo = 15; //mivel a deklarációban 2 típust adtunk meg, a string értéket módosíthatjuk number értékre

//tömbök deklarálása unióval
let stringArray: string[];
let mixedArray: (string | number | boolean)[] = ["alma", true, 2];

//függvények definiálásánál is használható
//1.példa
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
printId(101); //ok
printId("202"); //ok

//2.példa
interface User2Interface {
  name: string;
  surname: string;
}

//kezdetben null értéket adunk a változónak, majd később adjuk hozzá az interface-ben meghatározottakat
let user2: User2Interface | null = null;

//3.példa
type Userss = {
  name: string;
  id: number;
};

type Admins = {
  username: string;
  id: number;
};

let name1: Userss | Admins = { name: "Zolika", id: 111 };
let username1: Userss | Admins = {
  username: "Zolika",
  id: 2345,
};

//mivel két típust adtam meg, engedélyezi, hogy az eredetileg Userss-re létrehozott name1 változót átírjam Admins típusra
name1 = { username: "Hepuka", id: 123 };

/////////////////////////LITERAL TÍPUS////////////////////////

//a típus defínícióban kell megadni explicite azokat az értékeket amelyeket a változó felvehet
let ertek3: 1 | 42 | 3.2;
ertek3 = 42;
console.log(ertek3);

let texts: "one" | "two" | "three";
texts = "three";
//texts = "alma"; HIBA, az alma értéket nem veheti fel a texts változó
