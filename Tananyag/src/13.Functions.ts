//Bemenetnek meghatároztuk,hogy az csak string típusú lehet és a kiment csak number típusú
function peldaFuggveny(bemeneti: string) {
  return 2;
}

//ez esetben nem kell kimeneti típust megadni, mert ez redundás infó, a length alapból numberrel tér vissza
function peldaFuggveny2(bemeneti: string) {
  return bemeneti.length;
}

console.log(peldaFuggveny2("Zolika"));

function peldaFuggveny4(bemeneti: string | number) {
  //NARROWING
  //pontosítani kell mert a number típusra nem érvényes a length
  if (typeof bemeneti === "string") {
    return bemeneti.length;
  }

  return bemeneti;
}

type greetType = (a: string) => void;

// Parameter type annotation
let greetResult: greetType = function greet(name) {
  console.log("Hello, " + name.toUpperCase() + "!!");
};

greetResult("Zolika");

//Return Type Annotations
function getFavoriteNumber() {
  return 260;
}

console.log(getFavoriteNumber());

// No type annotations here, but TypeScript can spot the bug
const names = ["Alice", "Bob", "Eve"];

// Contextual typing for function
names.forEach(function (s) {
  console.log(s.toUpperCase());
});

////////////////////////////Arrow functions////////////////////////
const getFullName = (
  name: string,
  surname: string,
  isPaid: boolean = false //default value declaration
): string => {
  return `${name} ${surname}: ${isPaid ? "paid" : "unpaid"}`;
};

console.log(getFullName("Kun-Fagyal", "Zoltán", true));
console.log(getFullName("Kun-Fagyal", "Zoltán"));

let getValue = (val: number): boolean | string => {
  return val > 5 ? true : "200 ok";
};
console.log(getValue(2));

//////////////////////////////TYPE ALIAS használatával///////////////////////
type mathFunction = (a: number, b: number) => number;

let multiply: mathFunction = function (c, d) {
  return c * d;
};

console.log(multiply(10, 5));

//////////////////////////////INTERFACE használatával////////////////////////
interface mathFunction2 {
  (a: number, b: number): number;
}

let multiply2: mathFunction2 = function (c, d) {
  return c * d;
};

console.log(multiply(3, 4));

//optional parameter
const addAll = (a: number, b: number, c?: number): number => {
  //Narrowing
  if (typeof c !== "undefined") {
    return a + b + c;
  }

  return a + b;
};

/////////////////////////////default parameter value//////////////////////
const sumAll = (a: number, b: number, c: number = 2): number => {
  return a + b + c;
};

console.log(addAll(2, 3, 2));
console.log(addAll(2, 3));
console.log(sumAll(2, 3));

//////////////////////////////////Rest parameters////////////////////////////
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

console.log(total(1, 2, 3));

const numberOrString = (value: number | string) => {
  if (typeof value === "string") {
    return "string";
  } else if (typeof value === "number") {
    return "number";
  }
};

//rest parameter

const buildNames = (firstName: string, ...anotherNames: string[]) => {
  return `${firstName} ${anotherNames.join(" ")}`;
};

const buildNamesWithArrayParam = (
  firstName: string,
  anotherNames: string[]
) => {
  return `${firstName} ${anotherNames.join(" ")}`;
};

const buildAllNames = (...names: string[]) => {
  return `${names.join(" ")}`;
};

const personOne = buildNames("steve", "john", "doe", "paul", "james");
const personOneWithArray = buildNamesWithArrayParam("steve", [
  "john",
  "doe",
  "paul",
  "james",
]);
const personAll = buildNames("steve", "john", "doe", "paul", "james");

console.log(personOne);
console.log(personOneWithArray);
console.log(personAll);
