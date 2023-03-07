//a változó típusa lehet string is és number is
let valtozo: string | number = "Hello";

//valtozo:true; hibára fut

//tömbök deklarálása unióval
let stringArray: string[];
let mixedArray: (string | number | boolean)[];

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

let texts: "one" | "two" | "three";
texts = "three";
