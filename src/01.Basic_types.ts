let text: string;
let age: number;
let isgood: true;
let car: any;

//////////////////////////Type Inference//////////////////
let ertek = "teszt";
//ertek = 2; hibát dob, mert eredetileg string a típusa a változónak

let ertek2 = Math.random();
//ertek2="Béla"; ez is hibára fut mert a Math.random értéke number

////////////////////////////////FUNCTIONS//////////////////////////////////

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

////////////////////////UNKNOWN,TYPE ASSERTION/////////////////////
//Typescipt3-ban volt bevezetve

let pageNumber: any = "1";
let numericPageNumber: number = pageNumber as number;
console.log(typeof numericPageNumber); //string típust ad visza, utánanézni miért??? miért nincs string to number konverzió
