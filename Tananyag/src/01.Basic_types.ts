let text: string;
let age: number;
let isgood: true;
let car: any;

//////////////////////////Type Inference//////////////////

//TS compiler az értékből levezeti a típust is
let ertek = "teszt";
let ertek2 = Math.random();
let regex: RegExp = /\w+/g;
let userId = 33445;

//////////////////////////////////NEVER//////////////////////////////
const createError = (errMsg: string) => {
  throw new Error(errMsg);
};

const infinite = () => {
  let i: number = 1;

  while (true) {
    console.log(i);
    i++;

    if (i === 11) break;
  }
};
infinite();

////////////////////////ANY/////////////////////
let pageNumber: any = "1";
let numericPageNumber: number = pageNumber as number;
console.log(typeof numericPageNumber); //string típust ad visza, utánanézni miért??? miért nincs string to number konverzió

//ANY típusnál bármi lehet a változó típusa, nem ajánlott mivel atípus ebben nem definálható
let foo: any = 2;
foo = "str";

////////////UNKNOWN////////////////
// unknown - The unknown type represents any value. This is similar to the any type, but is safer because it’s not legal to do anything with an unknown value:

function f1(a: any) {
  return a.b(); // OK
}
function f2(a: unknown) {
  // a.b(); 'a' is of type 'unknown'.
}

// This is useful when describing function types because you can describe functions that accept any value without having any values in your function body.

// Conversely, you can describe a function that returns a value of unknown type:

function safeParse(s: string): unknown {
  return JSON.parse(s);
}

// Need to be careful with 'obj'!
//const obj = safeParse(someRandomString);

/////////////////////NEVER/////////////////////
//Some functions never return a value
//The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program.

function fail(msg: string): never {
  throw new Error(msg);
}

// any vs unknown

// let val: any;
// val = 123;

// let result1 = val + 1;
// let result2 = val.toUpperCase();
// console.log(result2);

let val1: unknown;
val1 = "navin";

if (typeof val1 === "number") {
  let result1 = val1 + 1;
  console.log(result1);
} else if (typeof val1 === "string") {
  let result1 = val1.toUpperCase();
  console.log(result1);
}

// undefined VS null

function display1(value: string) {
  if (typeof value === "string") {
    console.log("User provided value");
    console.log(value);
  } else if (typeof value === "undefined") {
    console.log("User forgot to give value may be");
  } else if (value === null) {
    console.log("User don't want to display anything");
  }
}

let value: any;
value = null;
display1(value);

// for..of vs. for..in

let arrr = [10, 20, 30];

//közvetlenül az értékeket kapjuk meg
for (let value of arrr) {
  console.log(value);
}

//index-eken keresztül érjük el az értékeket
for (let index in arrr) {
  console.log(arrr[index]);
}

// hash # prefix class members

class BankAccount33 {
  accountName: string = "N/A";
  #accountBalance: number = 0;

  credit(amount: number) {
    this.#accountBalance += amount;
  }

  getBal() {
    return this.#accountBalance;
  }
}

let acc133 = new BankAccount33();
console.log(acc133.getBal());
acc133.credit(100);
console.log(acc133.getBal());
