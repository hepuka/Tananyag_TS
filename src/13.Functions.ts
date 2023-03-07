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
  //
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
  if (typeof value === "string") return "string";
  if (typeof value === "number") return "number";
};
