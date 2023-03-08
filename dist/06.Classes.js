"use strict";
//PUBLIC alapértelmezett
//PRIVATE - csak az osztályon belül használható
//PROTECTED - csak az osztályban látható és az örökölt osztályokban
//READONLY -   használhatjuk arra, hogy ha egy változót const-ként akarunk használni az osztályban
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
    getFullName() {
        return `${this.firstName} ${this.lastName} ${this.address}`;
    }
}
// lastName: string;
User.maxAge = 50;
let user3 = new User("Hepuka", "Kun-Fagyal");
console.log(user3.getFullName());
//console.log(user3.firstName); itt már nem lesz látható a firstname mert az osztályban private a láthatósága
class WedDev extends User {
    constructor(computer, firstName, lastName) {
        super(firstName, lastName);
        this.computer = computer;
        this.computer = computer;
    }
    getLoc() {
        return `My location is ${this.address}`;
    }
}
const Sara = new WedDev("Mac", "Hepuka", "Kun-Fagyal");
console.log(Sara);
console.log(Sara.getLoc());
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
