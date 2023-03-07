let text: string;
let age: number;
let isgood: true;
let car: any;

//////////////////////////Type Inference//////////////////
let ertek = "teszt";
//ertek = 2; hibát dob, mert eredetileg string a típusa a változónak

let ertek2 = Math.random();
//ertek2="Béla"; ez is hibára fut mert a Math.random értéke number

let regex: RegExp = /\w+/g;

//////////////////////////////////NEVER//////////////////////////////
const createError = (errMsg: string) => {
  throw new Error(errMsg);
};

const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;

    if (i > 10) break;
  }
};

////////////////////////UNKNOWN,TYPE ASSERTION/////////////////////
//Typescipt3-ban volt bevezetve

let pageNumber: any = "1";
let numericPageNumber: number = pageNumber as number;
console.log(typeof numericPageNumber); //string típust ad visza, utánanézni miért??? miért nincs string to number konverzió
