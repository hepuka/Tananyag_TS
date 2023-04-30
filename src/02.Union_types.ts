//a változó típusa lehet string is és number is
let valtozo: string | number = "Hello";

valtozo = 15; //mivel a deklarációban 2 típust adtunk meg, a string értéket módosíthatjuk number értékre

//valtozo:true; itt hibára fut mert vagy string vagy number lehet az érték.

//tömbök deklarálása unióval
let stringArray: string[];
let mixedArray: (string | number | boolean)[];

//függvények definiálásánál is használható
function peldaFuggveny3(bemenet: string | number) {
  //Narrowing
  //akkor működik a length hogyha a bemenet string, ezt külön meg kell határozni
  if (typeof bemenet === "string") {
    return bemenet.length;
  } else {
    //kizárásos alapon az else ágban már csak number típus lehet a bemenet
  }
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

let texts: "one" | "two" | "three";
texts = "three";
