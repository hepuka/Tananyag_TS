//www.typescriptlang.org/docs/handbook/2/generics.html
//https://www.typescriptlang.org/docs/handbook/2/generics.html#using-type-parameters-in-generic-constraints

//T a default neve a generic-nek
//generic egy placeholder amibe bármilyen típusú adatot berakhatunk. Minden generic adattípust <>-be kell rakni
const display = <T>(value:T) => {
  console.log(value)
}
display(2);
display("user")
display(true)

//bármilyen típusú lehet a 2 bemenet, amit objektumként ad vissza
function anotherfunction<T, U>(valOne: T, valTwo: U): object {
  return { valOne, valTwo };
}

console.log(anotherfunction(3, 3));
console.log(anotherfunction("alma", 3));
console.log(anotherfunction([1, 2, 3, 4, 5], 3));

//////////////////////////////

//itt pontosítjuk, hogy az U típus csak number lehet
function anotherfunction2<T, U extends number>(valOne: T, valTwo: U): object {
  return { valOne, valTwo };
}
console.log(anotherfunction2(3, 3));

//////////////////////////////

interface Database {
  conn: string;
  username: string;
  password: string;
}

//itt már pontosítjuk, hogy az U típus csak Database típusú lehet
function anotherfunction3<T, U extends Database>(valOne: T, valTwo: U) {
  return {
    valOne,
    valTwo,
  };
}
console.log(
  anotherfunction3("Database", {
    conn: "Home",
    username: "Hepuka",
    password: "aaa",
  })
);

//////////////////////////

//itt a T csak objektum típusú lehet
const addId = <T extends object>(obj: T) => {
  const id = Math.random().toString(16); //hexa számot ad vissza
  return {
    ...obj,
    id,
  };
};

/////////////////////////

function getSearchProducts<T>(products: T[], index: number): T {
  return products[index];
}
const getMoreSearchProducts = <T>(products: T[], index: number): T => {
  return products[index];
};

const expArray: number[] = [1, 2, 3, 4, 5];
const anotherExpArray: string[] = ["sdf", "jhh", "hjkh"];

console.log(getSearchProducts(expArray, 0));
console.log(getSearchProducts(anotherExpArray, 0));

const findIndex = <T>(array: T[], searchedItem: T): number => {
  if (!array.includes(searchedItem)) {
    return -1;
  }
  return array.indexOf(searchedItem);
};

console.log(findIndex(expArray, 1));
console.log(findIndex(expArray, 8));
console.log(findIndex(anotherExpArray, "sdf"));
console.log(findIndex(anotherExpArray, "sasdadf"));

////////////////////////

//data bármilyen adattípus lehet
//a lenti példányban egyszer objektum a másiknál string tömb
interface UserInterface3<T, V> {
  name: string;
  age: number;
  data: T;
  meta: V;
}

const user4: UserInterface3<{ meta: string }, string> = {
  name: "Jack",
  age: 45,
  data: {
    meta: "foo",
  },
  meta: "bar",
};

const user5: UserInterface3<string[], string> = {
  name: "John",
  age: 20,
  data: ["foo", "bar", "baz"],
  meta: "Debrecen",
};

const result = addId<UserInterface3<{}, string>>(user4);

console.log(result);

///////////////////////////////////

const echo = <T>(arg: T): T => arg;

const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

console.log(isObj(true));
console.log(isObj("John"));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: "John" }));
console.log(isObj(null));

//2.pld

const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  }

  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { arg, is: false };
  }
  return { arg, is: !!arg };
};

console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue("Dave"));
console.log(isTrue(""));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({}));
console.log(isTrue({ name: "Dave" }));
console.log(isTrue([]));
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));

//3.pld
interface boolCheck<T> {
  value: T;
  is: boolean;
}

const checkBoolValue = <T>(arg: T): boolCheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
    return { value: arg, is: false };
  }

  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { value: arg, is: false };
  }
  return { value: arg, is: !!arg };
};

//.4.pld
interface HasID {
  id: number;
}

const processUser = <T extends HasID>(user: T): T => {
  return user;
};

console.log(processUser({ id: 1, name: "Dave" }));

//5.pld

const getUserProperty = <T extends HasID, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
  return users.map((item) => item[key]);
};

const usersArray = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
];

console.log(getUserProperty(usersArray, "email"));
console.log(getUserProperty(usersArray, "username"));

//////////////////////GENERIC IN CLASS/////////////////////////////

class StateObject<T> {
  private data: T;

  constructor(value: T) {
    this.data = value;
  }

  get state(): T {
    return this.data;
  }

  set state(value: T) {
    this.data = value;
  }
}
const store = new StateObject("John");
console.log(store.state);
store.state = "Dave";
//store.state = 12

const myState = new StateObject<(string | number | boolean)[]>([15]);
myState.state = ["Dave", 42, true];
console.log(myState.state);

//2.példa

interface Quiz {
  namesss: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];
  addToCart(product: T) {
    this.cart.push(product);
  }

  get Cart() {
    return this.cart;
  }
}
class Sellable2<T extends Quiz> {
  public cart: T[] = [];
  addToCart(product: T) {
    this.cart.push(product);
  }

  get Cart() {
    return this.cart;
  }
}

const sell = new Sellable();
sell.addToCart("alma");
sell.addToCart("dio");
sell.addToCart("körte");
sell.addToCart({ name: "alma" });
console.log(sell.Cart);

const sell2 = new Sellable2();

sell2.addToCart({ namesss: "Hello", type: "question" });
console.log(sell2.Cart);
