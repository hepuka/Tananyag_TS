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

//Arrow functions
const getFullName = (name: string, surname: string): string => {
  return `${name} ${surname}`;
};

console.log(getFullName("Kun-Fagyal", "Zoltán"));

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

//2.példa
interface User2Interface {
  name: string;
  surname: string;
}

//kezdetben null értéket adunk a változónak, majd később adjuk hozzá az interface-ben meghatározottakat
let user2: User2Interface | null = null;

/////////////////////////LITERAL TÍPUS////////////////////////

//a típus defínícióban kell megadni explicite azokat az értékeket amelyeket a változó felvehet
let ertek3: 1 | 42 | 3.2 = 42;

console.log(ertek3);

/////////////////////////////TYPE ALIAS////////////////////////

//type kulcsó után megadjuk a címkét majd a halmaz definícióját

type Szamok = 1 | 42 | 3.2;

//majd a megadott címkét használhatjuk a típusdefinícióban, változóknál és függvényeknél is

let ertek4: Szamok = 42;
function pelda(bemenet: Szamok): Szamok {
  return 42;
}

//2.példa
//létrehozunk egy status típust ami ezt a 3 értékre van deiniálva
type Status = "Elkezdve" | "Folyamatban" | "Befizetve";

//a progress változó ezeket az értékeket veheti fel pl. egy AJAX kérés közben
let progress: Status;

progress = "Elkezdve";
progress = "Folyamatban";
progress = "Befizetve";

//3.példa
type PopularTag = string;
//eredetileg a PopularTag egy string, de a használatkor megadható string tömbnek is
const popularTags: PopularTag[] = ["dragon", "coffee"];
console.log(popularTags);

////////////////////////UNION and ALIAS///////////////////////
//4.példa

type MaybepopularTag = PopularTag | null;
const dragonsTag: MaybepopularTag = "dragon;";

/////////////////////////////ARRAY///////////////////////////

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

//////////////////////////////////OBJEKTUM///////////////////////////////

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

//////////////////////////////////INTERFACE///////////////////////////

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

//2.példa
interface UserInterface {
  name: string;
  age: number;
  address?: string;
  getMessage(): string;
}

const user: UserInterface = {
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
  firstName: string;
  // private firstName: string;
  lastName: string;
  readonly unchangableName: string;
  static readonly maxAge = 50;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.unchangableName = firstName;
  }

  //nem változtatható meg a változó értéke mert readonly

  /*   changeUnchangableName(): void {
    this.unchangableName = "foo";
  } */

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

let user3 = new User("Hepuka", "Kun-Fagyal");
console.log(user3.getFullName());
//console.log(user3.firstName); itt már nem lesz látható a firstname mert az osztályban private a láthatósága

//console.log(user.maxAge); itt már nem látható mert static
console.log(User.maxAge); //itt látható mert az osztálynévre hívtam meg és nem a példányosított objektumra (static)

////////////////////////////INHERITANCE////////////////////////

class Admin extends User {
  private editor: string = "Editor: Hepuka";

  setEditor(editor: string): void {
    this.editor = editor;
  }

  getEditor(): string {
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
const addId = <T extends object>(obj: T) => {
  const id = Math.random().toString(16); //hexa számot ad vissza
  return {
    ...obj,
    id,
  };
};

//data bármilyen adattípus lehet
//a lenti példányban egyszer objektum a másiknál string tömb
interface UserInterface3<T, V> {
  name: string;
  age: number;
  data: T;
  meta: V;
}

const user4: UserInterface3<{ meta: string }, string> = {
  name: "Jack",
  age: 45,
  data: {
    meta: "foo",
  },
  meta: "bar",
};

const user5: UserInterface3<string[], string> = {
  name: "John",
  age: 20,
  data: ["foo", "bar", "baz"],
  meta: "Debrecen",
};

const result = addId<UserInterface3<{}, string>>(user4);

console.log(result);

//////////////////PUBLIC,PRIVATE,PROTECTED, READONLY////////////

//PUBLIC alapértelmezett
//PRIVATE - csak az osztályon belül használható
//PROTECTED - csak az osztályban látható és az örökölt osztályokban
//READONLY -   használhatjuk arra, hogy ha egy változót const-ként akarunk használni az osztályban

//////////////////////////////VOID,ANY,UNKNOWN//////////////////////////////

//VOID amikor nem térünk vissza semmivel egy függvényből. pl.csak console.log-ot használunk a függvény törzsében

const doSomething = (): void => {
  console.log("doSomething");
};

//ANY típusnál bármi lehet a változó típusa, nem ajánlott mivel atípus ebben nem definálható
let foo: any = 2;
foo = "str";

////////////////////////UNKNOWN,TYPE ASSERTION/////////////////////
//Typescipt3-ban volt bevezetve

let pageNumber: any = "1";
let numericPageNumber: number = pageNumber as number;
console.log(typeof numericPageNumber); //string típust ad visza, utánanézni miért??? miért nincs string to number konverzió

///////////////////////////DOM in TYPESCRIPT////////////////////////

//as HTMLInputElement meg kell adni mert csak ezzel tudjuk használni az elemre a metódusokat pl. a value
const someElement = document.querySelector(".foo") as HTMLInputElement;
//console.log(someElement.value);

//eseménykezőben is használni kell as HTMLInputElement-et, hogy az elem metódusait használni tudjuk
/* someElement.addEventListener("blur", (event) => {
  const target = event.target as HTMLInputElement;
  console.log(target.value);
});
 */
