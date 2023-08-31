////////////////////NARROWING////////////////////////
//https://www.typescriptlang.org/docs/handbook/2/narrowing.html

//1.példa
function peldaFuggveny3(bemenet: string | number) {
  //akkor működik a length hogyha a bemenet string, ezt külön meg kell vizsgálni
  if (typeof bemenet === "string") {
    return bemenet.length;
  }
  //kizárásos alapon az else ágban már csak number típus lehet a bemenet
  return bemenet ** 2;
}
console.log(peldaFuggveny3(3));
console.log(peldaFuggveny3("alma"));

//in oprator in NARROWING
//https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-in-operator-narrowing

//az IN meghatározza, hogy egy objektum rendelkezik-e a magadott tulajdonsággal
interface Users1 {
  name: string;
  email: string;
}

interface Admin2 {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAccount(account: Users1 | Admin2) {
  if ("isAdmin" in account) {
    return `${account.isAdmin} - this is Admin acoount.`;
  }

  return "This is User account";
}

const user2222: Users1 = {
  name: "HEllo",
  email: "h@h.com",
};
console.log(isAdminAccount(user2222));

const user22222: Admin2 = {
  name: "HEllo",
  email: "h@h.com",
  isAdmin: true,
};
console.log(isAdminAccount(user22222));

//2.példa

//az IN meghatározza, hogy egy objektum rendelkezik-e a magadott függvénnyel
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }

  return animal.fly();
}

const animal1: Fish = {
  swim: () => "This has swim method",
};
console.log(animal1.swim());

const animal2: Bird = {
  fly: () => "This has fly method",
};
console.log(animal2.fly());

//INSTANCEOF ellenőrzi, hogy egy érték egy másik érték „példánya”-e vagy sem.
//https://www.typescriptlang.org/docs/handbook/2/narrowing.html#instanceof-narrowing

//itt a date változó a Date metódus példánya
const date = new Date();

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log("This is date");
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

logValue(date);

//Using type predicates
//https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates

type Fish2 = { swim: () => void };
type Bird2 = { fly: () => void };

//így is ki lehet szűrni, hogy a pet az Fish2 típusú-e
function isFish(pet: Fish2 | Bird2): pet is Fish2 {
  return (pet as Fish2).swim !== undefined;
}

function getFood(pet: Fish2 | Bird2) {
  if (isFish(pet)) {
    return "fish food";
  } else {
    return "bird food";
  }
}

const pet1: Bird2 = {
  fly: () => "",
};
console.log(getFood(pet1));

//Discriminated unions
//https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions

interface Circle {
  kind: "circle";
  radius: number;
}
interface Square {
  kind: "square";
  side: number;
}

interface Rectangle {
  kind: "rectangle";
  length: number;
  width: number;
}

type Shape = Circle | Square | Rectangle;

function getTrueShape(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }

  // return shape.side * shape.side;
}

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;

    case "square":
      return shape.side * shape.side;

    case "rectangle":
      return shape.length * shape.width;

    default:
      const _defaultforshape: never = shape;
      return _defaultforshape;
  }
}
