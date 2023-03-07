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
