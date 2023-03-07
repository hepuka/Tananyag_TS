"use strict";
/////////////////////////////////CLASSES////////////////////////////////////
class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangableName = firstName;
    }
    //nem változtatható meg a változó értéke mert readonly
    /*   changeUnchangableName(): void {
      this.unchangableName = "foo";
    } */
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
User.maxAge = 50;
let user3 = new User("Hepuka", "Kun-Fagyal");
console.log(user3.getFullName());
//console.log(user3.firstName); itt már nem lesz látható a firstname mert az osztályban private a láthatósága
//console.log(user.maxAge); itt már nem látható mert static
console.log(User.maxAge); //itt látható mert az osztálynévre hívtam meg és nem a példányosított objektumra (static)
