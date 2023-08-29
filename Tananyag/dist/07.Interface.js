"use strict";
//https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces
const user = {
    name: "Zoltan",
    age: 46,
    role: "admin",
    pin: 1234,
    getMessage() {
        return `Hello ${this.name}`;
    },
    getCoupon: (name) => {
        return name.length;
    },
};
console.log(user);
console.log(user.name);
console.log(user.getMessage());
console.log(user.getCoupon("alma"));
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} on the ${this.instrument}`;
    }
}
const Page = new Guitarist("Jimmy", "guitar");
console.log(Page.play("practice"));
