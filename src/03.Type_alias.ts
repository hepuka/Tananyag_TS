//https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases

//type kulcsó után megadjuk a címkét majd a halmaz definícióját

type Szamok = 1 | 42 | 3.2;

//majd a megadott címkét használhatjuk a típusdefinícióban, változóknál és függvényeknél is

let ertek4: Szamok = 42;
function pelda(bemenet: Szamok): Szamok {
  return 42;
}

//1.példa
type Users = {
  readonly name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number; // ? opcionális tulajdonságot jelöl
};

function createUsers(user: Users) {
  return user;
}

let user11 = createUsers({ name: "Zolika", email: "z@z.com", isActive: true });

console.log(user11);

//user11.name = "hello"; nem lehet megváltoztatni, mert a name tulajdonság readonly

//2.példa
type Point = {
  x: number;
  y: number;
};

//függvény ami Point típusú objektumot kap bemenetként
function printCoord(pt: Point) {
  console.log(`The coordinate's x value is ${pt.x}`);
  console.log(`The coordinate's y value is ${pt.y}`);
}

printCoord({ x: 100, y: 300 });

//3.példa
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
