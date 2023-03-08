"use strict";
const user = {
    name: "Zoltan",
    age: 46,
    getMessage() {
        return `Hello ${this.name}`;
    },
};
console.log(user);
console.log(user.name);
console.log(user.getMessage());
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
