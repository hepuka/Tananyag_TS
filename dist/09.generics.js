"use strict";
//www.typescriptlang.org/docs/handbook/2/generics.html
//https://www.typescriptlang.org/docs/handbook/2/generics.html#using-type-parameters-in-generic-constraints
//T a default neve a generic-nek
//példa függvényre
//bármilyen típusú lehet a 2 bemenet, amit objektumként ad vissza
function anotherfunction(valOne, valTwo) {
    return { valOne, valTwo };
}
console.log(anotherfunction(3, 3));
console.log(anotherfunction("alma", 3));
console.log(anotherfunction([1, 2, 3, 4, 5], 3));
//itt már pontosítjuk, hgy az U típus csak number lehet
function anotherfunction2(valOne, valTwo) {
    return { valOne, valTwo };
}
console.log(anotherfunction2(3, 3));
function anotherfunction3(valOne, valTwo) {
    return {
        valOne,
        valTwo,
    };
}
console.log(anotherfunction3("Database", {
    conn: "Home",
    username: "Hepuka",
    password: "aaa",
}));
//generic egy placeholder amibe bármilyen típusú adatot berakhatunk.
//minden generic adattípust <>-be kell rakni
//itt a T csak objektum típusú lehet
const addId = (obj) => {
    const id = Math.random().toString(16); //hexa számot ad vissza
    return Object.assign(Object.assign({}, obj), { id });
};
const user4 = {
    name: "Jack",
    age: 45,
    data: {
        meta: "foo",
    },
    meta: "bar",
};
const user5 = {
    name: "John",
    age: 20,
    data: ["foo", "bar", "baz"],
    meta: "Debrecen",
};
const result = addId(user4);
console.log(result);
///////////////////////////////////
const echo = (arg) => arg;
const isObj = (arg) => {
    return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};
console.log(isObj(true));
console.log(isObj("John"));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: "John" }));
console.log(isObj(null));
//2.pld
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
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
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
const processUser = (user) => {
    return user;
};
console.log(processUser({ id: 1, name: "Dave" }));
//5.pld
const getUserProperty = (users, key) => {
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
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject("John");
console.log(store.state);
store.state = "Dave";
//store.state = 12
const myState = new StateObject([15]);
myState.state = ["Dave", 42, true];
console.log(myState.state);
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
    get Cart() {
        return this.cart;
    }
}
class Sellable2 {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
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
