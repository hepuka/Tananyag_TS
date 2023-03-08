type One = string;
type Two = number;
type Three = "hello";

//convert to more or less specific
let a: One = "hello";

let b = a as unknown as Two; //less spesific
let c = a as Three; //more specific

console.log(b);
console.log(c);

//2.példa
const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;

  return "" + a + b;
};

let myVal: string = addOrConcat(2, 2, "concat") as string;

//be careful, TS see np problem, but a string is returned
let nextVal: number = addOrConcat(2, 2, "concat") as number;
