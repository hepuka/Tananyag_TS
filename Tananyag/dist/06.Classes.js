"use strict";
//PUBLIC alapértelmezett
//PRIVATE - csak az osztályon belül használható
//PROTECTED - csak az osztályban látható és az örökölt osztályokban
//READONLY - használhatjuk arra, hogy ha egy változót const-ként akarunk használni az osztályban
class User {
    //ha a constructor-ban megadjuk a láthatóságot (public address: string) akkor azt a változót a constructor előtt nem kell deklarálni
    constructor(firstName, lastName, address = "Debrecen", unchangableName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.unchangableName = unchangableName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangableName = firstName;
        this.address = address;
    }
    //nem változtatható meg a változó értéke mert readonly
    /*   changeUnchangableName(): void {
      this.unchangableName = "foo";
    } */
    deleteAddress() {
        console.log("Address deleted");
    }
    //////////////////////////GETTER/////////////////////////////
    getFullName() {
        return `${this.firstName} ${this.lastName} ${this.address}`;
    }
    get getAddress() {
        return this.address;
    }
    //////////////////////////SETTER/////////////////////////////
    set setAddress(address) {
        this.address = address;
    }
}
// lastName: string;
User.maxAge = 50;
let user3 = new User("Hepuka", "Kun-Fagyal");
console.log(user3.getFullName());
console.log(`Address: ${user3.getAddress}`);
//console.log(user3.firstName); itt már nem lesz látható a firstname mert az osztályban private a láthatósága
//user3.deleteAddress(); mivel a deleteAddress privát metódus, így ez csak az osztályban használáható, látható
user3.setAddress = "Budapest";
console.log(user3);
class WedDev extends User {
    constructor(computer, firstName, lastName) {
        super(firstName, lastName);
        this.computer = computer;
        this.computer = computer;
    }
    get getLocation() {
        return `My location is ${this.address}`;
    }
}
const Sara = new WedDev("Mac", "Sara", "Kun-Fagyal");
console.log(Sara);
console.log(Sara.getLocation);
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class YouTube {
    constructor(cameraMode, filter, burst, short) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
    createStory() {
        console.log("Story was created!");
    }
}
/////////////////////////////////////////////STATIC////////////////////////////////////
//1.példa az előző osztályból
//console.log(user.maxAge); itt már nem látható mert static
console.log(User.maxAge); //itt látható mert az osztálynévre hívtam meg és nem a példányosított objektumra (static)
//2.példa
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");
console.log(Steve);
console.log(Peeps.count);
