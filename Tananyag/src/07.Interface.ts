//https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces

//Amikor egy objektum struktúráját egy általánosan felhasználható referenciaként határozom meg akkor a TYPE ALIAS helyett interface-t is használhatunk
interface Album2 {
  id: number;
  name: string;
  title: string;
}

//különbség, hogy az INTERFACE bővíthető további kulcs-érték párral a TYPE ALIAS nem
interface Album2 {
  address: string;
}

//////////////////////INTERFACE használható TYPE ALIAS-ban is mint típus/////////////////////

//ha ?-et rakok a kulcs után akkor az a kulcs opcionális, nem szükséges megadni
interface Photo {
  readonly _id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

type Album3 = {
  id: number;
  name: string;
  title: string;
  photos?: Photo[];
};

//2.példa
interface UserInterface {
  name: string;
  age: number;
  address?: string;
  getMessage(): string;
  getTextLength: (text: string) => number; //ebben a fomában is megadható a függvény
  getData: () => string; //ebben a fomában is megadható a függvény ha nincs paraméter
}

interface Admin1
  extends UserInterface /*ide jöhetnek még további interface-ek vesszővel elválasztva */ {
  role: "admin" | "ta" | "learner";
  pin: number;
}

const user: Admin1 = {
  name: "Zoltan",
  age: 46,
  role: "admin",
  pin: 1234,
  getMessage() {
    return `Hello ${this.name}`;
  },
  getTextLength: (name) => {
    return name.length;
  },
  getData: () => {
    return "returned string";
  },
};

console.log(user.getMessage());
console.log(user.getTextLength("alma"));
console.log(user.getData());

/////////INTERFACE használata CLASS-ban////////////////

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  constructor(public name: string, public instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  //kötelezeő implementálni
  play(action: string) {
    return `${this.name} ${action} on the ${this.instrument}`;
  }
}

const page = new Guitarist("Jimmy", "guitar");

console.log(page.play("play(s)"));
