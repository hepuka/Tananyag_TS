//https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types

//a változó típusa lehet string is és number is
let valtozo: string | number = "Hello";

valtozo = 15; //mivel a deklarációban 2 típust adtunk meg, a string értéket módosíthatjuk number értékre

//valtozo:true; itt hibára fut mert vagy string vagy number lehet az érték.

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
//printId({ myID: 22342 });

////////////////////NARROWING////////////////////////
//https://www.typescriptlang.org/docs/handbook/2/narrowing.html

//2.példa
function peldaFuggveny3(bemenet: string | number) {
  //akkor működik a length hogyha a bemenet string, ezt külön meg kell vizsgálni
  if (typeof bemenet === "string") {
    return bemenet.length;
  }
  //kizárásos alapon az else ágban már csak number típus lehet a bemenet
  return bemenet ** 2;
}
console.log(peldaFuggveny3(3));
console.log(peldaFuggveny3("alma"));

//IN oprator in NAROOWING
//https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-in-operator-narrowing

//az IN meghatározza, hogy egy objektum rendelkezik-e a magadott tulajdonsággal
interface Users1 {
  name: string;
  email: string;
}

interface Admin2 {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAccount(account: Users1 | Admin2) {
  if ("isAdmin" in account) {
    return `${account.isAdmin} - this is Admin acoount.`;
  }

  return "This is User account";
}

const user2222: Users1 = {
  name: "HEllo",
  email: "h@h.com",
};
console.log(isAdminAccount(user2222));

const user22222: Admin2 = {
  name: "HEllo",
  email: "h@h.com",
  isAdmin: true,
};
console.log(isAdminAccount(user22222));

//2.példa
//az IN meghatározza, hogy egy objektum rendelkezik-e a magadott függvénnyel
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }

  return animal.fly();
}

const animal1: Fish = {
  swim: () => "This has swim method",
};
console.log(animal1.swim());

const animal2: Bird = {
  fly: () => "This has fly method",
};
console.log(animal2.fly());

//3.példa
interface User2Interface {
  name: string;
  surname: string;
}

//kezdetben null értéket adunk a változónak, majd később adjuk hozzá az interface-ben meghatározottakat
let user2: User2Interface | null = null;

//4.példa
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
